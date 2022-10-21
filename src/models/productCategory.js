import {sequelize} from "../database/database.js";
import {DataTypes} from "sequelize";
import {Product} from "./Product.js";
import {Category} from "./Category.js";

export const ProductCategory = sequelize.define('product_category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {timestamps: false});

ProductCategory.belongsToMany(Product, {through: 'product_category'});
ProductCategory.belongsToMany(Category, {through: 'product_category'});