import { useParams, Link } from "react-router-dom";
import { perfumes } from "../data/card";

import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";

const slugify = (name) =>
  name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const ProductDetails = () => {
  const { id } = useParams();

  const perfume = perfumes.find(
    (item) => slugify(item.name) === id
  );

  if (!perfume) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5 bg-[#F8F5EF]">
        <Sparkles size={45} className="text-amber-600 mb-4" />

        <h1 className="text-3xl font-serif font-bold text-[#171513]">
          Product Not Found
        </h1>

        <p className="text-gray-500 mt-3">
          Sorry, this fragrance is not available.
        </p>

        <Link
          to="/Collection"
          className="mt-6 bg-[#171513] text-amber-400 px-7 py-3 rounded-full hover:bg-amber-700 hover:text-white transition"
        >
          Back to Collection
        </Link>
      </section>
    );
  }

  const message = `Hello WUMIGHT COLLECTION, I am interested in ordering ${perfume.name}. Please provide more information about its price and availability.`;

  const whatsappLink = `https://wa.me/2348036590895?text=${encodeURIComponent(message)}`;

  const relatedPerfumes = perfumes
    .filter((item) => item.name !== perfume.name)
    .slice(0, 4);

  return (
    <div className="bg-[#F8F5EF] min-h-screen">

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-5 py-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-amber-700">
            Home
          </Link>

          <span>/</span>

          <Link to="/Collection" className="hover:text-amber-700">
            Collection
          </Link>

          <span>/</span>

          <span className="text-amber-700 font-medium">
            {perfume.name}
          </span>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <section className="max-w-7xl mx-auto px-5 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">

          {/* PRODUCT IMAGE */}
          <div className="bg-[#EEE9DF] rounded-2xl overflow-hidden">
            <div className="h-[350px] sm:h-[450px] md:h-[500px] flex items-center justify-center p-8">
              <img
                src={perfume.image}
                alt={perfume.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/perfume-placeholder.png";
                }}
                className="w-full h-full object-contain hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* PRODUCT INFORMATION */}
          <div className="flex flex-col justify-center">

            <p className="text-amber-700 tracking-[4px] text-xs font-bold uppercase">
              WUMIGHT COLLECTION
            </p>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#171513] mt-4">
              {perfume.name}
            </h1>

            <div className="flex items-center gap-2 mt-5">
              <Sparkles className="text-amber-600" size={19} />

              <span className="text-gray-500 text-sm">
                Discover This Fragrance
              </span>
            </div>

            <div className="w-20 h-[2px] bg-amber-500 my-7" />

            {/* DESCRIPTION */}
            <h2 className="text-lg font-semibold text-[#171513]">
              About This Fragrance
            </h2>

            <p className="text-gray-600 leading-8 mt-3">
              {perfume.desc}
            </p>

            {/* WHATSAPP ORDER */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 flex items-center justify-center gap-3 bg-[#171513] text-amber-400 py-4 px-5 rounded-full font-semibold hover:bg-amber-700 hover:text-white transition duration-300"
            >
              <MessageCircle size={21} />
              Order This Perfume on WhatsApp
            </a>

            <p className="text-xs text-gray-500 text-center mt-3">
              Contact us for pricing and availability.
            </p>

            {/* TRUST FEATURES */}
            <div className="grid grid-cols-2 gap-4 mt-10 border-t border-gray-200 pt-7">

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-amber-600 shrink-0" size={25} />

                <span className="text-sm font-medium">
                  Quality Products
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Truck className="text-amber-600 shrink-0" size={25} />

                <span className="text-sm font-medium">
                  Delivery Available
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-10">
            <p className="text-amber-600 tracking-[4px] text-xs font-bold">
              EXPLORE MORE
            </p>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-3 text-[#171513]">
              You May Also Like
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {relatedPerfumes.map((item) => (
              <Link
                key={item.name}
                to={`/collection/${slugify(item.name)}`}
                className="group"
              >
                <div className="bg-[#F4F0E8] rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/perfume-placeholder.png";
                    }}
                    className="w-full h-[180px] sm:h-[230px] object-contain p-4 group-hover:scale-110 transition duration-500"
                  />
                </div>

                <h3 className="font-bold mt-4 text-sm sm:text-base text-[#171513]">
                  {item.name}
                </h3>

                <p className="text-amber-700 text-sm mt-1">
                  View Details
                </p>
              </Link>
            ))}

          </div>

          {/* EXPLORE COLLECTION */}
          <div className="text-center mt-12">
            <Link
              to="/Collection"
              className="inline-flex items-center gap-2 border border-[#171513] px-7 py-3 rounded-full hover:bg-[#171513] hover:text-white transition"
            >
              Explore All Perfumes
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ProductDetails;