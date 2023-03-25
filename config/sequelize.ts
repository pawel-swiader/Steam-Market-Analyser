import fs from 'fs';
import path from 'path';
import { Sequelize } from "sequelize";

const configPath = path.join(__dirname, './config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Sequelize instance (connection + turn off timestamps[createdAt, updatedAt])
export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: config.host,
    username: config.development.username,
    password: config.development.password,
    database: config.development.database,
    define: {
      timestamps: false,
    }
  });