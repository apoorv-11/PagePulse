import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/svg/logoipsum-365.svg";
//icons :
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { PiShoppingCartSimple } from "react-icons/pi";
import avatarIcon from "../assets/avatar.png";
import { useState } from "react";

//Redux :
import { useSelector } from "react-redux";
import { useAuth } from "../Context/auth.context";

const Navbar = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const navigation = [
    { name: "Dashboard", href: "/dashbaord" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart-page" },
    { name: "Check Out", href: "/check-out" },
  ];

  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left Section  */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <img src={logo} alt={<FaBarsStaggered />} className="size-8" />
          </Link>

          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inset-y-2 left-3" />
            <input
              type="text"
              placeholder="Search Product"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* right Section  */}
        <div className=" relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <div>
                <button onClick={() => setIsDropDown(!isDropDown)}>
                  <img
                    src={avatarIcon}
                    alt="avatar"
                    className={" rounded-full ring-blue-500 ring-2 size-7"}
                  />
                </button>
                {isDropDown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg z-40 rounded-md">
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
                          className="block px-4 py-2 text-sm hover:bg-gray-300 rounded-sm"
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
                className="size-6"
              />
            )}
          </div>
          <button className="hidden sm:block">
            <FaHeartCirclePlus className="size-6" />
          </button>

          <Link
            to="/cart"
            className="bg-primary p-2 sm:px-6 py-2 flex items-center rounded-sm gap-2"
          >
            <PiShoppingCartSimple className="size-6" />
            {cartItems.length > 0 ? (
              <span className="sm:ml-1 text-lg semibold">
                {cartItems.length}
              </span>
            ) : (
              <span className="sm:ml-1 text-lg semibold">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
