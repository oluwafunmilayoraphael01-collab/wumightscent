import { useState } from "react";
import { Star } from "lucide-react";
import perfumeBg from "../assets/perfumebg.jpg";

const testimonials = [
  {
    name: "Blessing A.",
    text: "Wumightscent never disappoints! The perfumes are original, long-lasting and the delivery was super fast.",
  },
  {
    name: "Sarah O.",
    text: "I absolutely love my perfume. The scent is beautiful and lasts all day. I will definitely order again!",
  },
  {
    name: "David M.",
    text: "Amazing customer service and very fast delivery. The fragrance smells exactly as described.",
  },
  {
    name: "ojo.",
    text: "WumightScent has such beautiful and long-lasting perfumes. Highly recommended.",
  },
  {
    name: "Mary M.",
    text: "WumightScent never disappoints. Amazing fragrance and excellent service!",
  },
  {
    name: "David M.",
    text: "Great fragrance, great quality, and fast delivery. I’ll definitely order again.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="relative bg-cover bg-center  px-6 text-white "
     style={{ backgroundImage: `url(${perfumeBg})` }}
    >
      
      <div className="absolute  inset-0 bg-black/70"></div>

      
      <div className="relative z-10  mx-auto max-w-3xl text-center">

        <h2 className="mb-3 text-3xl font-bold">
          What Our Customers Say
        </h2>

        <p className="mb-8 text-sm text-white/70">
          Hear from customers who love their ScentAura fragrance.
        </p>

        
        <div className="relative  rounded-2xl bg-white/10 px-10  backdrop-blur-sm">

          
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-4xl text-white/70 transition hover:text-white"
          >
            ‹
          </button>

          
          <p className="text-base leading-8 md:text-lg">
            "{testimonials[current].text}"
          </p>

          
          <div className="my-5 flex justify-center text-lg text-yellow-400">
            
  <Star fill="gold" />
  <Star fill="gold" />
  <Star fill="gold" />
  <Star fill="gold" />
  <Star fill="gold" /> 
  
          </div>

          
          <p className="font-semibold">
            — {testimonials[current].name}
          </p>

          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-4xl text-white/70 transition hover:text-white"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                current === index
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;