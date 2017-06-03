import VehicleModel from "../models/VehicleModel";

const VehicleController = {
  list: (request, response) => {
    VehicleModel.find().exec()
      .then((data) => {
        return response.json(data);
      })
      .catch(err => {
        return console.log("Vehcile fetching failed", err);
      });
  },
  create: (request, response, next) => {
    const vehicle = new VehicleModel(request.body);
    vehicle.save()
      .then(storedVehicle => {
        console.log("Vehcile was saved");
        return response.json(storedVehicle);
      })
      .catch((err) => {
        return next(err);
      });
  },
  find: (request, response, next) => {
    VehicleModel.findById(request.params._id).exec()
      .then((data) => {
        return response.json(data);
      })
      .catch(err => {
        next(err);
      });
  }
};

export default VehicleController;
