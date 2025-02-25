import express from "express";
import {
  BookPost,
  GetBooks,
  getSingleBook,
  updateBook,
  DeleteBook,
} from "../Controllers/Book.Controllers.js";

const router = express.Router();

//Create Book :
router.post("/create-book", BookPost);

//All Books :
router.get("/get-books", GetBooks);

//Single Book :
router.get("/get-book/:id", getSingleBook);

//Update-book :
router.put("/update-book/:id", updateBook);

//Delete Book:
router.delete("/delete-book/:id", DeleteBook);

export default router;
