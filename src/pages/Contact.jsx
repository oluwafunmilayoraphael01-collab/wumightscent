import { Phone, Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("Sending your message...");
    setSuccess(false);

    emailjs
      .sendForm(
        "service_j6uz4fj",
        "template_y2ehgww",
        form.current,
        {
          publicKey: "ViUmpqMxRm6jNI1f5",
        }
      )
      .then(() => {
        setStatus("Your message has been sent successfully!");
        setSuccess(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("Unable to send your message. Please try again.");
        setSuccess(false);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="w-full bg-[#faf8f3] px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* PAGE HEADING */}
        <div className="text-center mb-12">
          <p className="text-amber-600 uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            WUMIGHT COLLECTION
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#171513]">
            Contact Us
          </h1>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Have a question or need help choosing your perfect fragrance?
            We'd love to hear from you.
          </p>

          <div className="w-16 h-1 bg-amber-400 mx-auto mt-5"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT - CONTACT FORM */}
          <div className="w-full min-w-0 bg-white p-6 sm:p-8 rounded-xl shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-[#171513]">
              Send Us a Message
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Fill in the form below and we'll get back to you.
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-7 w-full"
            >
              {/* NAME */}
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="border border-gray-300 w-full px-4 py-3 rounded-lg outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition"
                />
              </div>

              {/* EMAIL */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="border border-gray-300 w-full px-4 py-3 rounded-lg outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition"
                />
              </div>

              {/* MESSAGE */}
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  required
                  rows="6"
                  className="border border-gray-300 w-full px-4 py-3 rounded-lg outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 resize-none transition"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 bg-[#171513] text-white px-6 py-4 rounded-lg font-semibold hover:bg-amber-500 hover:text-black transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {/* STATUS MESSAGE */}
              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-4 text-sm font-medium text-center ${
                    success ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* RIGHT - CONTACT DETAILS */}
          <div className="w-full min-w-0">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#171513] mb-3">
              Get In Touch
            </h2>

            <p className="text-gray-600 mb-8">
              We're always happy to assist you with your fragrance needs.
            </p>

            {/* PHONE */}
            <div className="flex gap-4 mb-8">
              <div className="bg-amber-100 text-amber-600 p-3 rounded-lg flex-shrink-0">
                <Phone size={22} />
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-lg text-[#171513]">
                  Phone / WhatsApp
                </h3>

                <p className="text-gray-600 mt-1">
                  +234 803 659 0895
                </p>

                <a
                  href="https://wa.link/75y3aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 font-semibold inline-block mt-2 hover:underline"
                >
                  Chat With Us On WhatsApp →
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4 mb-8">
              <div className="bg-amber-100 text-amber-600 p-3 rounded-lg flex-shrink-0">
                <Mail size={22} />
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-lg text-[#171513]">
                  Email Address
                </h3>

                <p className="text-gray-600 mt-1 break-words">
                  wumightscent@gmail.com
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  We'll reply within 24 hours.
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex gap-4 mb-8">
              <div className="bg-amber-100 text-amber-600 p-3 rounded-lg flex-shrink-0">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#171513]">
                  Our Location
                </h3>

                <p className="text-gray-600 mt-1">
                  Akungba, Nigeria
                </p>
              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="w-full overflow-hidden rounded-xl shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Adekunle%20Ajasin%20University%2C%20Akungba-Akoko%2C%20Ondo%20State%2C%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-56 sm:h-64 border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="WUMIGHT COLLECTION Location"
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Adekunle+Ajasin+University%2C+Akungba-Akoko%2C+Ondo+State"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-amber-700 font-semibold mt-3 hover:underline"
            >
              Get Directions →
            </a>
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="text-center mt-16 border-t border-gray-200 pt-8">
          <p className="font-serif text-xl sm:text-2xl font-bold text-[#171513]">
            WUMIGHT COLLECTION
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Discover your signature scent. Make every moment memorable.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;