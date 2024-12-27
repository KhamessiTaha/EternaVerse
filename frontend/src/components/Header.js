"use client"; // client component.

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold hover:text-indigo-400">
          <Link href="/">Universe Sandbox</Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="hover:text-indigo-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-indigo-400 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/explore"
            className="hover:text-indigo-400 transition duration-300"
          >
            Explore
          </Link>
          <Link
            href="/signup"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-gray-700 p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className="hover:text-indigo-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-indigo-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/explore"
              className="hover:text-indigo-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              href="/signup"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
