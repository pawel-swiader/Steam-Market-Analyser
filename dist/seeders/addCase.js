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
exports.addCase = void 0;
const Case_1 = __importDefault(require("../models/Case"));
// Function which adds case to 'cases' table in database
function addCase() {
    return __awaiter(this, void 0, void 0, function* () {
        const newCase = yield Case_1.default.create({
            case_name: 'case name',
            case_link: 'case link',
            case_html_element: 'case element',
        });
        console.log("New case created!");
        console.log(newCase.case_id, newCase.case_name, newCase.case_link, newCase.case_html_element);
    });
}
exports.addCase = addCase;
//# sourceMappingURL=addCase.js.map