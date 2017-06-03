import ContactModel from "../models/ContactModel";

const ContactController = {
  list: (request, response) => {
    ContactModel.find().exec()
      .then((data) => {
        return response.json(data);
      })
      .catch(err => {
        return console.log("Contact fetching failed", err);
      });
  },
  create: (request, response, next) => {
    const vehicle = new ContactModel(request.body);
    vehicle.save()
      .then(storedContact => {
        console.log("Contact was saved");
        return response.json(storedContact);
      })
      .catch((err) => {
        return next(err);
      });
  },
  find: (request, response, next) => {
    ContactModel.findById(request.params._id).exec()
      .then((data) => {
        return response.json(data);
      })
      .catch(err => {
        next(err);
      });
  }
};

export default ContactController;
