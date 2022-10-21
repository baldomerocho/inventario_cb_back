import app from "../server/index.js";
import {sequelize} from "./database/database.js";

import "./models/Product.js";

async function main() {
  try {
    await sequelize.sync();
    app.listen(3001);
    console.log("Server running on port 3001");
  }catch (error) {
    console.log(error);
  }
}

main();