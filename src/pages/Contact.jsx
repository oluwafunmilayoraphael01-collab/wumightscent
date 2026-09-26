import { Phone, Mail, MapPin } from "lucide-react";
import emailJS from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailJS
      .sendForm(
        "service_j6uz4fj",
        "template_y2ehgww",
        form.current,
        {
          publicKey: "ViUmpqMxRm6jNI1f5",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="w-full px-4 py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="grid  grid-cols-2 gap-10">

          <div className="w-full">
            <h1 className="font-black text-3xl md:text-4xl">
              Contact Us
            </h1>

            <p className="font-medium text-gray-600 mt-2">
              Let's Find Perfect Scent
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-6 w-full"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                className="border border-gray-300 w-full px-4 py-3 rounded-lg mb-4 outline-none focus:border-amber-400"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="border border-gray-300 w-full px-4 py-3 rounded-lg mb-4 outline-none focus:border-amber-400"
              />

              {/* Message */}
              <textarea
                required
                name="message"
                placeholder="Message"
                className="border border-gray-300 w-full px-4 py-3 rounded-lg h-40 resize-none outline-none focus:border-amber-400"
              />

              {/* Button */}
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg mt-4 hover:bg-gray-800 transition"
              >
                Send Message
              </button>

              {status && (
                <p className="mt-4 text-sm font-medium">
                  {status}
                </p>
              )}
            </form>
          </div>

          <div className="">

            <div className="flex gap-4 mb-6">
              <div className="text-amber-400 flex-shrink-0">
                <Phone size={20} />
              </div>

              <div>
                <h2 className="font-black text-lg">
                  Phone / WhatsApp
                </h2>

                <p className="text-gray-600">
                  +234 803 659 0895
                </p>

                <a
                  href="https://wa.link/nfkm94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 font-medium inline-block mt-1"
                >
                  Chat With Us On WhatsApp
                </a>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="text-amber-400 ">
                <Mail size={20} />
              </div>

              <div>
                <h2 className="font-black text-lg">
                  Email
                </h2>

                <p className="text-gray-600">
                  wumightscent@gmail.com
                  <br />
                  We'll reply within 24 hours
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 mb-6">
              <div className="text-amber-400 flex-shrink-0">
                <MapPin size={20} />
              </div>

              <div>
                <h2 className="font-black text-lg">
                  Location
                </h2>

                <p className="text-gray-600">
                  Akungba, Nigeria
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.9141160209324!2d5.74007650000001!3d7.474736200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104634a88357e003%3A0xa221e25abad811a0!2sAdekunle%20Ajasin%20University!5e0!3m2!1sen!2sng!4v1790313606974!5m2!1sen!2sng"
                className="w-full md:h-64 rounded-lg border-0"
                loading="lazy"
                title="WumiScent Location"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;