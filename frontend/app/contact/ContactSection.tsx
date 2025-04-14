import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

const socialLinks = [
  { icon: FaFacebookSquare, link: "https://www.facebook.com" },
  { icon: FaInstagramSquare, link: "https://www.instagram.com" },
  { icon: FaTwitterSquare, link: "https://www.twitter.com" },
  { icon: FaSquareYoutube, link: "https://www.youtube.com" },
];

const ContactSection = () => {
  return (
    <section className="w-full py-12 px-4 md:px-10">
      <div className="container mx-auto border border-[#657252] rounded-lg shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] p-6 md:p-10 flex flex-col md:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-xl lg:text-2xl font-semibold text-[#5C4033] mb-2">
            Get in touch...
          </h2>
          <p className="text-sm text-gray-600 mb-4 md:mb-8">
            Interested in collaborating, partnering, or exploring opportunities
            together? Reach out – I look forward to connecting with you.
          </p>

          <div className="text-gray-700 mb-2 flex items-center gap-2">
            <FaPhoneAlt className="text-[#657252]" />
            <span>702-640-3200</span>
          </div>
          <div className="text-gray-700 mb-4 flex items-center gap-2">
            <FaEnvelope className="text-[#657252]" />
            <span>Advocate@gyozaeik.com</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-2xl">
            {socialLinks.map(({ icon: Icon, link }, index) => (
              <Link
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-[#657252] hover:text-[#556241] h-5 w-auto transition" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Contact Form */}
        <form className="flex-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-[#657252] rounded px-4 py-2 w-full focus-visible:outline-0"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border border-[#657252] rounded px-4 py-2 w-full focus-visible:outline-0"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-[#657252] rounded px-4 py-2 w-full md:col-span-2 focus-visible:outline-0"
            />
          </div>
          <textarea
            rows={5}
            placeholder="Message"
            className="border border-[#657252] rounded px-4 py-2 w-full focus-visible:outline-0"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#657252] hover:bg-[#556241] text-white font-medium py-2 rounded-md cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
