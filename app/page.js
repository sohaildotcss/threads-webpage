import Image from "next/image";
import logo from "./img/logo.png";
import hero from "./img/hero.jpg";
import transp from "./img/transp-logo.png";

export default function Home() {
  return (
    <body className="bg-gray-300 overflow-y-hidden">
      <div className="logo bg-black flex space- justify-center items-center p-4">
        <p className="absolute left-20  text-4xl text-[#e5e5e5]">☰</p>
        <h1 className="text-4xl font-bold bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-600 text-transparent bg-clip-text">
          Threads
        </h1>
      </div>
      <div className="hero bg-black">
        <Image src={transp} className="absolute left-[500px] top-[250px]" />
        <Image src={hero} className="h-full w-full object-contain opacity-10" />
      </div>
    </body>
  );
}
