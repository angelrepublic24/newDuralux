import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0d112d] text-white py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 container mx-auto mt-24 mb-10">
          <div className="flex flex-col border-r-2 border-gray-500 w-3/4">
            <h5 className="text-gray-400 text-2xl font-light">Products</h5>
            <Link className="text-white text-xl pt-2" href="#">
              Overview
            </Link>
            <Link className="text-white text-xl pt-2" href="#">
              Canopies
            </Link>
            <Link className="text-white text-xl pt-2" href="#">
              Pergolas
            </Link>
            <Link className="text-white text-xl pt-2" href="#">
              Sunshades
            </Link>
            <Link className="text-white text-xl pt-2" href="#">
              2025 Pipeline
            </Link>
          </div>
          <div className="flex flex-col border-r-2 border-gray-500 w-3/4">
            <h5 className="text-gray-400 text-2xl font-light ">Inspiration</h5>
            <Link className="text-white text-xl pt-2" href="#">
              Builder
            </Link>
            <Link className="text-white text-xl pt-2" href="#">
              Gallery
            </Link>
            <Link className="text-white text-xl pt-2" href="#">
              Idea Room
            </Link>
            <Link className="text-white text-xl pt-2" href="#">
              Blog
            </Link>
            <Link className="text-white text-xl pt-2" href="#">
              Newsletter
            </Link>
          </div>
          <div className="flex flex-col border-r-2 border-gray-500 w-3/4">
            <h5 className="text-gray-400 text-2xl font-light">Company</h5>
            <Link className="text-white text-xl pt-2" href="#">
              Our Story
            </Link>
            <Link className="text-white text-xl pt-2" href="#">
              Partner Login
            </Link>
            <Link className="text-white text-xl pt-2" href="#">
              Become a Partner
            </Link>
            <Link className="text-white text-xl pt-2" href="#">
              Consult Our Designers
            </Link>
            <Link className="text-white text-xl pt-2" href="#">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="mb-6">
              <h5 className="text-gray-400 text-2xl font-light">
                DURALUX MODULAR
              </h5>
              <Link className="text-xl pt-2" href="#">
                info@duraluxmodular.com
              </Link>
              <Link className="text-xl pt-2" href="#">
                845.517.5001
              </Link>
            </div>
            <div>
              <h5 className="text-gray-400 text-2xl font-light">
                SEE OUR SISTER COMPANY
              </h5>
              <Link className="text-xl pt-2" href="#">
                DuraluxCanopies.com
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center flex justify-center items-center space-y-6 border-y-2 border-gray-500 w-11/12 py-5">
          <p className="text-white text-xl">
            Duralux Modular Products Protected Under US Design & Utility Patent
            No. 1,234,567
          </p>
        </div>
        <div className="socialMedia py-4">
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="rounded-full border-2 p-3 hover:bg-yellow-500 transition-colors duration-300"
            >
              <Image
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                alt="Instagram"
                className="w-5 h-5"
                width={500}
                height={500}
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="rounded-full border-2 p-3 hover:bg-yellow-500 transition-colors duration-300"
            >
              <Image
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                alt="Facebook"
                className="w-5 h-5"
                width={500}
                height={500}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="rounded-full border-2 p-3 hover:bg-yellow-500 transition-colors duration-300"
            >
              <Image
                src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
                alt="Twitter"
                className="w-5 h-5"
                width={500}
                height={500}
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              className="rounded-full border-2 p-3 hover:bg-yellow-500 transition-colors duration-300"
            >
              <Image
                src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
                alt="YouTube"
                className="w-5 h-5"
                width={500}
                height={500}
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="rounded-full border-2  p-3 hover:bg-yellow-500 transition-colors duration-300"
            >
              <Image
                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                alt="LinkedIn"
                className="w-5 h-5"
                width={500}
                height={500}
              />
            </a>
          </div>
          <div className="container mx-auto flex justify-center items-center flex-col mt-6">
            <p>&copy; 2025 Duralux Modular. All Rights Reserved.</p>
            <nav className="space-x-4">
              <a href="#" className="hover:text-yellow-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-400">
                Image Credits
              </a>
              <a href="/contact.html" className="hover:text-yellow-400">
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};


export default Footer;