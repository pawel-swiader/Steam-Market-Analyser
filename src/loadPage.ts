import { setTimeout } from "timers/promises";

export async function loadPage(page: any, url: string, maxAttempts: number, waitTime: number) {
  const selector = 'market_commodity_orders_header_promote';

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
        await page.goto(url, { waitUntil: 'networkidle0' });
        await page.waitForSelector(`.${selector}`, { timeout: 5000 });
        return page;
      } catch (error) {
        console.log(`Page load failed. Waiting ${waitTime} seconds.\n`);
        // console.log(error);
        await setTimeout(waitTime * 1000);
      }
  }

  return null;
}