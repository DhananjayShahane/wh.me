import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-lg py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center text-primary">
          <span className="text-2xl font-medium">WhatsAppMe</span>
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-primary focus:outline-none transition-colors duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                About
              </a>
            </li>
            <li className="group relative">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Term and Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer transition-all bg-primary text-white px-6 py-1 rounded-lg
border-green-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${isMobileMenuOpen ? "block" : "hidden"
          } md:hidden bg-gray-50 border-t border-gray-200 transition-height duration-300 ease-in-out`}
      >
        <ul className="px-4 py-2">
          <li>
            <a href="#" className="block py-2 hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-primary">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-primary">
              Privacy policy
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-primary">
              Term and Conditions
            </a>
          </li>
          <li className="w-full mt-2 flex text-center">
            <a
              href="#"
              className="cursor-pointer transition-all bg-primary w-full text-white px-6 py-1 rounded-lg
border-green-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
