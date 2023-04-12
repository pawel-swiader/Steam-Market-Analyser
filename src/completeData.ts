import puppeteer from "puppeteer";
import { loadPage } from "./loadPage";
import { getTextContent } from "./getTextContent";
import { saveToDatabase } from './saveToDatabase';

export async function completeData(notFetched: any) {

    const selector = 'market_commodity_orders_header_promote';
    const browser = await puppeteer.launch();
    let page = await browser.newPage();

    for (let i = 0; i <= notFetched.length - 1; i++) {

        const caseInfo = notFetched[i];

        const caseName = caseInfo.caseName;
        const CaseModel = caseInfo.CaseModel;
        const url = caseInfo.url;

        const casePage = await loadPage(page, url, 20, 300);
        const returnedValues = await getTextContent(casePage, selector, 10, 240);
        await saveToDatabase(caseName, CaseModel, returnedValues.priceValue, returnedValues.quantityValue);

        console.log(`${i + 1}/${notFetched.length} -> ${caseName}`);
    }

    browser.close();
}