"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between p-4 mx-4">
        <Link
          href="/collection"
          className="text-gray-400 text-lg hover:text-indigo-200 font-medium transition-colors group relative"
        >
          Collection
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link
          href="/about"
          className="text-gray-400 text-lg hover:text-indigo-200 font-medium transition-colors group relative"
        >
          About
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>

        <Link
          href="/"
          aria-label="Home"
          className="text-gray-200 text-3xl font-serif font-thin hover:text-slate-300 transition-colors"
        >
          FUNFRENZZY
        </Link>

        <Link
          href="/search"
          className="text-gray-400 text-lg hover:text-indigo-200 font-medium transition-colors group relative"
        >
          Search
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link
          href="/cart"
          className="text-gray-400 text-lg hover:text-indigo-200 font-medium transition-colors group relative"
        >
          Cart
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
      </nav>

      <nav className="md:hidden flex items-center justify-between p-4 mx-4">
        <Link
          href="/"
          aria-label="Home"
          className="text-gray-200 font-serif text-2xl hover:text-indigo-200 transition-colors"
        >
          FUNFRENZZY
        </Link>

        <button
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-indigo-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-end">
          <div className="bg-black  w-64 h-full p-4 shadow-lg">
            <button
              onClick={toggleSidebar}
              className="text-gray-400 hover:text-black border border-white rounded-full p-1 mb-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul className="space-y-6">
              <li>
                <Link
                  href="/collection"
                  className="block text-gray-300 hover:text-indigo-200 font-medium transition-colors group relative"
                >
                  Collection
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-gray-300 hover:text-indigo-200 font-medium transition-colors group relative"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="block text-gray-300 hover:text-indigo-200 font-medium transition-colors group relative"
                >
                  Search
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="block text-gray-300 hover:text-indigo-200 font-medium transition-colors group relative"
                >
                  Cart
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;