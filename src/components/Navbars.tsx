import React from "react";
import {
  Navbar,
  NavBrand,
  NavItems,
  NavLeft,
  NavMobile,
  NavMobileBottom,
  NavMobileBrand,
  NavMobileItems,
  NavRight,
} from "../common/Navbar";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/dagmawi-yoseph-4b4aa6296",
    icon: AiFillLinkedin,
    label: "LinkedIn Profile",
  },
  {
    href: "https://github.com/dagijosi",
    icon: AiFillGithub,
    label: "GitHub Profile",
  },
];
const Navbars: React.FC = () => {
  const renderNavItems = (className: string) => (
    <NavItems className={className}>
      {navItems.map((item) => (
        <li key={item.label} className="relative group">
          <a
            href={item.href}
            className="relative"
            aria-label={`${item.label} Section`}
          >
            {item.label}
            <span className="bg-gradient-to-r from-polo-400 to-polo-500 absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all group-hover:w-full"></span>
          </a>
        </li>
      ))}
    </NavItems>
  );

  return (
    <Navbar
      className="sticky top-0 z-50 bg-gradient-to-br from-polo-950 to-polo-900"
      aria-label="Main Navigation"
    >
      <NavLeft className="ml-2 md:ml-10">
        <NavBrand className="bg-gradient-to-r from-polo-200 to-polo-500 bg-clip-text text-transparent text-[1.5rem] md:text-[1.75rem] font-bold">
          <a href="/" aria-label="Go to homepage">
            DagiPortfolio
          </a>
        </NavBrand>
      </NavLeft>

      {renderNavItems("text-polo-200 gap-10 font-medium ")}

      <NavRight className="pr-16">
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
          <a href="mailto:dagijossy18@gmail.com">
            <button className="bg-gradient-to-r from-polo-400 to-polo-700 text-polo-100 px-4 py-2 rounded-md">
              LetConnect
            </button>
          </a>
        </div>
      </NavRight>

      <NavMobile className="bg-gradient-to-br from-polo-950 to-polo-900">
        <NavMobileBrand className="bg-gradient-to-r from-polo-200 to-polo-500 bg-clip-text text-transparent text-[1.75rem] font-bold">
          <a href="/" aria-label="Go to homepage">
            DagiPortfolio
          </a>
        </NavMobileBrand>
        <NavMobileItems className="text-polo-200 font-medium text-lg">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative group flex items-center px-4 py-3 border-l border-gray-200 rounded group hover:border-l hover:border-polo-900 "
            >
              <a
                href={item.href}
                className="relative"
                aria-label={`${item.label} Section`}
              >
                {item.label}
                <span className="bg-gradient-to-r from-polo-400 to-polo-500 absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </NavMobileItems>
        <NavMobileBottom className="bg-polo-900 border-none">
          <div className="flex items-center gap-6 justify-between">
            <a href="mailto:dagijossy18@gmail.com">
              <button className="bg-gradient-to-r from-polo-400 to-polo-700 text-polo-100 px-4 py-2 rounded-md">
                LetConnect
              </button>
            </a>

            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-polo-300 text-3xl transition-all duration-300 ease-in-out hover:text-polo-200 transform hover:scale-110 hover:rotate-12"
              >
                <Icon />
              </a>
            ))}
          </div>
        </NavMobileBottom>
      </NavMobile>
    </Navbar>
  );
};

export default Navbars;
