import {sequelize} from "../database/database.js";
import {DataTypes} from "sequelize";
import {Product} from "./Product.js";

export const Provider = sequelize.define('provider', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING(255),
    nit: DataTypes.STRING(11),
});
Provider.hasMany(Product, {foreignKey: 'providerId'});
Product.belongsTo(Provider, {foreignKey: 'providerId', targetKey: 'id'});