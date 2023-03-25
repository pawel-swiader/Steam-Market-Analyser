import { addAllTables } from "../seeders/addAllTables";
import { addAllCases } from "../seeders/addAllCases";

export function setDatabase() {
    addAllTables();
    addAllCases();
}