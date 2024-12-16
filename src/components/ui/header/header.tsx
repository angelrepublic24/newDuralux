'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const links = [
    { link: "/", text: "Home" },
    { link: "product", text: "Products" },
    { link: "gallery", text: "Gallery" },
    { link: "process", text: "Process" },
    { link: "idea-room", text: "Idea Room" },
    { link: "ourstory", text: "Our Story" },
    { link: "login", text: "Login" },
  ];
  const isHome = pathname === "/";
  const isProducts = pathname === "/product";

  return (
    <>
      <header className={`relative bg-gray-800 text-white ${isHome || isProducts ? "h-[90vh]" : "h-32"
        } bg-black transition-all duration-300`}>
        {/* Mostrar el video solo en el homepage */}
        {pathname === "/" && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-fill md:object-cover z-1 opacity-60"
          >
            <source
              src="https://duraluxcanopies.com/wp-content/uploads/2024/11/CANOPY.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta la reproducción de videos.
          </video>
        )}

        {/* Mostrar una imagen si estamos en /products */}
        {pathname === "/product" && (
          <div className="absolute inset-0 w-full h-full z-1 opacity-60">
            <Image
              src="https://duraluxcanopies.com/wp-content/uploads/2024/11/pngtree-blueprints-of-a-modern-home-picture-image_5819402.png"
              alt="Products Header"
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className="flex items-center justify-between py-4 relative z-10 px-4 mx-8">
          <div className="logoContainer">
            <a href="/">
              <h1 className="text-2xl font-bold mt-4">
                <Image
                  src="https://duraluxcanopies.com/wp-content/uploads/2021/06/50e583_6904b0ec90ce4825878632eea1040603_mv2.png"
                  className="w-32 md:w-60"
                  alt=""
                  width={500}
                  height={500}
                />
              </h1>
            </a>
          </div>
          <div className="menu ">
            <button
              id="menu-toggle"
              className="block md:hidden focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            <nav id="menu" className="hidden md:flex space-x-6">
              {links.map((nav, index) => (
                <Link key={index} href={nav.link} className="hover:text-yellow-400">
                  {nav.text}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden lg:block w-100"></div>
        </div>
        <div id="mobile-menu" className="hidden md:hidden relative z-10">
          <nav className="flex flex-col space-y-2 mt-4 p-4 bg-gray-800">
          {links.map((nav, index) => (
                <Link key={index} href={nav.link} className="hover:text-yellow-400">
                  {nav.text}
                </Link>
              ))}
          </nav>
        </div>


      {pathname === "/" && (
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white ml-10">
        <p className="text-amber-500 text-xl mb-4">DURALUX MODULAR</p>
        <h2 className="text-2xl md:text-5xl lg:text-8xl font-semibold mb-6">
          <p className="text-white">Modular</p>
          <p className="text-white">architectural</p>
          <p className="text-white">elements that click</p>
        </h2>
        <div className="md:space-x-4 mt-4 w-1/2 md:w-full flex flex-col md:flex-row">
          <a
            href="#"
            className="bg-amber-500 text-white py-4 px-8 rounded-md hover:bg-amber-700 mb-4 md:mb-0"
          >
            Start Your Own
          </a>
          <a
            href="#"
            className="bg-gray-800 py-4 px-8 rounded-md hover:bg-gray-900 "
          >
            Consult Our Designers
          </a>
        </div>
      </div>
      )}
      {pathname === "/product" && (
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white ml-10">
        <h2 className="text-2xl md:text-5xl lg:text-8xl font-semibold mb-6">
          <p className="text-white">Out-of-the-box designs</p>
          <p className="text-white">Shipped</p>
          <p className="text-white">In an RTI Box</p>
        </h2>
        <p className="text-2xl text-white w-1/3">Over the years, we developed turnkey kit of our most popular designs, Get a stunning product width zero guesswork and rapid lead times</p>
        <div className="md:space-x-4 mt-8 w-1/2 md:w-full flex flex-col md:flex-row">
          <Link
            href="#"
            className="border-amber-500 border-2 text-white py-4 px-8 rounded-md hover:bg-amber-700 mb-4 md:mb-0"
          >
            See them all
          </Link>
        </div>
      </div>
      ) }
        
      </header>
    </>
  );
};

export default Header;