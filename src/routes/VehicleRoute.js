import express from "express";
import VehicleController from "../controllers/VehicleController";

const router = express.Router();

router.get("/vehicles", VehicleController.list);
router.post("/vehciles", VehicleController.create);
router.get("/vehicles/:_id", VehicleController.find);

export default router;
