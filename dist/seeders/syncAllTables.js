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
exports.syncAllTables = void 0;
const cases_1 = __importDefault(require("../models/cases"));
const Case_1 = __importDefault(require("../models/Case"));
const syncAllTables = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        Case_1.default.sync({ alter: true });
        for (const model of cases_1.default) {
            yield model.sync({ alter: true });
        }
        console.log('\nAll tables were synchronized successfully.\n');
    }
    catch (error) {
        console.error('An error occurred while synchronizing tables:', error);
    }
});
exports.syncAllTables = syncAllTables;
//# sourceMappingURL=syncAllTables.js.map