import { Link } from "react-router-dom";
import logo from "../assets/svg/logoipsum-365.svg";
//icons :
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { PiShoppingCartSimple } from "react-icons/pi";

const Navbar = () => {
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
        <div className="flex justify-center md:gap-4 ">
          <AiOutlineUser className="size-6" />
          <button className="hidden sm:block">
            <FaHeartCirclePlus className="size-6" />
          </button>

          <Link to="/orders">
            <PiShoppingCartSimple className="size-6" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
