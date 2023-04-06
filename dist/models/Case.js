"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
// Model definition (table in database)
class Case extends sequelize_1.Model {
}
exports.default = Case;
// Column definition (columns in table)
Case.init({
    case_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    case_name: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    case_link: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: true,
    },
    case_html_element: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    }
}, {
    tableName: 'cases',
    sequelize: sequelize_2.sequelize, // passing the `sequelize` instance is required
});
//# sourceMappingURL=Case.js.map