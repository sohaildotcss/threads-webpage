import Image from "next/image";
import section_assets from "/public/assets/hero.jpg";
import logo from "/public/assets/logo.png";
export default function Home() {
  return (
    <body className="bg-gray-300">
      <div className="logo bg-black flex justify-center items-center p-4">
        <div>
          <p className="absolute left-20 top-4 text-4xl text-[#e5e5e5]">☰</p>
        </div>
        <div className="flex ">
          <h1 className="text-4xl font-bold bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-600 text-transparent bg-clip-text">
            Threads
          </h1>
          <Image src={logo} className="h-10 w-auto"/>
        </div>
      </div>
      <div className="hero">
        <video
          autoPlay
          muted
          loop
          src="./assets/hero-vid.mp4"
          type="video/mp4"
        />
      </div>
      <div className="section bg-black">
        <Image
          src={section_assets}
          className="h-1/2 w-full object-contain opacity-10"
        />
      </div>
    </body>
  );
}
