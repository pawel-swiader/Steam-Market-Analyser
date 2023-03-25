import { sequelize } from '../config/sequelize';
import { readdirSync } from 'fs';
import path from 'path';

export async function addAllTables() {
    console.log(__dirname);

    const modelsDir = path.join(__dirname, '../models/');
    const modelFiles = readdirSync(modelsDir).filter((file) => file.endsWith('.ts'));
    
    modelFiles.forEach((file) => {
        console.log(path.join(modelsDir, file));
        const { default: model } = require(path.join(modelsDir, file));
        model.sync({ alter: true });
    });

    await sequelize.sync();
    console.log('All models were synchronized successfully.');
}