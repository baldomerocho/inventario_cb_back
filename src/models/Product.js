import {sequelize} from "../database/database.js";
import {DataTypes} from "sequelize";
import {Provider} from "./Provider.js";

export const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(10, 2),
});
