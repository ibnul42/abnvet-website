"use client";

import React, { useRef, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import classnames from "classnames"; // optional: use your classNames util if available
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Sizzle Reel 1",
    description:
      "This fast-paced, upbeat video showcases my storytelling, motion graphics, and video-editing expertise.",
    image: "/temp/thumb1.png",
  },
  {
    title: "Portfolio Sizzle Reel 2",
    description:
      "This fast-paced, upbeat video showcases my storytelling, motion graphics, and video-editing expertise.",
    image: "/temp/thumb1.png",
  },
  {
    title: "Portfolio Sizzle Reel 3",
    description:
      "This fast-paced, upbeat video showcases my storytelling, motion graphics, and video-editing expertise.",
    image: "/temp/thumb1.png",
  },
  {
    title: "Portfolio Sizzle Reel 4",
    description:
      "This fast-paced, upbeat video showcases my storytelling, motion graphics, and video-editing expertise.",
    image: "/temp/thumb1.png",
  },
  {
    title: "Portfolio Sizzle Reel 5",
    description:
      "This fast-paced, upbeat video showcases my storytelling, motion graphics, and video-editing expertise.",
    image: "/temp/thumb1.png",
  },
];

const RecentProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  // const scrollAmount = 1;

  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const card = container.querySelector("div[data-card]") as HTMLDivElement;

    if (card) {
      const cardWidth = card.offsetWidth + 24; // card + gap
      const scrollBy = direction === "left" ? -cardWidth : cardWidth;

      container.scrollBy({
        left: scrollBy,
        behavior: "smooth",
      });

      setScrollIndex((prev) =>
        direction === "left"
          ? Math.max(prev - 1, 0)
          : Math.min(prev + 1, projects.length - 1)
      );
    }
  };

  return (
    <section className="w-full px-4 py-12 bg-white text-[#5C4033] relative">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          My Recent Project
        </h2>

        {/* Slider */}
        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                data-card
                className="bg-[rgba(92,64,51,0.1)] border border-[#5C4033]min-w-full sm:min-w-1/2 lg:min-w-1/3 max-w-[280px] snap-start flex-shrink-0 rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  <FaYoutube className="absolute top-2 left-2 text-red-600 text-3xl rounded-full p-1 shadow-md" />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="font-semibold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore All Button */}
        <div className="text-center mt-10">
          <button className="bg-[#657252] hover:bg-[#556241] text-white text-sm px-6 py-2 rounded-md cursor-pointer">
            Explore All
          </button>
        </div>
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={() => handleScroll("left")}
        className={classnames(
          "absolute top-1/2 left-2 transform -translate-y-1/2 flex bg-[#5C4033]/60 text-white w-10 h-10 rounded-full shadow items-center justify-center hover:bg-[#4e362b] cursor-pointer",
          scrollIndex === 0 && "opacity-50 pointer-events-none"
        )}
      >
        &lt;
      </button>

      <button
        onClick={() => handleScroll("right")}
        className={classnames(
          "absolute top-1/2 right-2 transform -translate-y-1/2 flex bg-[#5C4033]/60 text-white w-10 h-10 rounded-full shadow items-center justify-center hover:bg-[#4e362b] cursor-pointer",
          scrollIndex >= projects.length - 1 && "opacity-50 pointer-events-none"
        )}
      >
        &gt;
      </button>
    </section>
  );
};

export default RecentProjectsSection;
