"use client";
import Image from "next/image";
import React, { useState } from "react";

interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

const categories: string[] = [
  "All",
  "Photography",
  "Video Projects",
  "Outdoor Adventures",
  "Client Work",
  "Personal Projects",
  "Behind the Scenes",
  "Branding",
];

const images: GalleryItem[] = [
  {
    src: "/temp/forest.png",
    title: "Quick Description This gallery highlights images and moments",
    category: "Photography",
  },
  {
    src: "/temp/sunset.png",
    title: "Quick Description This gallery highlights images and moments",
    category: "Photography",
  },
  {
    src: "/temp/lens.png",
    title: "Quick Description This gallery highlights images and moments",
    category: "Video Projects",
  },
  {
    src: "/temp/squirrel.png",
    title: "Quick Description This gallery highlights images and moments",
    category: "Client Work",
  },
  {
    src: "/temp/fox.png",
    title: "Quick Description This gallery highlights images and moments",
    category: "Outdoor Adventures",
  },
  {
    src: "/temp/coffee.png",
    title: "Quick Description This gallery highlights images and moments",
    category: "Personal Projects",
  },
  {
    src: "/temp/desk.png",
    title: "Quick Description This gallery highlights images and moments",
    category: "Branding",
  },
  {
    src: "/temp/acorn.png",
    title: "Quick Description This gallery highlights images and moments",
    category: "Photography",
  },
];

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#5d3e28] mb-2">
          Gallery
        </h2>
        <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
          This gallery highlights images and moments captured during my
          adventures, projects, and family explorations
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-full border cursor-pointer transition ${
                activeCategory === cat
                  ? "bg-[#5d3e28] text-white"
                  : "bg-white text-[#5d3e28] border-[#ccc] hover:bg-[#5d3e28]/70 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="bg-white rounded shadow overflow-hidden"
            >
              <Image
                width={500}
                height={500}
                src={img.src}
                alt={img.title}
                className="w-full h-48 object-cover"
              />
              <p className="p-3 text-sm text-gray-800">{img.title}</p>
            </div>
          ))}
          {filteredImages.length < 1 && (
            <div className="bg-[#5d3e28]/10 w-full h-48 flex justify-center items-center col-span-full">
              <p>Coming soon...</p>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <button className="px-6 py-2 bg-[#657252] hover:bg-[#556241] text-white rounded cursor-pointer">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
