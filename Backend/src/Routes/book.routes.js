import express from "express";
import {
  BookPost,
  GetBooks,
  getSingleBook,
  updateBook,
  DeleteBook,
} from "../Controllers/Book.Controllers.js";

import verifyAdminToken from "../Middlewwares/verifyToken.middleware.js";

const router = express.Router();

//Create Book :
router.post("/create-book", verifyAdminToken, BookPost);

//All Books :
router.get("/", GetBooks);

//Single Book :
router.get("/get-book/:id", getSingleBook);

//Update-book :
router.put("/update-book/:id", verifyAdminToken, updateBook);

//Delete Book:
router.delete("/delete-book/:id", verifyAdminToken, DeleteBook);

export default router;
