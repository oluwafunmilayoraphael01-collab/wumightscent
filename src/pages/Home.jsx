
import perfumeBg from "../assets/perfumebg.jpg";
import {
  MoveRight,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  TruckElectric,
  CreditCard,
  Timer,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";
import { perfumes } from "../data/card";
import Testimonials from "../components/Testimonials";

const slugify = (name) =>
  name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const Home = () => {
  const featuredPerfumes = perfumes.slice(0, 4);

  return (
    <main className="bg-[#F8F5EF] text-[#171513] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[550px] md:min-h-[680px] flex items-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${perfumeBg})` }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-10 h-[1px] bg-amber-400" />
              <p className="text-amber-400 tracking-[5px] text-xs sm:text-sm font-semibold">
                PREMIUM FRAGRANCES
              </p>
            </div>

            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1]">
              Discover Your
              <span className="block text-amber-400 italic">
                Signature Scent.
              </span>
            </h1>

            <p className="text-gray-200 text-base sm:text-lg leading-8 mt-7 max-w-lg">
              Luxury fragrances for every moment.
              Discover the scent that expresses your personality
              and tells your story.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                to="/Collection"
                className="inline-flex items-center justify-center gap-3 bg-amber-400 text-black px-8 py-4 font-semibold hover:bg-white transition duration-300"
              >
                Shop Collection
                <MoveRight size={20} />
              </Link>

              <a
                href="https://wa.link/75y3aw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/50 text-white px-8 py-4 hover:bg-white hover:text-black transition duration-300"
              >
                Order on WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-8 sm:gap-12 mt-16 pt-8 border-t border-white/20">
              <div>
                <h3 className="text-2xl font-serif text-amber-400">
                  Elegance
                </h3>
                <p className="text-gray-300 text-xs tracking-widest mt-1">
                  IN EVERY SPRAY
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-amber-400">
                  Luxury
                </h3>
                <p className="text-gray-300 text-xs tracking-widest mt-1">
                  IN EVERY DROP
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-amber-400">
                  Confidence
                </h3>
                <p className="text-gray-300 text-xs tracking-widest mt-1">
                  IN EVERY MOMENT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 sm:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="mx-auto text-amber-700 mb-5" size={30} />

          <p className="text-amber-700 tracking-[5px] text-xs font-bold">
            WELCOME TO WUMIGHT COLLECTION
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold mt-5 leading-tight">
            More Than Just a Fragrance.
            <span className="block text-amber-700 italic mt-2">
              It's a Lifestyle.
            </span>
          </h2>

          <p className="text-gray-600 leading-8 mt-7 max-w-2xl mx-auto">
            A beautiful fragrance creates a lasting impression.
            Explore scents that complement your personality,
            elevate your confidence and make every moment special.
          </p>

          <Link
            to="/About"
            className="inline-flex items-center gap-2 mt-8 text-amber-800 font-semibold border-b border-amber-700 pb-2 hover:text-black transition"
          >
            Discover Our Story
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* FEATURED PERFUMES */}
      <section className="bg-[#EEE9DF] py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
            <div>
              <p className="text-amber-700 tracking-[5px] text-xs font-bold">
                OUR SELECTION
              </p>

              <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-4">
                Featured Perfumes
              </h2>

              <p className="text-gray-600 mt-3">
                Find the perfect fragrance for your personality.
              </p>
            </div>

            <Link
              to="/Collection"
              className="inline-flex items-center gap-2 font-semibold text-amber-800 hover:text-black transition"
            >
              View All Perfumes
              <ArrowRight size={19} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
            {featuredPerfumes.map((perfume) => (
              <Link
                key={perfume.name}
                to={`/collection/${slugify(perfume.name)}`}
                className="group bg-[#F8F5EF] overflow-hidden"
              >
                <div className="relative bg-[#E8E1D5] overflow-hidden">
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="w-full h-[190px] sm:h-[280px] object-contain p-4 sm:p-7 group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-3 right-3 bg-black text-amber-400 p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="font-serif font-bold text-base sm:text-xl">
                    {perfume.name}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-6 line-clamp-2">
                    {perfume.desc}
                  </p>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-200">
                    <span className="text-amber-800 text-xs sm:text-sm font-semibold">
                      View Details
                    </span>

                    <ArrowRight
                      size={18}
                      className="text-amber-700 group-hover:translate-x-2 transition"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#171513] text-white py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-400 tracking-[5px] text-xs font-bold">
              THE WUMIGHT EXPERIENCE
            </p>

            <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-4">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <ShieldCheck size={34} className="text-amber-400 mx-auto" />
              <h3 className="font-bold mt-5">Authentic Products</h3>
              <p className="text-gray-400 text-sm mt-2 leading-6">
                Quality fragrances selected for you.
              </p>
            </div>

            <div className="text-center">
              <Timer size={34} className="text-amber-400 mx-auto" />
              <h3 className="font-bold mt-5">Long Lasting Scent</h3>
              <p className="text-gray-400 text-sm mt-2 leading-6">
                Fragrances for memorable moments.
              </p>
            </div>

            <div className="text-center">
              <TruckElectric size={34} className="text-amber-400 mx-auto" />
              <h3 className="font-bold mt-5">Fast Delivery</h3>
              <p className="text-gray-400 text-sm mt-2 leading-6">
                Convenient delivery arrangements.
              </p>
            </div>

            <div className="text-center">
              <CreditCard size={34} className="text-amber-400 mx-auto" />
              <h3 className="font-bold mt-5">Easy Payment</h3>
              <p className="text-gray-400 text-sm mt-2 leading-6">
                Convenient payment arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <Testimonials />
      </section>

      {/* INSTAGRAM */}
      <section className="py-20 px-4 bg-[#EEE9DF]">
        <div className="text-center mb-10">
          <p className="text-amber-700 tracking-[5px] text-xs font-bold">
            FOLLOW OUR JOURNEY
          </p>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-4">
            Follow Us on Instagram
          </h2>

          <p className="text-gray-600 mt-3">
            Get inspired by fragrances, latest arrivals and more.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
          <img
            src="https://www.highsnobiety.com/static-assets/dato/1730290114-main.jpg"
            alt="Perfume inspiration"
            className="w-full h-40 sm:h-48 object-cover"
            loading="lazy"
          />

          <img
            src="https://img.freepik.com/premium-photo/perfume-layering-techniques_1273633-5309.jpg"
            alt="Perfume layering"
            className="w-full h-40 sm:h-48 object-cover"
            loading="lazy"
          />

          <img
            src="https://th.bing.com/th/id/OIP.biLbsguqEB6En21MMK7e4wHaF7?w=222&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
            alt="Fragrance inspiration"
            className="w-full h-40 sm:h-48 object-cover"
            loading="lazy"
          />

          <img
            src="https://tse1.mm.bing.net/th/id/OIP.vvPDZusR0Qv-LoNIBHNYUQHaGi?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Luxury fragrance"
            className="w-full h-40 sm:h-48 object-cover"
            loading="lazy"
          />

          <img
            src="https://th.bing.com/th/id/OIP.D8t6szf3INZpQ3UpcLWubgHaFj?w=219&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
            alt="Perfume collection"
            className="w-full h-40 sm:h-48 object-cover"
            loading="lazy"
          />

          <img
            src="https://th.bing.com/th/id/OIP.p2TgQYU7Cu6dKCkon964FwHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Perfume display"
            className="w-full h-40 sm:h-48 object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-[#E9E1D3] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-800 tracking-[5px] text-xs font-bold">
            YOUR SIGNATURE SCENT AWAITS
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mt-5 leading-tight">
            Find Your
            <span className="block text-amber-800 italic">
              Signature Fragrance.
            </span>
          </h2>

          <p className="text-gray-600 mt-6 leading-7">
            Explore our collection and discover a fragrance
            that tells your story.
          </p>

          <Link
            to="/Collection"
            className="inline-flex items-center gap-3 bg-black text-amber-400 px-9 py-4 mt-9 font-semibold hover:bg-amber-700 hover:text-white transition"
          >
            Explore Collection
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Home;
