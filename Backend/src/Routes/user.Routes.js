import express from "express";
import { AdminLogin } from "../Controllers/user.Controller.js";

const router = express.Router();

//Create User :
router.post("/admin", AdminLogin);

export default router;
