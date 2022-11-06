import { Link } from "react-scroll";
import "./styles.css";

export default function NavBar() {
  return (
    <nav className="invisible w-0 h-0 md:visible md:flex lg:visible lg:flex md:sticky md:top-0 md:z-10 font-mono md:backdrop-filter md:backdrop-blur-[10px] md:bg-opacity-20 md:border-b md:border-gray-500 md:flex md:w-full md:h-28 lg:sticky lg:top-0 lg:z-10 font-mono lg:backdrop-filter lg:backdrop-blur-[10px] lg:bg-opacity-20 lg:border-b lg:border-gray-500 lg:flex lg:w-full lg:h-28 bg-gray-700 text-sm ">
      <div className="mx-3 p-7 text-pastel-white">
        <Link activeClass="active" smooth spy to="about">
          <button className="link link-underline link-underline-black text-white">
            .about()
          </button>
        </Link>
      </div>
      <div className="mx-1 p-7 text-white">
        <Link activeClass="active" smooth spy to="exp">
          <button className="link link-underline link-underline-black text-white">
            .experience()
          </button>
        </Link>
      </div>
      <div className="mx-1 p-7 text-white">
        <Link to="skills" spy={true} smooth={true} duration={500}>
          <button className="link link-underline link-underline-black text-white">
            .education()
          </button>
        </Link>
      </div>
      <div className="mx-1 p-7 text-white">
        <button className="link link-underline link-underline-black text-white">
          <a href="mailto:sofiapanuganti@gmail.com" title="Send me an email">
            .contact()
          </a>
        </button>
      </div>
    </nav>
  );
}

{
  /* NavBar ends  */
}
