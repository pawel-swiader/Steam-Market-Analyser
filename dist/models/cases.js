"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const tableNames = ['chroma_case', 'chroma_2_case', 'chroma_3_case', 'cluth_case', 'cs20_case', 'csgo_weapon_case', 'csgo_weapon_case_2', 'csgo_weapon_case_3', 'danger_zone_case', 'dreams_and_nightmares_case', 'esports_2013_case', 'esports_2013_winter_case', 'esports_2014_summer_case', 'falchion_case', 'fracture_case', 'gamma_case', 'gamma_2_case', 'glove_case', 'horizon_case', 'huntsman_weapon_case', 'operation_bravo_case', 'operation_breakout_weapon_case', 'operation_broken_fang_case', 'operation_hydra_case', 'operation_phoenix_weapon_case', 'operation_riptide_case', 'operation_vanguard_weapon_case', 'operation_wildfire_case', 'prisma_case', 'prisma_2_case', 'recoil_case', 'revolution_case', 'revolver_case', 'shadow_case', 'shattered_web_case', 'snakebite_case', 'spectrum_case', 'spectrum_2_case', 'winter_offensive_weapon_case'];
const models = [];
for (let i = 0; i < tableNames.length; i++) {
    const table_name = tableNames[i];
    class CaseModel extends sequelize_1.Model {
    }
    CaseModel.init({
        log_id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            unique: true,
            primaryKey: true,
        },
        fetch_date: {
            type: sequelize_1.DataTypes.DATE,
        },
        case_price_USD: {
            type: sequelize_1.DataTypes.FLOAT,
        },
        case_quantity: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        }
    }, {
        tableName: table_name,
        sequelize: sequelize_2.sequelize,
    });
    models.push(CaseModel);
}
exports.default = models;
//# sourceMappingURL=cases.js.map