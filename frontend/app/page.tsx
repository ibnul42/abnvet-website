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

async function getHero() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/hero`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data?.data;
}

interface Hero {
  _id: string;
  title: string;
  positions: string;
  content: string;
  background: string;
  profile1: string;
  profile2: string;
}

async function HeroSection() {
  const hero: Hero = await getHero();
  return (
    <section
      className="w-full md:max-h-[700px] flex items-center justify-center bg-cover bg-bottom relative overflow-hidden"
      style={{ backgroundImage: `url(${hero?.background})` }}
    >
      {/* Overlay for lighter effect */}
      <div className="absolute inset-0 bg-white/40 z-0" />

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-10 md:py-20 relative z-10">
        {/* Left Side Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {hero?.title}
          </h1>
          <p className="text-sm text-gray-600 mb-5">{hero?.positions}</p>
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
            {hero?.content}
          </p>
        </div>

        {/* Right Side Images */}
        <div className="flex-1 flex justify-center">
          <div className="relative md:absolute md:top-10 md:right-8 lg:right-20 w-60 h-80 rounded-xl overflow-hidden border-1 border-[#895000] bg-red-200">
            <Image
              src={hero?.profile1}
              alt="Content Creator"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-36 right-28 lg:right-40 w-56 h-60 rounded-xl overflow-hidden border-1 border-[#895000] hidden sm:block">
            <Image
              src={hero?.profile2}
              alt="Content Creator"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
