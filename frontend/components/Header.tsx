"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import Logo from "./Logo";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const menuItems = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "resume", link: "/resume" },
  { title: "portfolio", link: "/portfolio" },
  { title: "gallery", link: "/gallery" },
  { title: "contact", link: "/contact" },
];

const socialLinks = [
  { icon: FaFacebookSquare, link: "https://www.facebook.com" },
  { icon: FaInstagramSquare, link: "https://www.instagram.com" },
  { icon: FaTwitterSquare, link: "https://www.twitter.com" },
  { icon: FaSquareYoutube, link: "https://www.youtube.com" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-3 py-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 capitalize">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className={`transition hover:text-[#657252] uppercase ${
                pathname === item.link
                  ? "text-[#657252] font-bold"
                  : "text-black font-semibold"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 text-2xl">
          {socialLinks.map(({ icon: Icon, link }, index) => (
            <Link
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="text-[#5C4033] hover:text-[#402c22] h-5 w-auto transition" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl text-black cursor-pointer"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} pathname={pathname} />
    </header>
  );
};

export default Header;

interface MobileMenuFullProps extends MobileMenuProps {
  pathname: string;
}

const MobileMenu = ({ isOpen, setIsOpen, pathname }: MobileMenuFullProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-white px-3 z-50 flex flex-col items-center shadow-lg 
          transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
    >
      <div className="w-full flex justify-between items-center  py-4 relative">
        <Logo />
        <button
          onClick={() => setIsOpen(false)}
          className="text-3xl cursor-pointer"
        >
          <FiX className="text-black" />
        </button>
      </div>

      {/* Mobile Nav */}
      <nav className="w-full pt-5 flex flex-col gap-6 text-xl font-medium capitalize">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className={`${
              pathname === item.link
                ? "text-[#657252] font-semibold"
                : "text-black"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="pt-5 flex items-center gap-2 text-2xl">
        {socialLinks.map(({ icon: Icon, link }, index) => (
          <Link
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="text-[#5C4033] hover:text-[#402c22] h-5 w-auto transition" />
          </Link>
        ))}
      </div>
    </div>
  );
};
