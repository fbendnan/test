"use client"

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
      <div className="text-xl font-bold">MyPortfolio</div>

      <div className="space-x-6 hidden md:flex">
        <Link href="#about" className="hover:underline">
          About
        </Link>
        <Link href="#projects" className="hover:underline">
          Projects
        </Link>
        <Link href="#contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
