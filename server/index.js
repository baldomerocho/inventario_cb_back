import express from 'express';
import providersRoutes from "../src/routes/providers.routes.js";
import productsRoutes from "../src/routes/products.routes.js";
import cors from 'cors';

var allowedOrigins = ['http://localhost:4200', 'http://localhost:3000'];
var corsOptions = function (req, callback) {
  var corsOptions;
  if (allowedOrigins.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(providersRoutes,productsRoutes);
export default app;