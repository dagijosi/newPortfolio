import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillHeart,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFillPinMapFill } from "react-icons/bs";
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
  // Quick Links and Social Media Links data
  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/dagmawi-yoseph-4b4aa6296", icon: AiFillLinkedin, label: "LinkedIn Profile" },
    { href: "https://github.com/dagijosi", icon: AiFillGithub, label: "GitHub Profile" },
    { href: "https://twitter.com", icon: AiFillTwitterCircle, label: "Twitter Profile" },
    { href: "https://instagram.com", icon: AiFillInstagram, label: "Instagram Profile" },
  ];

  return (
    <footer className="bg-gradient-to-r from-polo-900 to-polo-950 text-polo-300 py-16 px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="text-polo-200 text-xl sm:text-lg font-semibold mb-4 relative">
            Quick Links
            <span className="absolute bottom-[-8px] left-0 w-10 h-0.5 bg-gradient-to-r from-polo-500 to-transparent"></span>
          </h3>
          <ul>
            {quickLinks.map(({ href, label }) => (
              <li key={href} className="mb-4">
                <a
                  href={href}
                  className="text-polo-300 hover:text-polo-200 transition-colors duration-300 ease-in"
                  aria-label={`Quick link to ${label}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-polo-200 text-xl sm:text-lg font-semibold mb-4 relative">
            Contact Info
            <span className="absolute bottom-[-8px] left-0 w-10 h-0.5 bg-gradient-to-r from-polo-500 to-transparent"></span>
          </h3>
          <ul>
            <li className="mb-4 flex items-center gap-4">
              <AiFillMail className="text-polo-500 text-lg" /> dagijossy18@gmail.com
            </li>
            <li className="mb-4 flex items-center gap-4">
              <AiFillPhone className="text-polo-500 text-lg" /> +251924406791
            </li>
            <li className="mb-4 flex items-center gap-4">
              <BsFillPinMapFill className="text-polo-500 text-lg" /> Addis Ababa, Ethiopia
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-polo-200 text-xl sm:text-lg font-semibold mb-4 relative">
            Let's Connect
            <span className="absolute bottom-[-8px] left-0 w-10 h-0.5 bg-gradient-to-r from-polo-500 to-transparent"></span>
          </h3>
          <div className="flex items-center gap-6 justify-center">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-polo-300 text-2xl transition-all duration-300 ease-in-out hover:text-polo-200 transform hover:scale-110 hover:rotate-12"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="border-t border-polo-800 pt-8 text-center text-sm">
        <p className="my-2">&copy; 2024 DagiPortfolio. All rights reserved.</p>
        <p className="my-2">
          Designed with
          <motion.span
            className="mx-1 inline-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <AiFillHeart color="red" />
          </motion.span>
          by Dagmawi Yoseph
        </p>
      </div>

      {/* Scroll to Top Button */}
      <div className="text-center mt-8">
        <motion.button
          className="p-2 bg-polo-500 text-white rounded-full hover:bg-polo-600 transition-all duration-300 ease-in-out"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FiChevronUp />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
