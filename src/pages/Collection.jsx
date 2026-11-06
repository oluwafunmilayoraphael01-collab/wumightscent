
import { useState } from "react";
import { perfumes } from "../data/card";
import perfumeBg from "../assets/perfumebg.jpg";
import { Link } from "react-router-dom";

import {
  TruckElectric,
  ShieldCheck,
  CreditCard,
  Phone,
  Sparkles,
  Search,
  X,
} from "lucide-react";

const categories = [
  "All Products",
  "Perfumes",
  "Body Sprays",
  "Perfume Oils",
];

const slugify = (name) =>
  name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const getCategory = (perfume) => {
  const name = perfume.name.toUpperCase();

  if (name.includes("BODY SPRAY")) return "Body Sprays";
  if (name === "PERFUME OIL") return "Perfume Oils";

  return "Perfumes";
};

const Collection = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("All Products");

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPerfumes = perfumes.filter((perfume) => {
    const matchesCategory =
      selectedCategory === "All Products" ||
      getCategory(perfume) === selectedCategory;

    const matchesSearch = perfume.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());

    return matchesCategory && matchesSearch;
  });

  // ORDER PRODUCT ON WHATSAPP
  const orderOnWhatsApp = (perfume) => {
    const perfumeUrl = `/collection/${slugify(perfume.name)}`;
    const productLink = `${window.location.origin}${perfumeUrl}`;

    const message = `
Hello WUMIGHT COLLECTION! 👋

I would like to place an order.

🛍️ PRODUCT DETAILS

Product: ${perfume.name}

Description: ${perfume.desc || "Please provide more information about this perfume."}

Product Image & Details:
${productLink}

Quantity: 1

Please confirm availability and price.

Thank you! ❤️
    `;

    const whatsappURL = `https://wa.me/2348036590895?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full overflow-hidden bg-[#faf8f3]">

      {/* HERO */}
      <section
        className="relative w-full min-h-[260px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${perfumeBg})` }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative min-h-[260px] flex flex-col items-center justify-center text-center px-4">
          <Sparkles className="text-amber-400 mb-3" size={30} />

          <p className="text-amber-400 tracking-[5px] text-xs sm:text-sm mb-3">
            WUMIGHT COLLECTION
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-wide">
            OUR COLLECTION
          </h1>

          <div className="w-16 h-[2px] bg-amber-500 mt-5 mb-4" />

          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
            Discover fragrances that define your personality, elevate your
            presence and leave a lasting impression.
          </p>
        </div>
      </section>

      {/* COLLECTION INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6 text-center">
        <p className="text-amber-700 text-xs tracking-[4px] font-semibold">
          EXPLORE OUR SELECTION
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
          Find Your Signature Scent
        </h2>

        <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          Explore our carefully selected fragrances and find the scent that
          matches your style.
        </p>
      </section>

      {/* SEARCH */}
      <section className="max-w-xl mx-auto px-4 mt-5">
        <div className="flex items-center gap-3 bg-white border border-[#e8dfd0] rounded-xl px-4 py-3">
          <Search className="text-amber-700" size={20} />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a perfume..."
            className="w-full outline-none text-sm text-gray-800 bg-transparent"
          />

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              <X size={18} className="text-gray-500" />
            </button>
          )}
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-7">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition duration-300 ${
                selectedCategory === category
                  ? "bg-[#17130f] text-amber-400"
                  : "bg-white text-gray-700 border border-[#e8dfd0] hover:border-amber-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* PERFUME CARDS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold text-gray-900 text-sm sm:text-base">
            {selectedCategory}
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm">
            {filteredPerfumes.length} products found
          </p>
        </div>

        {filteredPerfumes.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {filteredPerfumes.map((perfume) => {
              const perfumeUrl = `/collection/${slugify(perfume.name)}`;

              return (
                <div
                  key={perfume.name}
                  className="group bg-white border border-[#e8dfd0] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                >
                  {/* PRODUCT IMAGE */}
                  <Link
                    to={perfumeUrl}
                    className="block overflow-hidden bg-[#f2eee7]"
                  >
                    <img
                      src={perfume.image}
                      alt={perfume.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "/images/perfume-placeholder.png";
                      }}
                      className="w-full h-[180px] sm:h-[220px] object-cover object-top group-hover:scale-110 transition duration-500"
                    />
                  </Link>

                  {/* CARD CONTENT */}
                  <div className="p-3 sm:p-4">
                    <Link to={perfumeUrl}>
                      <h2 className="font-semibold text-sm sm:text-base text-gray-900 min-h-[44px] group-hover:text-amber-700 transition">
                        {perfume.name}
                      </h2>
                    </Link>

                    <div className="w-8 h-[2px] bg-amber-500 my-3" />

                    <Link
                      to={perfumeUrl}
                      className="block w-full text-center border border-[#b68a45] text-gray-900 px-2 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#b68a45] hover:text-white transition"
                    >
                      View Details
                    </Link>

                    {/* WHATSAPP ORDER */}
                    <button
                      type="button"
                      onClick={() => orderOnWhatsApp(perfume)}
                      className="mt-2 block w-full text-center bg-[#17130f] px-2 py-2 rounded-lg text-white text-xs sm:text-sm font-semibold hover:bg-amber-700 transition"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="mx-auto text-amber-600 mb-4" size={35} />

            <h3 className="text-lg font-bold text-gray-900">
              No products found
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Try another perfume name or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Products");
              }}
              className="mt-5 bg-[#17130f] text-amber-400 px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              Show All Products
            </button>
          </div>
        )}
      </section>

      {/* BENEFITS */}
      <section className="w-full bg-[#17130f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

          <div className="text-center mb-10">
            <p className="text-amber-400 text-xs tracking-[4px]">
              THE WUMIGHT EXPERIENCE
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-3">
              Why Shop With Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            <div className="flex flex-col items-center text-center">
              <Phone className="text-amber-400" size={30} />
              <h3 className="font-bold mt-3">Easy Ordering</h3>
              <p className="text-gray-400 text-sm mt-2">
                Contact us directly on WhatsApp to place your order.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="text-amber-400" size={30} />
              <h3 className="font-bold mt-3">Quality Fragrances</h3>
              <p className="text-gray-400 text-sm mt-2">
                Discover fragrances selected with quality in mind.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <TruckElectric className="text-amber-400" size={30} />
              <h3 className="font-bold mt-3">Fast Delivery</h3>
              <p className="text-gray-400 text-sm mt-2">
                We make getting your favourite fragrance convenient.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <CreditCard className="text-amber-400" size={30} />
              <h3 className="font-bold mt-3">Easy Payment</h3>
              <p className="text-gray-400 text-sm mt-2">
                Get payment information when you contact us to order.
              </p>
            </div>

          </div>

          {/* WHATSAPP CTA */}
          <div className="text-center mt-12">
            <h3 className="text-xl sm:text-2xl font-bold">
              Ready to find your next favourite fragrance?
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Talk to us today and let us help you choose.
            </p>

            <a
              href="https://wa.link/75y3aw"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
            >
              <Phone size={19} />
              Chat With Us
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Collection;
