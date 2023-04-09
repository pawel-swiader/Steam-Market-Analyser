import models from '../models/cases';

export function getModelByTableName(tableName: string): any {
    const modelFound = models.find(model => model.tableName === tableName);
    if (modelFound) return modelFound;
    else {
      console.log(`Couldn't find model.`);
      return null;
    }
  }