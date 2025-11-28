import { useState } from "react";
import BookCard from "../pages/Books/BookCard.jsx";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useFetchAllBooksQuery } from "../redux/features/Books/BooksApi.js";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Technology",
  "Horror",
  "Adventure",
];

const TopSelling = () => {
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  const { data, isLoading } = useFetchAllBooksQuery();
  const books = data?.data || [];

  const filterBook =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) =>
            book.category.toLowerCase().trim() ===
            selectedCategory.toLowerCase().trim()
        );

  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold mb-6">Top Sellers</h1>

      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Loader */}
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 2, spaceBetween: 50 },
            1180: { slidesPerView: 3, spaceBetween: 50 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {filterBook.length > 0 &&
            filterBook.map((book, index) => (
              <SwiperSlide key={index}>
                <BookCard book={book} />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default TopSelling;
