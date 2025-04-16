import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

interface AboutMeSectionProps {
  backgroundImageUrl?: string;
}

const socialLinks = [
  { icon: FaFacebookSquare, link: "https://www.facebook.com" },
  { icon: FaInstagramSquare, link: "https://www.instagram.com" },
  { icon: FaTwitterSquare, link: "https://www.twitter.com" },
  { icon: FaSquareYoutube, link: "https://www.youtube.com" },
];

const AboutMeSection: React.FC<AboutMeSectionProps> = ({
  backgroundImageUrl,
}) => {
  return (
    <section
      className="w-full px-4 py-12 relative"
      style={
        backgroundImageUrl
          ? {
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Optional overlay if needed */}
      {backgroundImageUrl && (
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] z-0" />
      )}

      <div className="relative container mx-auto flex flex-col md:flex-row gap-10 items-center justify-between md:items-start z-10">
        {/* Image with Frames */}
        <div className="relative w-[250px] h-[350px] md:w-[300px] md:h-[450px]">
          <div className="absolute top-0 md:top-2 left-0 md:left-2 w-full h-full border-2 border-[#657252] z-30" />
          <div className="absolute top-2 md:top-4 left-2 md:left-4 w-full h-full border-2 border-[#657252] z-20" />
          <div className="absolute top-4 md:top-6 left-4 md:left-6 w-full h-full border-2 border-[#657252] z-10" />
          <div className="absolute top-7 bottom-0 md:-bottom-1.5 left-7 -right-1 z-40 overflow-hidden">
            <Image
              src="/temp/about-me.png"
              alt="About Me"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 max-w-6xl text-center md:text-left z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#5C4033] mb-4">
            About Me
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            I’m a retired U.S. Paratrooper with over two decades of service,
            including stints as a combat medic and criminal investigator for
            over 6 years. I received my Bachelor of Science in Criminal Justice
            and spent several more years—three of them in Vietnam—helping my
            fellow veterans with mental wellness, employment resources, and
            navigating the VA system.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            I’m a devoted family man, interested in many future-forward
            technologies and always chasing big goals. Whether that’s building a
            backyard workshop with my boys, good coffee, or having deep
            conversations—I bring my full self to whatever I’m doing.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            My passion for storytelling and the outdoors led me back to school,
            where I’m currently completing a Communications and Media Technology
            associate, soon transitioning to a Master of Arts program. Through
            Cognitive IM, I merge storytelling, videography, and media
            production with psychological frameworks designed to impact real
            behavior and culture change.
          </p>

          {/* Button + Icons */}
          <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
            <button className="bg-[#657252] hover:bg-[#556241] text-white text-sm px-6 py-2 rounded-md w-fit mx-auto md:mx-0 cursor-pointer">
              CONTACT ME
            </button>

            <div className="flex items-center gap-2 text-2xl">
              {socialLinks.map(({ icon: Icon, link }, index) => (
                <Link
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="text-[#657252] hover:text-[#556241] h-6 w-auto transition" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;