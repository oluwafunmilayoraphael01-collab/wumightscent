import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="sticky top-0 z-50 py-2 flex h-14 bg-black justify-between items-center px-9">

        <h1 className="font-bold text-blue-500">
          WUMIGHT SCENT
        </h1>

        <div className="text-amber-50 flex gap-8">
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

      </nav>
    </div>
  );
};

export default Navbar;