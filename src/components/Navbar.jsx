import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/s1.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/smisbah38/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="hover:text-cyan-200" />
        </a>
        <a
          href="https://github.com/smisbah38"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub className="hover:text-cyan-200" />
        </a>
        <a
          href="https://www.facebook.com/syed.m.marjan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="hover:text-cyan-200" />
        </a>
        <a
          href="https://www.instagram.com/mmmisbahhh/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="hover:text-cyan-200" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
