import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-[9%] py-4 flex justify-between items-center z-[100] bg-black/70 backdrop-blur-md mt-5">
      <Link to="/" className="text-3xl font-extrabold text-primary cursor-pointer transition-transform hover:scale-110">
        Soumboul Fall
      </Link>

      {/* Bouton hamburger visible seulement sur mobile */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {/* Icône simple burger */}
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            // X pour fermer
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Trois traits burger
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Nav desktop + mobile toggle */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full right-0 w-2/3 bg-black md:bg-transparent md:static md:w-auto md:flex md:items-center`}
      >
        <Link
          to="/home"
          className="block md:inline-block text-white text-lg font-medium md:ml-16 py-3 px-6 border-b-2 border-transparent md:border-0 hover:text-primary hover:border-primary transition"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/services"
          className="block md:inline-block text-white text-lg font-medium md:ml-16 py-3 px-6 border-b-2 border-transparent md:border-0 hover:text-primary hover:border-primary transition"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/skills"
          className="block md:inline-block text-white text-lg font-medium md:ml-16 py-3 px-6 border-b-2 border-transparent md:border-0 hover:text-primary hover:border-primary transition"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="/education"
          className="block md:inline-block text-white text-lg font-medium md:ml-16 py-3 px-6 border-b-2 border-transparent md:border-0 hover:text-primary hover:border-primary transition"
          onClick={() => setIsOpen(false)}
        >
          Education
        </Link>
        <Link
          to="/experience"
          className="block md:inline-block text-white text-lg font-medium md:ml-16 py-3 px-6 border-b-2 border-transparent md:border-0 hover:text-primary hover:border-primary transition"
          onClick={() => setIsOpen(false)}
        >
          Experience
        </Link>
        <Link
          to="/contact"
          className="block md:inline-block text-white text-lg font-medium md:ml-16 py-3 px-6 border-b-2 border-transparent md:border-0 hover:text-primary hover:border-primary transition"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
