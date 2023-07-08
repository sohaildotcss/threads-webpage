import Image from "next/image";
import section_assets from "/public/assets/hero.jpg";
import logo from "/public/assets/logo.png";
export default function Home() {
  return (
    <body className="relative bg-black">
      <nav className="bg-black flex justify-center items-center p-4 fixed top-0 z-10 w-full">
        <div className="nav-left">
          <p className="absolute left-4 md:left-20 top-4 text-2xl md:text-4xl  text-[#e5e5e5]">
            ☰
          </p>
        </div>
        <div className="nav-right flex ">
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-600 text-transparent bg-clip-text">
            Threads
          </h1>
          <Image src={logo} className="h-8 md:h-10 w-auto ml-1 cursor-pointer hover:animate-spin" />
        </div>
      </nav>
      <div className="hero relative">
        <video
          autoPlay
          muted
          loop
          src="./assets/hero-vid.mp4"
          type="video/mp4"
          className="absolute mt-16 md:mt-0"
        />
        <div className="section md:h-auto bg-black">
          <Image src={section_assets} className="h-80 md:h-1/2 opacity-10" />
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
          <br /> laboriosam esse iste quibusdam quam. Error iste, suscipit
          debitis rerum pariatur illo exercitationem odio iusto. Et,
          reprehenderit. Explicabo, quam aliquid repudiandae inventore dolore
          cupiditate mollitia laborum. Ad est perspiciatis voluptas sed id autem
          nobis iusto odio iure corrupti, deleniti fugiat iste dolore ullam
          dolores, tenetur nam tempora? Aperiam optio nulla sint dolorem
          explicabo odio nisi reiciendis harum vero quaerat, eveniet neque
          beatae qui dicta voluptas quae rem hic eaque impedit omnis cumque quas
          fugit sapiente ad. Aliquid.
        </p>
      </div>
    </body>
  );
}
