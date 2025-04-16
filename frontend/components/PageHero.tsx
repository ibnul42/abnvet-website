import React from "react";
import Image from "next/image";

type PageHeroProps = {
  title: string;
  backgroundImage: string;
  description?: string;
};

const PageHero: React.FC<PageHeroProps> = ({
  title,
  backgroundImage,
  description,
}) => {
  return (
    <section className="relative w-full h-auto py-12 sm:py-16 md:py-20 flex items-center justify-center text-[#5C4033]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Contact background"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xs" />
      </div>

      {/* Title Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
        <div className="w-20 h-1 bg-[#5C4033] mt-2 mx-auto rounded-full" />

        {description && (
          <p className="mt-4 text-sm sm:text-base ">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
