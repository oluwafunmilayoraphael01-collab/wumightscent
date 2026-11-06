
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";

import {
  Phone,
  Mail,
  MapPin,
  Copyright,
} from "lucide-react";

const App = () => {
  return (
    <BrowserRouter>
  <ScrollToTop />

      <Navbar />

      {/* WEBSITE ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/About" element={<About />} />

        <Route path="/Collection" element={<Collection />} />

        <Route path="/Contact" element={<Contact />} />

        {/* DYNAMIC PERFUME DETAILS */}
        <Route
          path="/collection/:id"
          element={<ProductDetails />}
        />

        {/* FALLBACK */}
        <Route
          path="*"
          element={
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5 bg-[#F8F5EF]">
              <h1 className="text-4xl font-serif font-bold text-[#171513]">
                404
              </h1>

              <p className="text-gray-600 mt-3">
                Sorry, this page could not be found.
              </p>

              <Link
                to="/"
                className="mt-6 bg-black text-amber-400 px-7 py-3 rounded-full hover:bg-amber-700 transition"
              >
                Back to Home
              </Link>
            </div>
          }
        />
      </Routes>

      {/* FOOTER */}
      <footer className="w-full bg-black text-amber-800">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

            {/* BRAND */}
            <div>
              <h1 className="font-bold text-2xl sm:text-3xl">
                WUMIGHT SCENT
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-7">
                More than just a fragrance.
                <br />
                It's a lifestyle.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h2 className="font-bold text-xl sm:text-2xl">
                Quick Links
              </h2>

              <div className="flex flex-col gap-3 mt-5">

                <Link to="/" className="hover:text-amber-400 transition">
                  HOME
                </Link>

                <Link to="/About" className="hover:text-amber-400 transition">
                  ABOUT
                </Link>

                <Link to="/Collection" className="hover:text-amber-400 transition">
                  OUR COLLECTION
                </Link>

                <Link to="/Contact" className="hover:text-amber-400 transition">
                  CONTACT
                </Link>

              </div>
            </div>

            {/* CONTACT INFORMATION */}
            <div>
              <h2 className="font-bold text-xl sm:text-2xl">
                Get in Touch
              </h2>

              <div className="mt-5 space-y-4">

                <p className="flex items-start gap-3 break-words">
                  <Phone className="shrink-0" size={20} />
                  <span>+234 803 659 0895</span>
                </p>

                <p className="flex items-start gap-3 break-all">
                  <Mail className="shrink-0" size={20} />
                  <span>wumightscent@gmail.com</span>
                </p>

                <p className="flex items-start gap-3">
                  <MapPin className="shrink-0" size={20} />
                  <span>Akungba, Nigeria</span>
                </p>

              </div>
            </div>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/20 text-amber-50 px-5 py-5">

          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm">

            <Copyright size={16} />

            <span>
              {new Date().getFullYear()}  WUMIGHT SCENT. ALL RIGHTS RESERVED.
            </span>

          </div>

        </div>

      </footer>

    </BrowserRouter>
  );
};

export default App;
