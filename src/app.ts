// npx ts-node src/app.ts
import { fetchData } from './fetchData';
import { setDatabase } from '../seeders/setDatabase';
import models from '../models/cases';

// setDatabase();
fetchData();

