import { syncAllTables } from "./syncAllTables";
import { addAllCases } from "../seeders/addAllCases";

export async function setDatabase() {
    await syncAllTables();
    await addAllCases();
}