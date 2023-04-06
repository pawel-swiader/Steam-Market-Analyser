"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sequelize_1 = require("sequelize");
const configPath = path_1.default.join(__dirname, './config.json');
const config = JSON.parse(fs_1.default.readFileSync(configPath, 'utf8'));
// Sequelize instance (connection + turn off timestamps[createdAt, updatedAt])
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'mysql',
    host: config.host,
    username: config.development.username,
    password: config.development.password,
    database: config.development.database,
    define: {
        timestamps: false,
    }
});
//# sourceMappingURL=sequelize.js.map