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
exports.addAllCases = void 0;
const Case_1 = __importDefault(require("../models/Case"));
function addAllCases() {
    return __awaiter(this, void 0, void 0, function* () {
        const casesToAdd = [
            {
                case_name: 'Recoil Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Recoil%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Dreams & Nightmares Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Dreams%20%26%20Nightmares%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Operation Riptide Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Operation%20Riptide%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Snakebite Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Snakebite%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Operation Broken Fang Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Operation%20Broken%20Fang%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Fracture Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Fracture%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Prisma Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Prisma%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Prisma 2 Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Prisma%202%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Shattered Web Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Shattered%20Web%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'CS20 Case',
                case_link: 'https://steamcommunity.com/market/listings/730/CS20%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Chroma Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Chroma%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Chroma 2 Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Chroma%202%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Chroma 3 Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Chroma%203%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Clutch Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Clutch%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'CS:GO Weapon Case',
                case_link: 'https://steamcommunity.com/market/listings/730/CS%3AGO%20Weapon%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'CS:GO Weapon Case 2',
                case_link: 'https://steamcommunity.com/market/listings/730/CS%3AGO%20Weapon%20Case%202',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'CS:GO Weapon Case 3',
                case_link: 'https://steamcommunity.com/market/listings/730/CS%3AGO%20Weapon%20Case%203',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Danger Zone Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Danger%20Zone%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'eSports 2013 Case',
                case_link: 'https://steamcommunity.com/market/listings/730/eSports%202013%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'eSports 2013 Winter Case',
                case_link: 'https://steamcommunity.com/market/listings/730/eSports%202013%20Winter%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'eSports 2014 Summer Case',
                case_link: 'https://steamcommunity.com/market/listings/730/eSports%202014%20Summer%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Falchion Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Falchion%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Gamma Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Gamma%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Gamma 2 Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Gamma%202%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Glove Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Glove%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Horizon Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Horizon%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Huntsman Weapon Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Huntsman%20Weapon%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Operation Bravo Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Operation%20Bravo%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Operation Breakout Weapon Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Operation%20Breakout%20Weapon%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Operation Hydra Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Operation%20Hydra%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Operation Phoenix Weapon Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Operation%20Phoenix%20Weapon%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Operation Vanguard Weapon Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Operation%20Vanguard%20Weapon%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Operation Wildfire Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Operation%20Wildfire%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Revolver Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Revolver%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Shadow Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Shadow%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Spectrum Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Spectrum%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Spectrum 2 Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Spectrum%202%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Winter Offensive Weapon Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Winter%20Offensive%20Weapon%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
            {
                case_name: 'Revolution Case',
                case_link: 'https://steamcommunity.com/market/listings/730/Revolution%20Case',
                case_html_element: 'market_commodity_orders_header_promote',
            },
        ];
        casesToAdd.forEach((caseToAdd) => __awaiter(this, void 0, void 0, function* () {
            const newCase = yield Case_1.default.create(caseToAdd);
            console.log(`New case created: ${newCase.case_name}`);
        }));
        console.log(`Added ${casesToAdd.length} cases to the 'cases' table.`);
    });
}
exports.addAllCases = addAllCases;
//# sourceMappingURL=addAllCases.js.map