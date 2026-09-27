import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Phone, Mail, MapPin, Copyright } from "lucide-react";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      {/* FOOTER */}
      <footer className="w-full bg-black text-amber-800">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 py-10">
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10">

            {/* BRAND */}
            <div className="w-full">
              <h1 className="font-bold text-2xl sm:text-3xl">
                Wumight Scent
              </h1>

              <p className="mt-4 text-base sm:text-lg">
                More than just a fragrance.
                <br />
                It's a lifestyle.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="w-full">
              <h1 className="font-bold text-xl sm:text-2xl">
                Quick Links
              </h1>

              <div className="flex flex-col gap-3 mt-5">
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
            </div>

            <div className="w-full">
              <h1 className="font-bold text-xl sm:text-2xl">
                Get in Touch
              </h1>

              <div className="mt-5 space-y-4">

                <p className="flex items-start gap-3 break-words">
                  <Phone className="shrink-0" />
                  <span>+234 803 659 0895</span>
                </p>

                <p className="flex items-start gap-3 break-words">
                  <Mail className="shrink-0" />
                  <span>
                    wumihtscent@gmail.com
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <MapPin className="shrink-0" />
                  <span>Akungba, Nigeria</span>
                </p>

              </div>
            </div>

          </div>
        </div>

        <div className="border-t text-amber-50 border-white px-5 py-4">
          <div className="flex sm:flex-row items-center justify-center gap-2 text-center text-sm sm:text-base">
            <Copyright size={18} />

            <span>
              2026 SARA TECHNOLOGY ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default App;