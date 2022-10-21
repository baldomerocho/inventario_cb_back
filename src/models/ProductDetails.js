import {sequelize} from "../database/database.js";
import {DataTypes} from "sequelize";
import {Product} from "./Product.js";

export const ProductDetails = sequelize.define('product_details', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    key: DataTypes.STRING(100),
    value: DataTypes.STRING(100),
});

ProductDetails.belongsTo(Product, {foreignKey: 'product_id'});