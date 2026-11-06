
import { useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  MessageCircle,
} from "lucide-react";
import perfumeBg from "../assets/perfumebg.jpg";

const testimonials = [
  {
    name: "Blessing A.",
    text: "WUMIGHT COLLECTION never disappoints! The perfumes are original, long-lasting and the delivery was super fast.",
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
    name: "Ojo.",
    text: "WUMIGHT COLLECTION has such beautiful and long-lasting perfumes. Highly recommended.",
  },
  {
    name: "Mary M.",
    text: "WUMIGHT COLLECTION never disappoints. Amazing fragrance and excellent service!",
  },
  {
    name: "David M.",
    text: "Great fragrance, great quality, and fast delivery. I'll definitely order again.",
  },

  {
  name: "Ada E.",
  text: "I love the fragrance! It smells so beautiful and lasts for hours. Definitely worth buying.",
},
{
  name: "Tobi K.",
  text: "The scent is amazing, and the quality exceeded my expectations. I'll definitely order again.",
},
{
  name: "Favour O.",
  text: "I received my perfume in good condition. The fragrance is lovely, and I'm impressed.",
},
{
  name: "Grace B.",
  text: "Beautiful fragrance and excellent customer service. WUMIGHT COLLECTION is worth recommending.",
},
{
  name: "Daniel A.",
  text: "I really enjoyed my purchase. The scent is refreshing, elegant, and exactly what I wanted.",
},
{
  name: "Esther C.",
  text: "I'm happy with my perfume. It smells wonderful, and I look forward to shopping here again.",
},
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const review = testimonials[current];

  return (
    <section
      className="relative bg-cover bg-center px-5 sm:px-8 py-20 sm:py-28 text-white"
      style={{ backgroundImage: `url(${perfumeBg})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#100E0C]/90" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-amber-400" />
            <p className="text-amber-400 text-xs font-bold tracking-[5px]">
              CUSTOMER EXPERIENCES
            </p>
            <span className="w-10 h-px bg-amber-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold">
            Words From Our Customers
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto leading-7">
            Every fragrance tells a story. Discover what customers
            have to say about their experience with WUMIGHT COLLECTION.
          </p>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="max-w-4xl mx-auto">

          <div className="relative border border-amber-400/20 bg-white/[0.06] backdrop-blur-md rounded-2xl px-7 sm:px-16 py-12 sm:py-16 text-center shadow-2xl">

            {/* QUOTE ICON */}
            <div className="w-14 h-14 rounded-full bg-amber-400/10 flex items-center justify-center mx-auto mb-8">
              <Quote size={27} className="text-amber-400" />
            </div>

            {/* PREVIOUS BUTTON */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-amber-400/30 text-amber-400 flex items-center justify-center hover:bg-amber-400 hover:text-black transition"
            >
              <ChevronLeft size={23} />
            </button>

            {/* REVIEW */}
            <div className="min-h-[150px] flex flex-col justify-center">
              <p className="text-lg sm:text-xl md:text-2xl font-serif leading-9 text-gray-100">
                "{review.text}"
              </p>
            </div>

            {/* STARS */}
            <div className="flex justify-center gap-1 mt-7 mb-6 text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={19}
                  fill="currentColor"
                />
              ))}
            </div>

            {/* CUSTOMER DETAILS */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold text-lg mb-3">
                {review.name.charAt(0).toUpperCase()}
              </div>

              <h3 className="font-semibold text-white text-lg">
                {review.name}
              </h3>

              <p className="text-amber-400 text-[10px] tracking-[3px] mt-2">
                CUSTOMER REVIEW
              </p>
            </div>

            {/* NEXT BUTTON */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-amber-400/30 text-amber-400 flex items-center justify-center hover:bg-amber-400 hover:text-black transition"
            >
              <ChevronRight size={23} />
            </button>

          </div>

          {/* SLIDE COUNTER */}
          <div className="flex items-center justify-between mt-7 text-xs text-gray-400">
            <span className="tracking-widest">
              CUSTOMER STORIES
            </span>

            <span className="text-amber-400 font-semibold tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
            <div
              className="h-full bg-amber-400 transition-all duration-500"
              style={{
                width: `${((current + 1) / testimonials.length) * 100}%`,
              }}
            />
          </div>

          {/* DOT NAVIGATION */}
          <div className="flex justify-center flex-wrap gap-2 mt-7">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`View review ${index + 1}`}
                aria-current={current === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-7 bg-amber-400"
                    : "w-2 bg-white/30 hover:bg-amber-400/70"
                }`}
              />
            ))}
          </div>

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="mt-16 text-center">
          <MessageCircle
            size={25}
            className="mx-auto text-amber-400 mb-4"
          />

          <p className="text-gray-300 text-sm sm:text-base">
            Have you shopped with us?
          </p>

          <a
            href="https://wa.link/75y3aw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-amber-400 font-semibold hover:text-white transition"
          >
            Share Your Experience
            <ChevronRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
