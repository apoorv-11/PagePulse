import express from "express";
import {
  createAOrder,
  getOrderByEmail,
} from "../Controllers/order.Controllers.js";

const router = express.Router();

router.post("/", createAOrder);

router.get("/email/:email", getOrderByEmail);

export default router;
