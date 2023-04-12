import { Page } from "puppeteer";
import { setTimeout } from "timers/promises";

export async function getTextContent(casePage: Page, selector: string, maxAttempts: number, retryTime: number) {
    let priceValue = null;
    let quantityValue = null;
    const elements = await casePage.$$(`.${selector}`);
    const quantity = elements[0];
    const price = elements[1];

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        priceValue = await casePage.evaluate((el) => el.textContent, price);
        quantityValue = await casePage.evaluate((el) => el.textContent, quantity);
        break;
      } 
      catch (error) {
        console.log(casePage.url());
        console.log(`Error reading text content for selector "${selector}" during attempt no. ${attempt}.`);
        if (attempt < maxAttempts) {
          console.log(`Retrying in ${retryTime} seconds.`);
          await setTimeout(retryTime * 1000);
          casePage.reload();
        } else {
          console.log('Returning nulls.');
        }
      }
    }
    return { priceValue, quantityValue };
  }