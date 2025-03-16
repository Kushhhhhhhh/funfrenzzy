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
      <nav className="hidden md:flex items-center justify-between p-4 mx-4">
        <Link
          href="/"
          className="text-gray-300 text-lg hover:text-gray-500 font-medium transition-colors group relative"
        >
          Collection
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link
          href="/"
          className="text-gray-300 text-lg hover:text-gray-500 font-medium transition-colors group relative"
        >
          About
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>

        <Link
          href="/"
          aria-label="Home"
          className="text-gray-200 text-3xl font-serif font-thin hover:text-slate-100 transition-colors"
        >
          FUNFRENZZY
        </Link>

        <Link
          href="/"
          className="text-gray-300 text-lg hover:text-gray-500 font-medium transition-colors group relative"
        >
          Search
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link
          href="/"
          className="text-gray-300 text-lg hover:text-gray-500 font-medium transition-colors group relative"
        >
          Cart
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
      </nav>

      <nav className="md:hidden flex items-center justify-between p-4 mx-4 z-50">
        <Link
          href="/"
          aria-label="Home"
          className="text-gray-200 font-serif text-2xl hover:text-gray-100 transition-colors"
        >
          FUNFRENZZY
        </Link>

        <button
          onClick={toggleSidebar}
          className="text-gray-300 hover:text-gray-200 focus:outline-none"
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
        <div
          className="fixed inset-0 bg-opacity-50 flex justify-end transition-all duration-300 ease-in-out"
        >
          <div
            className={`bg-[#0d0d0d] w-64 h-full p-4 shadow-lg transform ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <button
              onClick={toggleSidebar}
              className="text-gray-200 hover:text-gray-500 border border-white rounded-full p-1 mb-12"
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
                  href="/"
                  className="block text-gray-300 hover:text-gray-800 font-medium transition-colors group relative"
                >
                  Collection
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block text-gray-300 hover:text-gray-800 font-medium transition-colors group relative"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block text-gray-300 hover:text-gray-800 font-medium transition-colors group relative"
                >
                  Search
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block text-gray-300 hover:text-gray-800 font-medium transition-colors group relative"
                >
                  Cart
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
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