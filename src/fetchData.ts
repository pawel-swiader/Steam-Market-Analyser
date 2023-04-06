import Case from '../models/Case';
import puppeteer from 'puppeteer';
import { setTimeout } from "timers/promises";
import models from '../models/cases';
const cheerio = require('cheerio');

function getTableName(caseName: string): string {
  return caseName
    .toLowerCase()
    .replace(/:/g, '')
    .replace(/ /g, '_')
    .replace(/&/g, 'and');
}

function getModelByTableName(tableName: string): any {
  const modelFound = models.find(model => model.tableName === tableName);
  if (modelFound) return modelFound;
  else {
    console.log('Couldnt find model');
    return null;
  }
}

export async function fetchData() {
  // HTML class name
  const className = ('market_commodity_orders_header_promote');

  // Find cases from database (records in 'cases' table)
  const cases = await Case.findAll({
    attributes: ['case_link', 'case_name'],
  });

  // Start browser
  const browser = await puppeteer.launch();
  
  const minute = 60000;
  
  // Iterate through array of all cases
  // cases.length
  for (let i = 0; i < 1; i++) {
    const caseInstance = cases[i];
    const url = caseInstance.case_link;
    const caseName = caseInstance.case_name;
    
    let page = await browser.newPage();

    let pageLoaded = false;
    while (!pageLoaded) {
      try {
        await page.goto(url, { waitUntil: 'networkidle0' });
        pageLoaded = true;
      } catch (error: any) {
        console.log(`Page load failed: ${error.message}.\nRetrying in 60 seconds...`);
        await setTimeout(minute);
      }
    }

        const elements = await page.$$(`.${className}`);
        const quantity = elements[0];
        const price = elements[1];

      let elementsLoaded: boolean = false;
      let priceValue = "-";
      let quantityValue = "-";
      const maxAttempts = 3;
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          priceValue = await page.evaluate((el) => el.textContent, price);
          quantityValue = await page.evaluate((el) => el.textContent, quantity);
          elementsLoaded = true;
        } 
        catch {
          const pageContent = await page.content();
          const $ = cheerio.load(pageContent);
          const h1Content = $('h1').html();
          console.log('Page h1 content:', h1Content);
          console.log(`During attempt no. ${attempt}.`);
          if (attempt < maxAttempts) {
          console.log(`Retrying in 5 minutes.`);
          await setTimeout(5 * minute);
          await page.goto(url, { waitUntil: 'networkidle0' });
          }
        }
      }

      if (elementsLoaded === true) {
        
        const CaseModelTableName = getTableName(caseName);
        console.log(`\n${CaseModelTableName}`);
        const CaseModel: any = getModelByTableName(CaseModelTableName);

        const lastLogId = await CaseModel.max('log_id');

          const logId = lastLogId ? lastLogId + 1 : 1;
          const now = new Date();
          const formattedDate = now.toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });
          const casePriceUSD = parseFloat(priceValue.replace('$', ''));
          const caseQuantity = parseInt(quantityValue);
    
          await CaseModel.upsert({
            log_id: logId,
            fetch_date: formattedDate,
            case_price_USD: casePriceUSD,
            case_quantity: caseQuantity,
          });
      }
      else {
        console.log(`Couldn't fetch value in ${maxAttempts} attempts so it's set to '-'.`);
      }
      
      console.log(`${i + 1}/${cases.length} ${caseName}: price --> ${priceValue}, quantity --> ${quantityValue}`);

    await page.close();
  }

  await browser.close();
}