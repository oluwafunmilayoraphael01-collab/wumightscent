import { perfumes } from "../data/cards";
import perfumeBg from "../assets/perfumebg.jpg";
import {
  TruckElectric,
  ShieldCheck,
  CreditCard,
  Phone,
} from "lucide-react";

const Collection = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* HERO */}
      <section
        className="w-full min-h-[180px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${perfumeBg})` }}
      >
        <div className="w-full min-h-[180px] bg-black/70 flex flex-col items-center justify-center text-center px-4">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-amber-600 font-extrabold">
            OUR COLLECTION
          </h1>

          <p className="text-white text-base sm:text-lg md:text-xl mt-3 max-w-2xl">
            Find the perfect fragrance for every mood, occasion and personality.
          </p>

        </div>
      </section>

      {/* PERFUME CARDS */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">

          {perfumes.map((perfume) => (
            <div
              key={perfume.name}
              className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white"
            >

              {/* IMAGE */}
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full h-[180px] sm:h-[200px] object-cover object-top"
              />

              {/* CARD CONTENT */}
              <div className="p-3">

                <h2 className="font-bold text-base sm:text-lg min-h-[48px]">
                  {perfume.name}
                </h2>

                <a
                  href="https://wa.link/nfkm94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block w-full text-center bg-black px-3 py-2 rounded-2xl text-white hover:bg-amber-400 transition"
                >
                  Place Order
                </a>

              </div>
            </div>
          ))}

        </div>

      </section>

      <section className="w-full bg-amber-950 text-white">

        <div className="w-full max-w-2xl mx-auto px-1 sm:px-6 py-8">

          <div className="flex  sm:grid-cols-2 md:grid-cols-4 gap-3">

            <div className="sm:col-span-2 md:col-span-1">

              <h2 className="font-bold text-xl">
                Order Easily on WhatsApp
              </h2>

              <p className="mt-2 text-sm sm:text-base">
                Chat with us now to place your order or get expert advice.
              </p>

              <a
                href="https://wa.link/nfkm94"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-green-500 px-5 py-3  rounded-2xl hover:bg-green-600 transition"
              >
                <Phone size={20} />
                <span>Chat On WhatsApp</span>
              </a>

            </div>

            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="text-amber-400" size={20} />

              <h3 className="font-bold mt-2">
                100% Original
              </h3>
            </div>

            {/* DELIVERY */}
            <div className="flex flex-col items-center text-center">
              <TruckElectric className="text-amber-400" size={20} />

              <h3 className="font-bold mt-2">
                Fast Delivery
              </h3>
            </div>

            {/* PAYMENT */}
            <div className="flex flex-col items-center text-center">
              <CreditCard className="text-amber-400" size={20} />

              <h3 className="font-bold mt-2">
                Secure Payment
              </h3>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Collection;