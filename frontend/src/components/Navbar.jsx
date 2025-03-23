'use client'
import React, { useState } from "react";
import { Menu, X, Bell } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-black backdrop-blur-md border-b border-violet-500">
        <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-x-1">
            {/* Logo */}
            <a
              className="flex-none font-semibold text-3xl text-white focus:outline-hidden focus:opacity-80"
              href="https://front-fusion.vercel.app/"
            >
              Front-Flow A.I
            </a>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              className="md:hidden relative size-9 flex justify-center items-center font-medium text-sm rounded-lg border border-gray-700 text-gray-200 hover:bg-violet-500 focus:outline-hidden focus:bg-violet-500 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Main Navigation */}
          <div className={`${isOpen ? "block" : "hidden"} md:block`}>
            <div className="overflow-hidden max-h-[75vh]">
              <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                <div className="grow flex flex-col md:flex-row md:justify-end md:items-center gap-3">
                  {/* Dropdown */}
                  <div className="relative">
                    <button
                      className="p-2 flex items-center text-sm text-gray-200 hover:bg-violet-500 rounded-lg focus:outline-hidden focus:bg-violet-500"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      Dropdown
                      <svg
                        className={`ml-2 transition-transform ${
                          dropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-black border border-gray-700 rounded-lg shadow-lg">
                        <a
                          href="/about"
                          className="block px-4 py-2 text-gray-200 hover:bg-violet-500 rounded-t-lg"
                        >
                          About
                        </a>
                        <a
                          href="/downloads"
                          className="block px-4 py-2 text-gray-200 hover:bg-violet-500"
                        >
                          Downloads
                        </a>
                        <a
                          href="/team"
                          className="block px-4 py-2 text-gray-200 hover:bg-violet-500 rounded-b-lg"
                        >
                          Team Account
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Notifications */}
                  <a
                    className="p-2 flex items-center text-sm text-gray-200 hover:bg-violet-500 rounded-lg focus:outline-hidden focus:bg-violet-500"
                    href="#"
                  >
                    <Bell className="size-5 mr-2" />
                    Notifications
                  </a>

                  {/* Contact */}
                  <a
                    className="p-2 flex items-center text-sm text-gray-200 hover:bg-violet-500 rounded-lg focus:outline-hidden focus:bg-violet-500"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </div>

                {/* Button Group */}
                <div className="flex flex-wrap items-center gap-x-1.5">
                  <a
                    className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-700 bg-transparent text-gray-200 hover:bg-violet-700 focus:outline-hidden focus:bg-violet-500"
                    href="/login"
                  >
                    Log in
                  </a>
                  <a
                    className="py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700"
                    href="/signup"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
