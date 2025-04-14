import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

const portfolioItems = [
  {
    thumbnail: "/temp/thumb1.png",
    title: "Portfolio Sizzle Reel",
    description:
      "This fast-paced, upbeat video showcases my storytelling, motion graphics, and video-editing expertise.",
  },
  {
    thumbnail: "/temp/thumb2.png",
    title: "Portfolio Sizzle Reel",
    description:
      "This fast-paced, upbeat video showcases my storytelling, motion graphics, and video-editing expertise.",
  },
  {
    thumbnail: "/temp/thumb3.png",
    title: "Portfolio Sizzle Reel",
    description:
      "This fast-paced, upbeat video showcases my storytelling, motion graphics, and video-editing expertise.",
  },
  {
    thumbnail: "/temp/thumb4.png",
    title: "Portfolio Sizzle Reel",
    description:
      "This fast-paced, upbeat video showcases my storytelling, motion graphics, and video-editing expertise.",
  },
];

const PortfolioSection = () => {
  return (
    <section className="w-full px-4 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#5C4033] mb-2">
          Portfolio
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Explore examples of my work, from Communications and Media Technology
          projects to personal content highlighting my storytelling,
          videography, and video-editing expertise.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[rgba(92,64,51,0.1)] rounded-xl shadow-md overflow-hidden border border-[#5C4033] transition hover:shadow-lg"
            >
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaYoutube className="text-red-600 text-5xl drop-shadow-md" />
                </div>
              </div>
              <div className="p-4 text-left">
                <h3 className="font-bold text-gray-800 text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="bg-[#657252] hover:bg-[#556241] text-white px-6 py-2 rounded-md text-sm cursor-pointer">
          View All
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;
