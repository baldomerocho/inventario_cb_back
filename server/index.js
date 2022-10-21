import express from 'express';
import providersRoutes from "../src/routes/providers.routes.js";
const app = express();
app.use(express.json());
app.use(providersRoutes);
export default app;