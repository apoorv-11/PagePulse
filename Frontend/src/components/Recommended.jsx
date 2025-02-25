/* eslint-disable react/jsx-key */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useFetchAllBooksQuery } from "../redux/features/Books/BooksApi.js";

import BookCard from "../pages/Books/BookCard.jsx";

const Recommended = () => {
  const { data } = useFetchAllBooksQuery();
  const books = data?.data || [];
  console.log(books);

  return (
    <div className="mt-12 py-16">
      <h2 className="text-3xl font-semibold mb-6 ">Recommended</h2>
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {books.length > 0 &&
          books.slice(8, 18).map((book, index) => (
            <SwiperSlide>
              <BookCard key={index} book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Recommended;
