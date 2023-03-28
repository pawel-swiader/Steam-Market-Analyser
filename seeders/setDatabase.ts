import { addAllTables } from "../seeders/addAllTables";
import { addAllCases } from "../seeders/addAllCases";

export async function setDatabase() {
    await addAllTables();
    await addAllCases();
}