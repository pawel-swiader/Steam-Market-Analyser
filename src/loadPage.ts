import { Page } from "puppeteer";
import { setTimeout } from "timers/promises";

export async function loadPage(page: Page, url: string, retryTime: number) {
  let pageLoaded = false;
  while (!pageLoaded) {
    try {
      await page.goto(url, { waitUntil: 'networkidle0' });
      const urlCheck = page.url();
      if (urlCheck === url) pageLoaded = true;
    } catch (error: any) {
        console.log(`Page load failed: ${error.message}.\nRetrying in ${retryTime} seconds.`);
        await setTimeout(retryTime);
      }
  }

  return page;
}