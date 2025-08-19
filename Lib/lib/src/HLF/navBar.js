import { Link } from "react-router-dom";
import Header from "./header";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-red-900 text-white px-6 py-4 flex justify-between items-center shadow-xl">
      <div className="text-2xl font-bold">My Library</div>

      <ul className="hidden md:flex gap-6 text-sm">
        <Link to='/home'><li className="hover:text-gray-300">Home</li></Link>
        <li className="hover:text-gray-300 pointer"><a href='#add-book' >Add_Book</a></li>
        <Link to='login'><li className="hover:text-gray-300">Login</li></Link>
      </ul>

    </nav>
  );
}
