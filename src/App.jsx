import {BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Collection from "./pages/Collection"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, Copyright   } from "lucide-react"
const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/About" element={<About/>} />
  <Route path="/Collection" element={<Collection/>} />
  <Route path="/Contact" element={<Contact/>} />
</Routes>
<div className="hv-30 md:gap-30 justify-center bg-black flex text-amber-800 px-8">
  <div>
    <h1 className="font-bold text-2xl ">Wumight Scent</h1>
    <p>more just a fragrance. <br /> it's a life style </p>
  </div>
  <div>
    <h1>Quick Links</h1>
    <div className="py-4">
    <Link
            to="/"
            className="hover:text-amber-400 transition duration-300"
          >
            HOME
          </Link> <br />

          <Link
            to="/About"
            className="hover:text-amber-400 transition duration-300"
          >
            About
          </Link> <br />

          <Link
            to="/Collection"
            className="hover:text-amber-400 transition duration-300"
          >
            Our Collection
          </Link><br />

          <Link
            to="/Contact"
            className="hover:text-amber-400 transition duration-300"
          >
            Contact
          </Link>
          </div>
  </div>
  <div>
  <h1>Get in Touch</h1>
  <p> <Phone  /> +234 803 659 0895</p>
  <p> <Mail />wumihtscent@gmail.com</p>
  <p><MapPin />Akugba, Nigeria.</p>
  </div>

</div>
<div className="text-amber-50 justify-center bg-black flex border"><div><Copyright /></div><div className=" px-3"> 2026 SARA TECHNOLOGY ALL RIGHTS RESERVED </div></div>
      </BrowserRouter>
    </div>
  )
}

export default App
