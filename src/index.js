import app from "../server/index.js";
import {sequelize} from "./database/database.js";

async function main() {
  try {
    await sequelize.authenticate();
    app.listen(3001);
    console.log("Server running on port 3001");
  }catch (error) {
    console.log(error);
  }
}