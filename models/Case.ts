import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize';

// Model definition (table in database)
export default class Case extends Model {
    declare case_id: number;
    declare case_name: string;
    declare case_link: string;
    declare case_html_element: string;
  }

// Column definition (columns in table)
Case.init(
    {
        case_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
        },
        case_name: {
        type: DataTypes.STRING(128),
        allowNull: false,
        },
        case_link: {
        type: DataTypes.STRING(128),
        allowNull: true,
        },
        case_html_element: {
        type: DataTypes.TEXT,
        allowNull: false,
        }
    },
    {
        tableName: 'cases',
        sequelize, // passing the `sequelize` instance is required
    },
);