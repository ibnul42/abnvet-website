import Image from "next/image";
import Link from "next/link";
import ContactSection from "./contact/ContactSection";
import PortfolioSection from "./portfolio/PortfolioSection";
import AboutMeSection from "./about/AboutMeSection";
import GallerySection from "./gallery/GallerySection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <GallerySection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section
      className="w-full md:max-h-[700px] flex items-center justify-center bg-cover bg-bottom relative overflow-hidden"
      style={{ backgroundImage: "url(/assets/parachute-bg.png)" }}
    >
      {/* Overlay for lighter effect */}
      <div className="absolute inset-0 bg-white/40 z-0" />

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-10 md:py-20 relative z-10">
        {/* Left Side Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gary W. Rapoza
          </h1>
          <p className="text-sm text-gray-600 mb-5">
            Video Content Creator | Digital Strategist | Storyteller
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
            <Link
              href="#"
              className="bg-[#5C4033] hover:bg-[#402c22] text-white px-6 py-2 rounded-md transition"
            >
              Download CV
            </Link>
            <Link
              href="#"
              className="bg-[#657252] hover:bg-[#556241] px-6 py-2 rounded-md text-white hover:text-white transition"
            >
              Portfolio
            </Link>
          </div>
          <h2 className="font-semibold text-gray-800 mb-2">
            Ready for my next mission:
          </h2>
          <h3 className="text-xl text-[#5C4033] font-semibold mb-2">
            Explore. Inspire. Lead
          </h3>
          <p className="text-gray-700 max-w-xl leading-relaxed text-sm">
            I’m a retired U.S. Paratrooper with 23 years of service, and now a
            passionate content creator. After years of military service, I’ve
            dedicated myself to telling stories that connect people with the
            outdoors. I’m driven by a passion for exploration, conservation, and
            family-oriented adventures. Through CoyoteSix, I’m not just
            documenting my journey but sharing lessons about the land, nature,
            and raising my young sons with the same love for the outdoors.
          </p>
        </div>

        {/* Right Side Images */}
        <div className="flex-1 flex justify-center">
          <div className="relative md:absolute md:top-10 md:right-8 lg:right-20 w-60 h-80 rounded-xl overflow-hidden border-1 border-[#895000] bg-red-200">
            <Image
              src="/assets/creator1.png"
              alt="Content Creator"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-36 right-28 lg:right-40 w-56 h-60 rounded-xl overflow-hidden border-1 border-[#895000] hidden sm:block">
            <Image
              src="/assets/creator2.png"
              alt="Content Creator"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  { title: "Storytelling", icon: "storytelling.svg" },
  { title: "Video Production", icon: "video-production.svg" },
  { title: "Video Editing", icon: "video-editing.svg" },
  { title: "Drone Videography", icon: "drone-videography.svg" },
  { title: "Project Management", icon: "project-management.svg" },
  { title: "Team Leadership", icon: "team-leadership.svg" },
  { title: "Scriptwriting", icon: "scriptwriting.svg" },
  { title: "Audio Production", icon: "audio-production.svg" },
  { title: "Livestream & Broadcast Production", icon: "livestream.svg" },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#f2efec] py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#5d3e28] mb-10">
          Services Offered
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white hover:bg-[#657252]/5 text-center border border-[#657252] shadow-[5px_5px_10px_0-rgba(0,0,0,0.1)] rounded-lg p-4 flex flex-col items-center justify-center transition hover:shadow-md aspect-square"
            >
              <div className="relative w-8 h-8 mb-3">
                <Image
                  src={`/assets/icons/${service.icon}`}
                  alt={service.title}
                  fill
                />
              </div>
              <p className="text-sm font-medium text-center">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
