import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/svg/logoipsum-365.svg";
import { FaBarsStaggered, FaHeartCirclePlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCartSimple } from "react-icons/pi";
import avatarIcon from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../Context/auth.context";

const Navbar = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, logout } = useAuth();

  const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "Orders", href: "/order" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
  ];

  const handleLogOut = () => logout();

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-4">
      <nav className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="size-8" />
          </Link>

          {/* Hamburger icon (mobile only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-xl"
          >
            <FaBarsStaggered />
          </button>

          {/* Search (hidden on very small screens) */}
          <div className="relative hidden sm:block sm:w-60 md:w-72">
            <IoSearchOutline className="absolute left-3 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search Product"
              className="bg-[#EAEAEA] w-full py-2 pl-10 pr-4 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Admin button visible on md and above */}
          <Link
            to="/admin"
            className="hidden md:block bg-primary text-white px-4 py-1.5 rounded shadow text-sm font-semibold"
          >
            Admin
          </Link>

          <div>
            {currentUser ? (
              <div className="relative">
                <button onClick={() => setIsDropDown(!isDropDown)}>
                  <img
                    src={avatarIcon}
                    alt="avatar"
                    className="rounded-full ring-blue-500 ring-2 size-7"
                  />
                </button>
                {isDropDown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg z-50 rounded-md">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <Link to={item.href} key={item.name}>
                          <li
                            onClick={() => setIsDropDown(false)}
                            className="block px-4 py-2 text-sm hover:bg-gray-300 rounded-sm"
                          >
                            {item.name}
                          </li>
                        </Link>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-300 rounded-sm"
                        >
                          LogOut
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <AiOutlineUser
                onClick={() => navigate("/login")}
                className="size-6 cursor-pointer"
              />
            )}
          </div>

          {/* <button className="hidden sm:block"> */}
            {/* <FaHeartCirclePlus className="size-6" />/ */}
          {/* </button> */}

          <Link
            to="/cart"
            className="bg-primary text-white p-2 sm:px-4 py-2 flex items-center rounded-sm gap-2"
          >
            <PiShoppingCartSimple className="size-6" />
            <span className="text-md font-semibold">
              {cartItems.length || 0}
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="mt-4 space-y-4 md:hidden">
          <div className="relative w-full">
            <IoSearchOutline className="absolute left-3 top-2.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search Product"
              className="bg-[#EAEAEA] w-full py-2 pl-10 pr-4 rounded-md focus:outline-none"
            />
          </div>

          <Link
            to="/admin"
            className="block bg-primary text-white text-center py-2 rounded-md shadow"
          >
            Admin
          </Link>

          <div className="flex justify-between items-center">
            <Link to="/wishlist">
              <FaHeartCirclePlus className="size-6" />
            </Link>
            <Link
              to="/cart"
              className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2"
            >
              <PiShoppingCartSimple className="size-5" />
              <span className="text-md font-semibold">
                {cartItems.length || 0}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
