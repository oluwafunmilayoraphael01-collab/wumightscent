import { Phone, Mail, MapPin,   } from "lucide-react"
import  emailJS  from "@emailjs/browser"
import { useRef, useState } from "react"

const Contact = () => {
 const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailJS.sendForm(
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
    <div>
    <div className="flex py-9 justify-center gap-6 px-4">
      <div>
        <h1 className="font-black text-2xl">Contact Us</h1>
        <p className="font-medium">Let's Find Perfect Scent </p>
        <form ref={form} onSubmit={sendEmail}>
          <input
           type="text" 
           name="name"
           placeholder="Enter Your Name"
           required
           className="border w-50 px-1 rounded-lg my-4 "
          /> <br />
          <input
           type="email" 
           name="email"
           placeholder="Your Email"
           required
           className="border w-50 px-1 rounded-lg "
          /> <br />
          <textarea
           required 
           name="message"
           placeholder="Message"
           className="border  px-1 rounded-lg h-50 md:w-100 my-4">
          </textarea><br />
          <button type="submit" className="border">Send Message</button>
        {status && <p>{status}</p>}
        </form>
      </div>
      <div>
      <div className="flex gap-4 py-4"><div className="text-amber-300"><Phone/></div>
        <div> <h1 className=" font-black">Phone / WhatsApp</h1><p>+234 803 659 0895</p>
<button className="text-green-700 font-medium"><a href="https://wa.link/nfkm94" target="_blank" rel="noopener noreferrer">Chat With Us On WhatsApp</a></button>
</div>
        </div>
        <div className="flex gap-4"><div className="text-amber-300" ><Mail/></div>
        <div> <h1 className=" font-black">Email</h1><p> wumightscent@gmail.com <br />We'll reply within 24hours</p></div> 
        </div>
                <div className="flex gap-4 py-4"><div className="text-amber-300" ><MapPin/></div>
        <div> <h1 className=" font-black">Location</h1><p> Akungba, Nigeria</p></div> 
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.9141160209324!2d5.74007650000001!3d7.474736200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104634a88357e003%3A0xa221e25abad811a0!2sAdekunle%20Ajasin%20University!5e0!3m2!1sen!2sng!4v1790313606974!5m2!1sen!2sng" frameborder="0" className="rounded-lg md:w-100"></iframe>
    </div>
</div>
    </div>
  )
}

export default Contact
