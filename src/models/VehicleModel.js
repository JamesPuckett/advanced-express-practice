import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  imgUrl: String,
  year: String,
  make: String,
  model: String,
  price: String,
  km: Number,
  miles: Number,
  fuel: String,
  city: String
  // missing new ******
});

const VehicleModel = mongoose.model("Vehicle", vehicleSchema);
export default VehicleModel;
