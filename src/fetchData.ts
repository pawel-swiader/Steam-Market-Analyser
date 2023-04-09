import puppeteer from 'puppeteer';
import { getCases } from './getCases';
import { loadPage } from './loadPage';
import { getTextContent } from './getTextContent';
import { getTableName } from './getTableName';
import { getModelByTableName } from './getModelByTableName';
import { saveToDatabase } from './saveToDatabase';
import { handleNullValues } from './handleNullValues';

export async function fetchData() {

  const selector = 'market_commodity_orders_header_promote';
  const cases = await getCases();
  const browser = await puppeteer.launch();

  for (let i = 0; i < cases.length; i++) {
    const caseInstance = cases[i];
    const url = caseInstance.case_link;
    const caseName = caseInstance.case_name;

    const tableName = getTableName(caseName);
    const CaseModel = await getModelByTableName(tableName);
    const page = await browser.newPage();
    const casePage = await loadPage(page, url, 60);
    const returnedValues = await getTextContent(casePage, selector, 3, 300);

    if (returnedValues === null) {
      // TO DO
      handleNullValues();
    }

    await saveToDatabase(caseName, CaseModel, returnedValues.priceValue, returnedValues.quantityValue)
  }

  browser.close();
}