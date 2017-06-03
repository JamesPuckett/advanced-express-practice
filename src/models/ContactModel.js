import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  occupation: String,
  avatar: String
});

const ContactModel = mongoose.model("Contact", contactSchema);
export default ContactModel;
