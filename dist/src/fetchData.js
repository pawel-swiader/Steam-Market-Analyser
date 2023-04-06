"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const sequelize_1 = require("../config/sequelize");
const Case_1 = __importDefault(require("../models/Case"));
const puppeteer_1 = __importDefault(require("puppeteer"));
const promises_1 = require("timers/promises");
const cheerio = require('cheerio');
function getTableName(caseName) {
    return caseName
        .toLowerCase()
        .replace(/:/g, '')
        .replace(/ /g, '_')
        .replace(/&/g, 'and');
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        // HTML class name
        const className = ('market_commodity_orders_header_promote');
        // Find cases from database (records in 'cases' table)
        const cases = yield Case_1.default.findAll({
            attributes: ['case_link', 'case_name'],
        });
        // Start browser
        const browser = yield puppeteer_1.default.launch();
        const minute = 60000;
        // Iterate through array of all cases
        // cases.length
        for (let i = 0; i < 2; i++) {
            const caseInstance = cases[i];
            const url = caseInstance.case_link;
            const caseName = caseInstance.case_name;
            let page = yield browser.newPage();
            let pageLoaded = false;
            while (!pageLoaded) {
                try {
                    yield page.goto(url, { waitUntil: 'networkidle0' });
                    pageLoaded = true;
                }
                catch (error) {
                    console.log(`Page load failed: ${error.message}.\nRetrying in 60 seconds...`);
                    yield (0, promises_1.setTimeout)(minute);
                }
            }
            const elements = yield page.$$(`.${className}`);
            const quantity = elements[0];
            const price = elements[1];
            let elementsLoaded = false;
            let priceValue = "-";
            let quantityValue = "-";
            const maxAttempts = 3;
            for (let attempt = 1; attempt <= maxAttempts; attempt++) {
                try {
                    priceValue = yield page.evaluate((el) => el.textContent, price);
                    quantityValue = yield page.evaluate((el) => el.textContent, quantity);
                    elementsLoaded = true;
                }
                catch (_a) {
                    const pageContent = yield page.content();
                    const $ = cheerio.load(pageContent);
                    const h1Content = $('h1').html();
                    console.log('Page h1 content:', h1Content);
                    console.log(`During attempt no. ${attempt}.`);
                    if (attempt < maxAttempts) {
                        console.log(`Retrying in 5 minutes.`);
                        yield (0, promises_1.setTimeout)(5 * minute);
                        yield page.goto(url, { waitUntil: 'networkidle0' });
                    }
                }
            }
            if (elementsLoaded === true) {
                // Select model for current case
                const CaseModelTableName = getTableName(caseName);
                const CaseModel = sequelize_1.sequelize.models[CaseModelTableName];
                const lastLogId = yield CaseModel.max('log_id');
                const logId = lastLogId ? lastLogId + 1 : 1;
                const now = new Date();
                const formattedDate = now.toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });
                const casePriceUSD = parseFloat(priceValue.replace('$', ''));
                const caseQuantity = parseInt(quantityValue);
                yield CaseModel.upsert({
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
            yield page.close();
        }
        yield browser.close();
    });
}
exports.fetchData = fetchData;
//# sourceMappingURL=fetchData.js.map