import app from "../server/index.js";
import {sequelize} from "./database/database.js";

import "./models/Provider.js";
import "./models/Category.js";
import "./models/Product.js";
import "./models/ProductCategory.js";
import "./models/ProductDetails.js";

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