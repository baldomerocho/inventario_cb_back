import {Sequelize} from "sequelize";

export const sequelize = new Sequelize('inventario_cb', 'default', 'secret', {
    host: 'localhost',
    dialect: 'postgres'
})