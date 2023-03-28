import models from '../models/cases';
import Case from '../models/Case';

export const syncAllTables = async () => {
  try {
  Case.sync({ alter: true });
    for (const model of models) {
      await model.sync({ alter: true });
    }

    console.log('\nAll tables were synchronized successfully.\n');
  } catch (error) {
    console.error('An error occurred while synchronizing tables:', error);
  }
};