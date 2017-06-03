import express from "express";
import bodyParser from "body-parser";
// import comments from "./comments";
//import products from "./products";
// import vehicles from "./vehicles";
//import contacts from "./contacts";
import VehicleRoute from "./routes/VehicleRoute";
import CommentRoute from "./routes/CommentRoute";
import ProductRoute from "./routes/ProductRoute";
import ContactRoute from "./routes/ContactRoute";

import mongoose from "mongoose";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/express-practice/");

const app = express();
app.use(bodyParser.json());

app.use(VehicleRoute);
app.use(CommentRoute);
app.use(ProductRoute);
app.use(ContactRoute);


app.use((request, response, next) => {
  console.log("Middleware executed");
  next();
});
// eslint-disable-next-line
app.use((err, request, response, next) => {
  console.log("Error Middleware", err);
  return response.status(500).json({message: err.message});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});

// NEED TO FIX Prodcut AND Vehcile models
// Vehicles is broken and wont store
