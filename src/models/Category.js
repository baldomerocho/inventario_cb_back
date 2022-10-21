import {sequelize} from "../database/database.js";
import {DataTypes} from "sequelize";

export const Category = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
    }
});