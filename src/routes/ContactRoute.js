import express from "express";
import ContactController from "../controllers/ContactController";

const router = express.Router();

router.get("/contacts", ContactController.list);
router.post("/contacts", ContactController.create);
router.get("/contacts/:_id", ContactController.find);

export default router;
