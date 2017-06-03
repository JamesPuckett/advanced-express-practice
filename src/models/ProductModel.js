import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  reviews: Number,
  rating: Number,
  imgUrl: String,
  price: String,
  category: String
  // missing reviews ******
});

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
