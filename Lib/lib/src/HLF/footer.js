import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";



export default function Footer() {
  return (
    <footer className="bg-red-900 text-gray-200 py-10 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3"> My Library</h2>
          <p className="text-sm text-gray-300">
            A simple digital library to manage and explore your favorite books.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Login
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-white flex gap-2">
              <FaFacebook /> My_Library
            </a>
            <a href="#" className="hover:text-white flex gap-2">
              <FaInstagram />
              My_Library
            </a>
            <a href="#" className="hover:text-white flex gap-2">
              <FaTwitter />
              My_Library
            </a>
            <a href="#" className="hover:text-white flex gap-2">
              <FaThreads />
              My_Library
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} My Library. All rights reserved.
      </div>
    </footer>
  );
}
