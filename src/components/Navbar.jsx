import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Our Collection", path: "/Collection" },
    { name: "Contact", path: "/Contact" },
  ];

  const linkStyle = ({ isActive }) =>
    `transition duration-300 ${
      isActive
        ? "text-amber-400"
        : "text-white hover:text-amber-400"
    }`;

  const handleNavigation = (path) => {
    setMenuOpen(false);

    if (path === "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="w-full bg-[#171513] text-white sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="flex items-center justify-between min-h-20">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => handleNavigation("/")}
            className="font-serif font-bold text-amber-400 text-lg sm:text-2xl tracking-wide"
          >
            WUMIGHT COLLECTION
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => handleNavigation(link.path)}
                className={linkStyle}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP ORDER BUTTON */}
          <a
            href="https://wa.link/75y3aw"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center bg-amber-400 text-black px-5 py-3 text-sm font-semibold hover:bg-white transition duration-300"
          >
            Order Now
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-amber-400 p-2"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>

        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-5">
            <div className="flex flex-col gap-5 text-sm font-medium tracking-wide">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => handleNavigation(link.path)}
                  className={linkStyle}
                >
                  {link.name}
                </NavLink>
              ))}

              <a
                href="https://wa.link/75y3aw"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="bg-amber-400 text-black text-center py-3 font-semibold hover:bg-white transition"
              >
                Order Now
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;