import express from "express";
import { BookPost } from "../Controllers/Book.Controllers.js";

const router = express.Router();

router.post("/create-book", BookPost);

export default router;
