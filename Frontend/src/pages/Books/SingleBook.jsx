import { useParams } from "react-router-dom";
import { useFetchBookByIdQuery } from "../../redux/features/Books/BooksApi";
import { getImgUrl } from "../../utilis/getImg.js";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/Cart/cartSlice.js";

const SingleBook = () => {
  const { id } = useParams();
  const { data } = useFetchBookByIdQuery(id);
  const book = data?.data || [];

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div className="max-w-lg shadow-md p-5">
        <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

        <div className="">
          <div>
            <img
              src={`${getImgUrl(book.coverImage)}`}
              alt={book.title}
              className="mb-8"
            />
          </div>

          <div className="mb-5">
            <p className="text-gray-700 mb-2">
              <strong>Author:</strong> {book.author || "admin"}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Published:</strong>{" "}
              {new Date(book?.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-4 capitalize">
              <strong>Category:</strong> {book?.category}
            </p>
            <p className="text-gray-700">
              <strong>Description:</strong> {book.description}
            </p>
          </div>

          <button
            onClick={() => handleAddToCart(book)}
            className="bg-primary px-6 py-3 rounded space-x-1 font-semibold flex items-center gap-1 "
          >
            <FiShoppingCart className="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
