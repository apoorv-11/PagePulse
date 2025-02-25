import Book from "../Models/book.model.js";

//Creating Book :
export const BookPost = async (req, res) => {
  const {
    title,
    description,
    category,
    coverImage,
    trending,
    oldPrice,
    newPrice,
  } = req.body;

  try {
    if (!title) {
      return res
        .status(401)
        .json({ message: "Title Field Empty", error: true });
    }
    if (!description) {
      return res
        .status(401)
        .json({ message: "Description Field Empty", error: true });
    }
    if (!category) {
      return res
        .status(401)
        .json({ message: "Category Field Empty", error: true });
    }
    if (!coverImage) {
      return res
        .status(401)
        .json({ message: "CoverImage Field Empty", error: true });
    }
    if (!oldPrice) {
      return res
        .status(401)
        .json({ message: "oldPrice Field Empty", error: true });
    }
    if (!newPrice) {
      return res
        .status(401)
        .json({ message: "newPrice Field Empty", error: true });
    }

    const newBook = new Book({
      title,
      description,
      category,
      trending,
      coverImage,
      oldPrice,
      newPrice,
    });

    await newBook.save();

    if (newBook) {
      res.status(200).json({
        message: "Book has been created",
        data: newBook,
        error: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server issue", error: true });
  }
};

//Get-All Books :
export const GetBooks = async (req, res) => {
  try {
    const book = await Book.find();
    if (!book) {
      return res.status(401).json({ message: "No Book Found", error: true });
    }

    res
      .status(200)
      .json({ message: "All Books Retrieved", error: false, data: book });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server issue", error: true });
  }
};

//Get SIngle Book :
export const getSingleBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById({ _id: id });
    if (!book) {
      res.status(401).json({ message: "No Book Found", error: true });
    }

    res
      .status(200)
      .json({ message: "Book Retrieved", error: false, data: book });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Issue", error: true });
  }
};

//Update Book :
export const updateBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!book) {
      return res.status(401).json({ error: true, message: "No Book Found" });
    }

    res.status(200).json({
      message: "Book Updated Successfully",
      error: true,
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Issue", error: true });
  }
};

//Delete Book :
export const DeleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBook = await Book.findByIdAndDelete({ _id: id });
    if (!deleteBook) {
      return res.status(400).json({ message: "No Book Found", error: true });
    }
    res
      .status(200)
      .json({ message: "Book Deleted Successfully", error: false });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Issue", error: true });
  }
};
