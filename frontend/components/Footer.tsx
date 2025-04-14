import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <div className="text-white">
      <div className="bg-[#7E7E7E]">
        <div className="container mx-auto px-3 py-5 grid grid-cols-12 space-y-3 gap-3">
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex justify-center items-center">
            <Logo
              src="/assets/logo.png"
              color="text-white"
              className="mr-2 w-20 md:w-24 h-auto"
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-2 md:px-5">
            <p className="mb-2 text-lg font-medium uppercase">contact</p>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-white transition" />
              <span>Las Vegas, Nevada</span>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-white transition" />
              <span>(702) 555-1111 </span>
            </div>
            <div className="flex items-center gap-2">
              <TbMailFilled className="text-white transition" />
              <span>info@domain.com</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-2 md:px-5">
            <p className="mb-2 text-lg font-medium uppercase">sitemap</p>
            <Link href="/about" className="flex items-center gap-2 w-fit">
              <span className="text-lg">{`>`}</span>
              <span className="capitalize">about</span>
            </Link>
            <Link href="/service" className="flex items-center gap-2 w-fit">
              <span className="text-lg">{`>`}</span>
              <span className="capitalize">service</span>
            </Link>
            <Link href="/gallery" className="flex items-center gap-2 w-fit">
              <span className="text-lg">{`>`}</span>
              <span className="capitalize">gallery</span>
            </Link>
            <Link href="/project" className="flex items-center gap-2 w-fit">
              <span className="text-lg">{`>`}</span>
              <span className="capitalize">project</span>
            </Link>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-2 md:px-5">
            <p className="mb-2 text-lg font-medium uppercase">privacy policy</p>
            <Link href="/" className="flex items-center gap-2 w-fit">
              <span className="text-lg">{`>`}</span>
              <span className="capitalize">terms & conditions</span>
            </Link>
            <Link href="/" className="flex items-center gap-2 w-fit">
              <span className="text-lg">{`>`}</span>
              <span className="capitalize">privacy policy</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <p className="container mx-auto text-center text-sm px-3 py-3">
          &copy; 2025 CoyoteSix | All Rights Reserved
        </p>
      </div>
    </div>
  );
}
