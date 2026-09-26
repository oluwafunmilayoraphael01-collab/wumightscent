import perfumeBg from "../assets/perfumebg.jpg";
import { MoveRight, ShieldCheck,TruckElectric,CreditCard,Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { perfumes } from "../data/card";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="w-full scroll-fade">

      
      <div
        className="w-full h-[300px] bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${perfumeBg})` }}
      >
        <div className="bg-black/70 h-full px-11 ">

          <p className="text-amber-500 tracking-[3px]">
            PREMIUM FRAGRANCES
          </p>

          <h1 className="text-amber-300 text-5xl leading-tight">
            Discover Your <br />
            Signature Scent
          </h1>

          <p className="text-white mt-4">
            Luxury perfume for every moment.
            <br />
            Find the scent that tells your story.
          </p>

          <Link
            to="/Collection"
            className="inline-flex items-center gap-2 mt-6 bg-amber-300 px-5 py-2 rounded-2xl text-black hover:bg-amber-400 transition"
          >
            Shop Collection
            <MoveRight size={20} />
          </Link>

        </div>
      </div>

      
      <section className="py-8">

        <h1 className="font-bold text-center text-2xl">
          Featured Perfumes
        </h1>

        <p className="text-center font-bold text-amber-600">
          _____________
        </p>

        <div className=" grid grid-cols-2 md:flex justify-center  flex-wrap gap-20 px-8 mt-8">

          {perfumes.map((perfume) => (
            <div
          
              className="w-[200px] border rounded-lg overflow-hidden shadow-md "
            >

              <img
                src={perfume.image}
                alt={perfume.name}
                className=" h-[200px] object-cover object-cover object-top rounded-t-lg"
                

              />

              <div className="p-4">
                <h2 className="font-bold text-lg">
                  {perfume.name}
                </h2>
                <p>{perfume.desc}</p>
              </div>

            </div>
          ))}

        </div>

      </section>
      <div className="bg-amber-200 flex hv-35   py-4  justify-center ">
<div className="px-5">
  <div className="px-4"><ShieldCheck /></div>
  <h1 className="font-bold">Authentic Product</h1>
<p>100% original & premium</p></div>

<div className="px-5">
  <div className="px-4"><Timer /></div>
  <h1 className="font-bold">Long Lasting Scent</h1>
<p>Fragrance that stay</p></div>

<div className="px-5">
  <div className="px-4"><TruckElectric /></div>
  <h1 className="font-bold">Fast Delivery</h1>
<p>Door step in Nigeria</p></div>
<div className="px-5">
  <div className="px-4"><CreditCard /></div>
  <h1 className="font-bold">Secure Payment </h1>
<p>Safe & Easy payment </p></div>
      </div>

<Testimonials />
       
            <div className=" text-center">
              <h1 className="font-bold">FOLLOW US ON INSTAGRAM</h1>
              <p>Get inspired by our latest arrival, promos and more </p>
          <div>
<div className="flex md:justify-center">
  <div><img src="https://www.highsnobiety.com/static-assets/dato/1730290114-main.jpg" alt="perfume"  className="w-30"/></div>
  <div><img src="https://img.freepik.com/premium-photo/perfume-layering-techniques_1273633-5309.jpg" alt="perfume"  className="w-24"/></div>
  <div><img src="https://th.bing.com/th/id/OIP.biLbsguqEB6En21MMK7e4wHaF7?w=222&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="perfume"  className="w-30"/></div>
  <div><img src="https://tse1.mm.bing.net/th/id/OIP.vvPDZusR0Qv-LoNIBHNYUQHaGi?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="perfume"  className="w-27"/></div>
    <div><img src="https://th.bing.com/th/id/OIP.D8t6szf3INZpQ3UpcLWubgHaFj?w=219&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="perfume"  className="w-30"/></div>
  <div><img src="https://th.bing.com/th/id/OIP.p2TgQYU7Cu6dKCkon964FwHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="perfume"  className="w-45"/></div>

</div>
          </div>
         </div>
    </div>
  );
};

export default Home;