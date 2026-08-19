import { NavLink } from "react-router-dom";
import { useState } from "react";
// import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-lg transition-colors duration-300 ${
      isActive
        ? "text-[var(--color-primary-100)] font-semibold"
        : "hover:text-[var(--color-primary-100)]"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-2 max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/">
          <img src="logo.png" alt="Logo" className="w-30 h-auto" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center text-xl gap-10">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/moneybag" className={linkClass}>
            MoneyBag Plans
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
        </div>

        {/* Desktop Button */}
        <div>
          {/* <NavLink
            to="/signIn"
            className="hidden md:inline-block font-bold bg-white text-black-100 px-6 py-2 r hover:opacity-90 transition"
          >
            Log In
          </NavLink> */}
          <NavLink
            to="/signIn"
            className="hidden md:inline-block bg-primary-100 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
          >
            Sign In
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {/* {isOpen ? size={28} /> : <Menu size={28} />} */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col gap-6 px-6 py-6">
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/moneybag"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              MoneyBag Plans
            </NavLink>
            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>

            <NavLink
              to="/signIn"
              className="bg-primary-100 font-bold text-white text-center py-3 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
