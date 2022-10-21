import express from 'express';
import providersRoutes from "../src/routes/providers.routes.js";
import productsRoutes from "../src/routes/products.routes.js";
const app = express();
app.use(express.json());
app.use(providersRoutes,productsRoutes);
export default app;