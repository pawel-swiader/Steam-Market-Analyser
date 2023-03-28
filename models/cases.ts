import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../config/sequelize";

const tableNames: string[] = ['chroma_case', 'chroma_2_case', 'chroma_3_case', 'cluth_case', 'cs20_case', 'csgo_weapon_case', 'csgo_weapon_case_2', 'csgo_weapon_case_3', 'danger_zone_case', 'dreams_and_nightmares_case', 'esports_2013_case', 'esports_2013_winter_case', 'esports_2014_summer_case', 'falchion_case', 'fracture_case', 'gamma_case', 'gamma_2_case', 'glove_case', 'horizon_case', 'huntsman_weapon_case', 'operation_bravo_case', 'operation_breakout_weapon_case', 'operation_broken_fang_case', 'operation_hydra_case', 'operation_phoenix_weapon_case', 'operation_riptide_case', 'operation_vanguard_weapon_case', 'operation_wildfire_case', 'prisma_case', 'prisma_2_case', 'recoil_case', 'revolution_case', 'revolver_case', 'shadow_case', 'shattered_web_case', 'snakebite_case', 'spectrum_case', 'spectrum_2_case', 'winter_offensive_weapon_case'];
const models: typeof Model[] = [];



for (let i = 0; i < tableNames.length; i++) {
    const table_name = tableNames[i];
    
    class CaseModel extends Model {
        public log_id!: number;
        public fetch_date!: Date;
        public case_price!: number;
        public case_quantity!: number;
    }

    CaseModel.init(
        {
            log_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
                allowNull: false,
            },
            fetch_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            case_price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            case_quantity: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            }
        },
        {
            tableName: table_name,
            sequelize,
        },
    );

    models.push(CaseModel);
}

export default models;