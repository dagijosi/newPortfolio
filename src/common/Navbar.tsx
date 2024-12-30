/**
 * A comprehensive and customizable navigation bar component with both desktop and mobile versions.
 * This file contains all the necessary components to build a responsive navigation system.
 */

import { useState } from "react";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { cn } from "./cn";
import Button from "./Button";
import Drawer from "./Drawer";

/** Props for the main Navbar component */
interface NavbarProps {
  textColor?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Main Navbar component that serves as the container for navigation elements
 * Provides customizable styling through props and className
 */
export const Navbar: React.FC<NavbarProps> = ({
  textColor = "text-black",
  background = "bg-white",
  className = "",
  children,
}) => {
  return (
    <nav
      className={cn(
        "p-4 flex justify-between items-center shadow-md space-x-4",
        background,
        textColor,
        className
      )}
      aria-label="Main navigation"
    >
      {children}
    </nav>
  );
};

/** Props for the NavLeft component */
interface NavLeftProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * NavLeft component - Container for left-aligned navigation items
 * Typically used for logo and primary navigation items
 */
export const NavLeft: React.FC<NavLeftProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={cn("flex items-center space-x-4 flex-1", className)}>
      {children}
    </div>
  );
};

/** Props for the NavBrand component */
interface NavBrandProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * NavBrand component - Used for displaying brand logo or name
 * Typically placed within NavLeft component
 */
export const NavBrand: React.FC<NavBrandProps> = ({
  className = "",
  children,
}) => {
  return <span className={cn("font-bold text-lg", className)}>{children}</span>;
};

/** Props for the NavItems container */
interface NavItemsProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * NavItems component - Container for navigation links
 * Groups navigation items together with consistent spacing
 */
export const NavItems: React.FC<NavItemsProps> = ({
  className = "",
  children,
}) => {
  return (
    <ul
      className={cn(
        "hidden md:flex space-x-4 justify-center flex-1",
        className
      )}
    >
      {children}
    </ul>
  );
};

/** Props for individual navigation items */
interface NavItemProps {
  href?: string; // URL for the navigation link
  target?: string; // Target attribute for the link (_blank, _self, etc.)
  onClick?: () => void; // Optional click handler
  className?: string;
  children?: React.ReactNode;
}

/**
 * NavItem component - Individual navigation link
 * Can be used as a link or button with custom click handler
 */
export const NavItem: React.FC<NavItemProps> = ({
  href,
  target = "_self",
  onClick,
  className = "",
  children,
}) => {
  const location = useLocation(); // Get current URL
  const isActive = location.pathname === href; // Check if the current path matches the href

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(); // Trigger custom onClick if provided
  };

  return (
    <li
      className={cn(isActive ? "text-blue-500 font-semibold" : "", className)}
    >
      <a href={href} target={target} onClick={handleClick}>
        {children}
      </a>
    </li>
  );
};

/** Props for the NavRight component */
interface NavRightProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * NavRight component - Container for right-aligned navigation items
 * Typically used for secondary navigation items, user menu, etc.
 */
export const NavRight: React.FC<NavRightProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={cn(
        "hidden md:flex items-center justify-end flex-1",
        className
      )}
    >
      {children}
    </div>
  );
};

/** Props for the mobile navigation component */
interface NavMobileProps {
  className?: string;
  children?: React.ReactNode;
  textColor?: string;
  background?: string;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}

/**
 * NavMobile component - Responsive mobile navigation
 * Includes a hamburger menu and drawer for mobile devices
 */
export const NavMobile: React.FC<NavMobileProps> = ({
  className = "",
  children,
  textColor = "text-black",
  background = "bg-white",
  openIcon,
  closeIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <div>
      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <Button
          className="bg-transparent text-gray-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {openIcon && closeIcon ? (
            <div className="w-6 h-6">
              {isOpen ? closeIcon : openIcon}
            </div>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X (close icon)
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger (open icon)
                }
              />
            </svg>
          )}
        </Button>
      </div>
      <Drawer
        isOpen={isOpen}
        onClose={toggleMenu} // Ensure toggleMenu is invoked properly
        closeIcon={<IoIosCloseCircleOutline className="text-3xl ml-4" />}
        className={cn("px-2", background, textColor, className)}
      >
        {children}
      </Drawer>
    </div>
  );
};

/** Props for mobile navigation brand section */
interface NavMobileBrandProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * NavMobileBrand component - Brand display for mobile navigation
 * Typically contains logo or site name
 */
export const NavMobileBrand: React.FC<NavMobileBrandProps> = ({
  className = "",
  children,
}) => {
  return <span className={cn("font-bold text-lg", className)}>{children}</span>;
};

/** Props for mobile navigation items container */
interface NavMobileItemsProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * NavMobileItems component - Container for mobile navigation links
 * Displayed within the mobile drawer
 */
export const NavMobileItems: React.FC<NavMobileItemsProps> = ({
  className = "",
  children,
}) => {
  return (
    <ul
      className={cn(
        "flex flex-col space-y-4 py-10 w-full overflow-y-auto md:scrollbar-hide",
        className
      )}
    >
      {children}
    </ul>
  );
};

/** Props for individual mobile navigation items */
interface NavMobileItemProps {
  href?: string; // URL for the navigation link
  target?: string; // Target attribute for the link
  onClick?: () => void; // Optional click handler
  className?: string;
  children?: React.ReactNode;
}

/**
 * NavMobileItem component - Individual mobile navigation link
 * Styled specifically for mobile view
 */
export const NavMobileItem: React.FC<NavMobileItemProps> = ({
  href,
  target = "_self",
  onClick,
  className = "",
  children,
}) => {
  const location = useLocation(); // Get current URL
  const isActive = location.pathname === href; // Check if the current path matches the href

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(); // Trigger custom onClick if provided
  };

  return (
    <li
      className={cn(
        "flex items-center px-4 py-3 border-l border-gray-200 rounded group hover:border-l hover:border-purple-900 hover:text-purple-700",
        isActive ? "text-blue-500 font-semibold" : "",
        className
      )}
    >
      <a href={href} target={target} onClick={handleClick}>
        {children}
      </a>
    </li>
  );
};

/** Props for mobile navigation bottom section */
interface NavMobileBottomProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * NavMobileBottom component - Bottom section of mobile navigation
 * Useful for additional actions or content in mobile view
 */
export const NavMobileBottom: React.FC<NavMobileBottomProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 p-4 shadow-lg pb-safe",
        "mb-[env(safe-area-inset-bottom,15px)]",
        className
      )}
      style={{
        paddingBottom: "max(1rem, env(safe-area-inset-bottom, 15px))",
      }}
    >
      {children}
    </div>
  );
};
