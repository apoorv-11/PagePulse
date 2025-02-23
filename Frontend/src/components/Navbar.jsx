import { Link } from "react-router-dom";
import logo from "../assets/svg/logoipsum-365.svg";
//icons :
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { PiShoppingCartSimple } from "react-icons/pi";
import avatarIcon from "../assets/avatar.png";

const Navbar = () => {
  let currentUser = true;
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
        <div className="flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <div className="">
                <img
                  src={avatarIcon}
                  alt="avatar"
                  className={" rounded-full ring-blue-500 ring-2 size-7"}
                />
              </div>
            ) : (
              <AiOutlineUser className="size-6" />
            )}
          </div>
          <button className="hidden sm:block">
            <FaHeartCirclePlus className="size-6" />
          </button>

          <Link
            to="/orders"
            className="bg-primary p-2 sm:px-6 py-2 flex items-center rounded-sm gap-2"
          >
            <PiShoppingCartSimple className="size-6" />
            <span className="sm:ml-1 text-lg semibold">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
