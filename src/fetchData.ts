import { getCases } from './getCases';
import { loadPage } from './loadPage';
import { getTextContent } from './getTextContent';
import { getTableName } from './getTableName';
import { getModelByTableName } from './getModelByTableName';
import { saveToDatabase } from './saveToDatabase';
import { handleNull } from './handleNull';
import { completeData } from './completeData';
import puppeteer from 'puppeteer';

export async function fetchData() {
  const selector = 'market_commodity_orders_header_promote';
  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  const cases = await getCases();
  let notFetched: any = [];

  for (let i = 0; i <= cases.length - 1; i++) {
    const caseInstance = cases[i];
    const url = caseInstance.case_link;
    const caseName = caseInstance.case_name;

    const tableName = getTableName(caseName);
    const CaseModel = await getModelByTableName(tableName);
    const casePage = await loadPage(page, url, 2, 10);
    if (casePage === null) {
      notFetched.push(handleNull(caseName, CaseModel, url));
      console.log(`Passed ${caseName} for later download.`);
    }
    else {
    const returnedValues = await getTextContent(casePage, selector, 1, 60);
      await saveToDatabase(caseName, CaseModel, returnedValues.priceValue, returnedValues.quantityValue);
      console.log(`${i+1}/${cases.length} -> ${caseName}`);
    }
  }
  browser.close();

  if (notFetched.length !== 0) {
    console.log(`\n${notFetched.length} cases to complete.`);
    await completeData(notFetched);
  }

  console.log('Successfuly fetched all data!');
}