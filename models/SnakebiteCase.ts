import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize';

export default class SnakebiteCase extends Model {
    declare log_id: number;
    declare fetch_date: Date;
    declare case_price: number;
    declare case_quantity: number;
  }

  SnakebiteCase.init(
    {   log_id: {
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
        tableName: 'snakebite_case',
        sequelize,
    },
);