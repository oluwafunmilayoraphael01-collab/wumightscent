import { perfumes } from "../data/cards";
import perfumeBg from "../assets/perfumebg.jpg";
import { TruckElectric, ShieldCheck, CreditCard,Phone   } from "lucide-react";

const Collection = () => {
  return (
    <div>
      <div className="text-center font-bold text-2xl  hv-20 bg-contain bg-center bg-no-repeat "
                    style={{ backgroundImage: `url(${perfumeBg})` }}>  <div className="bg-black/70 hv-16 ">
                      <h1 className="text-5xl text-amber-600 font-extrabold">OUR COLLECTION</h1>
            <p className="text-white">Find the Perfect fragrance for every mood, accassion and personality </p> </div> </div>
      <div className=" md:flex justify-center grid grid-cols-3 py-3 gap-10 flex-wrap gap-2 px-8 mt-8">
      
                {perfumes.map((perfume) => (
                  <div
                
                    className="md:w-[200px] border hv-50  rounded-lg overflow-hidden shadow-md "
                  >
      
                    <img
                      src={perfume.image}
                      alt={perfume.name}
                      className=" md:h-[200px] object-cover object-cover object-top rounded-t-lg"
                      
      
                    />
      
                    <div className="p-1">
                      <h2 className="font-bold text-lg">
                        {perfume.name}
                      </h2>
                       <button   className="inline-flex items-center gap-2  bg-black px-5  rounded-2xl text-amber-50 hover:bg-amber-400 transition"><a  href="https://wa.link/nfkm94" target="_blank"> Place Order</a></button>
                    </div>
      
                  </div>
                ))}
      
              </div>
      <div className="bg-amber-950 px-3 flex  justify-between py-4 text-amber-50">
        <div className="text-amber-50">
          <h1 className="font-bold">Order Easily on WhatsApp</h1>
          <p>Chat with Us now to place your Order or get expert Advise</p>
          
          <button   className="flex items-center gap-2  bg-green-400 px-5 py-2 rounded-2xl text-amber-50 hover:bg-amber-400 transition"><div className="flex gap-2"> <div><Phone /></div><div><a  href="https://wa.link/nfkm94" target="_blank">Chat On WhatsApp</a></div></div></button>
        </div>
        <div><div className="px-6 text-amber-400"><ShieldCheck /></div><h1>100% Original</h1></div>
      <div><div className="px-6 text-amber-400"><TruckElectric /></div><p>Fast Delivery</p></div>
      <div><div className="px-6 text-amber-400"><CreditCard /></div><p>Secure Payment</p></div>
      </div>
    </div>
  )
}

export default Collection
