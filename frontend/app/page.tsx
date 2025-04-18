import Image from "next/image";
import Link from "next/link";
import ContactSection from "./contact/ContactSection";
import PortfolioSection from "./portfolio/PortfolioSection";
import AboutMeSection from "./about/AboutMeSection";
import GallerySection from "./gallery/GallerySection";
import ServiceSection from "./resume/ServiceSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutMeSection />
      <ServiceSection
        sectionTitle="Services Offered"
        backgroundColor="#f2efec"
      />
      <GallerySection showIntro={true} />
      <PortfolioSection showIntro={true} />
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
