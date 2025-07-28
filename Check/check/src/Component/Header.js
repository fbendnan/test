import { IoMdSearch } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { PiHeart } from "react-icons/pi";
import { RiTruckLine } from "react-icons/ri";
import { BsCreditCard2Back } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="pt-6">
      <nav>
        <div className="flex justify-between px-10 ">
          <h1 className="font-semibold text-2xl">MOODY STUDIO</h1>
          <div className="flex justify-center gap-4">
            <IoMdSearch className="w-6 h-6" />
            <RxPerson className="w-6 h-6" />
            <LiaShoppingBagSolid className="w-6 h-6" />
            <PiHeart className="w-6 h-6" />
          </div>
        </div>
        <div className="h-px w-306 bg-gray-400 mx-auto my-4" />
      </nav>
      <div>
        <ul className="flex justify-center-safe gap-14 font-semibold text-sm text-gray-800 py-4">
          <li>
          <Link to="/">HOME</Link>
          </li>
          <li>STORE</li>
          <li>ACCESSORIES</li>
          <li>BRAND</li>
          <li>PAGES</li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>NEWS</li>
          <li>
            <Link to="/contact">CONTACT US </Link>
          </li>
        </ul>
        <div className="h-px w-306 bg-gray-400 mx-auto my-4" />
      </div>

      <div className="flex justify-around">
        <div className="flex gap-2 ">
          <RiTruckLine className="w-6 h-6 text-orange-300" />
          <p className="text-xs flex items-end font-semibold text-gray-500">
            FREE SHIPPING
          </p>
        </div>

        <div className="flex gap-2 ">
          <BsCreditCard2Back className="w-6 h-6 text-orange-300" />
          <p className="text-xs flex items-end font-semibold text-gray-500">
            100% MONEY BACK
          </p>
        </div>

        <div className="flex gap-2 ">
          <FaHeadset className="w-6 h-6 text-orange-300" />
          <p className="text-xs flex items-end font-semibold text-gray-500">
            SUPPORT 24/7
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
