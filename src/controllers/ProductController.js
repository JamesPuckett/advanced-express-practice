import ProductModel from "../models/ProductModel";

const ProductController = {
  list: (request, response) => {
    ProductModel.find().exec()
      .then((data) => {
        return response.json(data);
      })
      .catch(err => {
        return console.log("Product fetching failed", err);
      });
  },
  create: (request, response, next) => {
    const product = new ProductModel(request.body);
    product.save()
      .then(storedProduct => {
        console.log("Product was saved");
        return response.json(storedProduct);
      })
      .catch((err) => {
        return next(err);
      });
  },
  find: (request, response, next) => {
    ProductModel.findById(request.params._id).exec()
      .then((data) => {
        return response.json(data);
      })
      .catch(err => {
        next(err);
      });
  }
};

export default ProductController;
