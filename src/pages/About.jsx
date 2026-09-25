import perfumeBg from "../assets/perfumebg.jpg";

const About = () => {
  return (
    <div>
      <div className="text-center font-bold text-2xl  hv-20 bg-contain bg-center bg-no-repeat "
              style={{ backgroundImage: `url(${perfumeBg})` }}>  <div className="bg-black/70 h-16 ">
                <h1 className="text-amber-600 font-extrabold">About Us</h1>
      <p className="text-white">Our story,Our Passion, Your signature scent</p> </div> </div>
    <div className="flex gap-10 py-10 px-9">
      <div><img src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:250,cw:1500,ch:1125,q:80,w:1500/dG2xKfejHrshECstHNiwn.jpg" alt="ing" className="h-100 w-300" /></div>
      
      <div className="md:py-20">
        <h1 className="text-2xl"> Our Story</h1>
        <p>WumiScent was born from a passion for <br />beautiful fragrances and the desire to help <br /> people feel confident, elegant, and <br />unforgettable. What started as a simple <br />love for amazing scents grew into a vision to make quality fragrances accessible to everyone. 
At WumiScent, every scent is chosen with you in mind  whether you want something soft and sweet, bold and <br />captivating, or fresh and refreshing. <br />

WumiScent was born from passion. Built with love. Made to leave a lasting impression.</p></div>
    </div>
    <div className="flex md:justify-center">
  <div><img src="https://www.highsnobiety.com/static-assets/dato/1730290114-main.jpg" alt="perfume"  className="w-30"/></div>
  <div><img src="https://img.freepik.com/premium-photo/perfume-layering-techniques_1273633-5309.jpg" alt="perfume"  className="w-24"/></div>
  <div><img src="https://th.bing.com/th/id/OIP.biLbsguqEB6En21MMK7e4wHaF7?w=222&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="perfume"  className="w-30"/></div>
  <div><img src="https://tse1.mm.bing.net/th/id/OIP.vvPDZusR0Qv-LoNIBHNYUQHaGi?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="perfume"  className="w-27"/></div>
    <div><img src="https://th.bing.com/th/id/OIP.D8t6szf3INZpQ3UpcLWubgHaFj?w=219&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="perfume"  className="w-30"/></div>
  <div><img src="https://th.bing.com/th/id/OIP.p2TgQYU7Cu6dKCkon964FwHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="perfume"  className="w-40"/></div>

</div>
    </div>
  )
}

export default About
