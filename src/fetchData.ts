import Case from '../models/Case';
import puppeteer from 'puppeteer';
import { setTimeout } from "timers/promises";
const cheerio = require('cheerio');

export async function printCases() {
  const className = ('market_commodity_orders_header_promote');

  const cases = await Case.findAll({
    attributes: ['case_link', 'case_name'],
  });

  const browser = await puppeteer.launch();
  
  for (let i = 0; i < cases.length; i++) {
    const caseInstance = cases[i];
    const url = caseInstance.case_link;
    const caseName = caseInstance.case_name;
    const minute = 60000;
    
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
        const element = elements[1];

    let elementsLoaded: boolean = false;
    let value = '-';
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        value = await page.evaluate((el) => el.textContent, element);
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

      if (elementsLoaded === false) {
        console.log(`Couldn't fetch value in ${maxAttempts} attempts so it's set to '-'.`);
      }
      console.log(`${i + 1}/${cases.length} ${caseName}: ${value}`);

    await page.close();
  }

  await browser.close();
}