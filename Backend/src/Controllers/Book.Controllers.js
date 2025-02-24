import Book from "../Models/book.model.js";

//Creating Book :
export const BookPost = async (req, res) => {
  const {
    title,
    description,
    category,
    trending,
    coverImage,
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
    if (!trending) {
      return res
        .status(401)
        .json({ message: "Trending Field Empty", error: true });
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
      res
        .status(200)
        .json({
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
