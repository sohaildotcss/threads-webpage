"use client";
import gsap from "./gsap.config.js";
import { useEffect } from "react";
import Image from "next/image";
import section_assets from "/public/assets/hero.jpg";
import logo from "/public/assets/logo.png";
export default function Home() {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".page", {
      opacity: 0,
      scale: 40,
    });
    tl.to(".page", {
      duration: 0.1,
      scale:1,
    });
    tl.from("nav p,nav h1,nav img", {
      y: -100,
      stagger:0.5,
    });
    tl.to("nav p,nav h1,nav img", {
      duration: 0.1,
    });
  });
  return (
    <div className="page bg-black">
      <nav className="bg-black flex justify-center items-center p-4 fixed top-0 z-10 w-full">
        <div className="nav-left">
          <p className="absolute left-4 md:left-20 top-4 text-2xl md:text-4xl  text-[#e5e5e5]">
            ☰
          </p>
        </div>
        <div className="nav-right flex justify-around ">
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-600 text-transparent bg-clip-text">
            Threads
          </h1>
          <Image
            src={logo}
            alt=""
            className="h-8 absolute right-16 md:h-10 w-auto cursor-pointer hover:animate-spin"
          />
        </div>
      </nav>
      <div className="hero relative">
        <video
          autoPlay
          muted
          loop
          src="./assets/hero-vid.mp4"
          type="video/mp4"
          className="absolute mt-24 md:mt-0"
        />
        <div className="section md:h-auto bg-black">
          <Image
            src={section_assets}
            className="h-80 md:h-1/2 opacity-10"
            alt=""
          />
        </div>
      </div>
      <div className="features text-gray-900 md:bg-gray-900 md:text-white p-8 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          voluptatum, numquam sed ex illo architecto quidem! Harum suscipit
          blanditiis labore ipsum ad vero. Quod dolor natus magni, alias qui
          aspernatur? Deserunt, accusamus culpa iste aspernatur nam facilis,
          doloribus, cum sunt labore eos tempore. Magni aliquam et quas, alias
          nisi, amet earum sint fugit illum, incidunt unde. Quo odit laboriosam
          consequuntur. Odio dolorum illum suscipit labore alias saepe! Ipsam
          laborum eum tempore blanditiis, numquam
          <br />
        </p>
      </div>
    </div>
  );
}
