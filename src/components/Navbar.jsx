import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center justify-between min-h-16">

          {/* LOGO */}
          <Link
            to="/"
            className="font-bold text-blue-500 text-lg sm:text-xl"
          >
            WUMIGHT SCENT
          </Link>

          {/* DESKTOP / TABLET LINKS */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 text-amber-50">

            <Link
              to="/"
              className="hover:text-amber-400 transition duration-300"
            >
              HOME
            </Link>

            <Link
              to="/About"
              className="hover:text-amber-400 transition duration-300"
            >
              About
            </Link>

            <Link
              to="/Collection"
              className="hover:text-amber-400 transition duration-300"
            >
              Our Collection
            </Link>

            <Link
              to="/Contact"
              className="hover:text-amber-400 transition duration-300"
            >
              Contact
            </Link>

          </div>

          {/* MOBILE MENU */}
          <div className="flex md:hidden items-center gap-3 text-sm text-amber-50">

            <Link
              to="/"
              className="hover:text-amber-400"
            >
              HOME
            </Link>

            <Link
              to="/About"
              className="hover:text-amber-400"
            >
              About
            </Link>

            <Link
              to="/Collection"
              className="hover:text-amber-400"
            >
              Collection
            </Link>
<Link
              to="/Contact"
              className="hover:text-amber-400 transition duration-300"
            >
              Contact
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;