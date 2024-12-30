import React from "react";
import {
  Navbar,
  NavBrand,
  NavItems,
  NavLeft,
  NavMobile,
  NavMobileBrand,
  NavMobileItems,
} from "../common/Navbar";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
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

      {renderNavItems("text-polo-200 gap-10 font-medium text-lg")}

      <NavMobile className="bg-gradient-to-br from-polo-500 to-polo-900">
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
      </NavMobile>
    </Navbar>
  );
};

export default Navbars;
