
import { Link } from "react-router-dom";
import {
  Sparkles,
  Heart,
  Gem,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import perfumeBg from "../assets/perfumebg.jpg";

const About = () => {
  return (
    <div className="bg-[#faf8f3] text-[#17130f] overflow-hidden">

      {/* HERO SECTION */}
      <section
        className="relative min-h-[300px] md:min-h-[380px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${perfumeBg})` }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative text-center px-5 py-16">
          <Sparkles className="text-amber-400 mx-auto mb-5" size={35} />

          <p className="text-amber-400 tracking-[5px] text-xs sm:text-sm font-semibold">
            WUMIGHT COLLECTION
          </p>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-serif font-bold mt-4">
            About Us
          </h1>

          <div className="w-20 h-[2px] bg-amber-500 mx-auto my-5" />

          <p className="text-gray-200 text-sm sm:text-lg">
            Our Story, Our Passion, Your Signature Scent.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-600 rounded-2xl" />

            <img
              src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:250,cw:1500,ch:1125,q:80,w:1500/dG2xKfejHrshECstHNiwn.jpg"
              alt="Luxury perfume collection"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="relative w-full h-[300px] sm:h-[400px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* STORY TEXT */}
          <div>
            <p className="text-amber-700 text-xs tracking-[4px] font-bold">
              WHO WE ARE
            </p>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-4 leading-tight">
              Our Story
              <span className="text-amber-700"> & Passion</span>
            </h2>

            <div className="w-16 h-[2px] bg-amber-500 mt-6 mb-7" />

            <p className="text-gray-600 leading-8">
              WUMIGHT COLLECTION was born from a passion for beautiful
              fragrances and the desire to help people feel confident,
              elegant and unforgettable.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              What started as a simple love for amazing scents grew into
              a vision to make quality fragrances accessible to everyone.
              We believe that the right fragrance can express personality,
              create memories and leave a lasting impression.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              Whether you love something soft and sweet, bold and captivating,
              or fresh and refreshing, we want to help you discover a scent
              that matches your style.
            </p>

            <Link
              to="/Collection"
              className="inline-flex items-center gap-3 mt-8 bg-[#17130f] text-amber-400 px-7 py-3 rounded-full font-semibold hover:bg-amber-700 hover:text-white transition"
            >
              Explore Our Collection
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND MESSAGE */}
      <section className="bg-[#17130f] text-white py-16 px-5">
        <div className="max-w-4xl mx-auto text-center">

          <Sparkles className="text-amber-400 mx-auto mb-5" size={35} />

          <p className="text-amber-400 tracking-[4px] text-xs font-bold">
            THE WUMIGHT EXPERIENCE
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-5 leading-tight">
            More Than a Fragrance,
            <span className="text-amber-400"> It's Your Identity.</span>
          </h2>

          <p className="text-gray-300 leading-8 mt-6 max-w-2xl mx-auto">
            We believe every fragrance tells a story. Our goal is to help
            you find scents that reflect your personality, complement
            your lifestyle and make every moment memorable.
          </p>

          <p className="text-amber-400 font-serif italic text-xl mt-8">
            Born from Passion. Built with Love. Made to Leave a Lasting Impression.
          </p>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="max-w-7xl mx-auto px-5 py-16 md:py-20">

        <div className="text-center mb-12">
          <p className="text-amber-700 tracking-[4px] text-xs font-bold">
            WHAT WE STAND FOR
          </p>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-4">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">

          <div className="bg-white border border-[#e8dfd0] rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Heart className="text-amber-700" size={28} />
            </div>

            <h3 className="font-bold text-xl mt-5">
              Passion
            </h3>

            <p className="text-gray-600 text-sm leading-7 mt-3">
              We are passionate about fragrances and helping people
              discover scents they love.
            </p>
          </div>

          <div className="bg-white border border-[#e8dfd0] rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Gem className="text-amber-700" size={28} />
            </div>

            <h3 className="font-bold text-xl mt-5">
              Quality
            </h3>

            <p className="text-gray-600 text-sm leading-7 mt-3">
              We aim to offer a carefully selected range of fragrances
              for different preferences and occasions.
            </p>
          </div>

          <div className="bg-white border border-[#e8dfd0] rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck className="text-amber-700" size={28} />
            </div>

            <h3 className="font-bold text-xl mt-5">
              Customer Satisfaction
            </h3>

            <p className="text-gray-600 text-sm leading-7 mt-3">
              We want every customer to enjoy a smooth and welcoming
              shopping experience.
            </p>
          </div>

        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="bg-[#EEE9DF] py-16">
        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-10">
            <p className="text-amber-700 tracking-[4px] text-xs font-bold">
              A WORLD OF FRAGRANCE
            </p>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-3">
              Discover the Beauty of Scents
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            <img
              src="https://www.highsnobiety.com/static-assets/dato/1730290114-main.jpg"
              alt="Luxury perfume display"
              loading="lazy"
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl hover:scale-[1.02] transition"
            />

            <img
              src="https://img.freepik.com/premium-photo/perfume-layering-techniques_1273633-5309.jpg"
              alt="Perfume layering"
              loading="lazy"
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl hover:scale-[1.02] transition"
            />

            <img
              src="https://th.bing.com/th/id/OIP.biLbsguqEB6En21MMK7e4wHaF7?w=222&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
              alt="Perfume bottle"
              loading="lazy"
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl hover:scale-[1.02] transition"
            />

            <img
              src="https://tse1.mm.bing.net/th/id/OIP.vvPDzusR0Qv-LoNIBHNYUQHaGi?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Fragrance collection"
              loading="lazy"
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl hover:scale-[1.02] transition"
            />

            <img
              src="https://th.bing.com/th/id/OIP.D8t6szf3INZpQ3UpcLWubgHaFj?w=219&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
              alt="Perfume arrangement"
              loading="lazy"
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl hover:scale-[1.02] transition"
            />

            <img
              src="https://th.bing.com/th/id/OIP.p2TgQYU7Cu6dKCkon964FwHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Luxury fragrance"
              loading="lazy"
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl hover:scale-[1.02] transition"
            />

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#17130f] text-white text-center px-5 py-16">

        <Sparkles className="text-amber-400 mx-auto mb-5" size={32} />

        <h2 className="text-3xl sm:text-4xl font-serif font-bold">
          Find the Fragrance That Defines You
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-7">
          Your signature scent is waiting. Explore our collection and
          discover something special.
        </p>

        <Link
          to="/Collection"
          className="inline-flex items-center gap-2 mt-8 bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition"
        >
          Shop Now
          <ArrowRight size={18} />
        </Link>

      </section>

    </div>
  );
};

export default About;
