import express from "express";
import CommentController from "../controllers/CommentController";

const router = express.Router();

router.get("/comments", CommentController.list);
router.post("/comments", CommentController.create);
router.get("/comments/:_id", CommentController.find);

export default router;
