import Image from "next/image";
import React from "react";

interface Accomplishment {
  icon: string;
  title: string;
  description: string;
}

const accomplishments: Accomplishment[] = [
  {
    icon: "police-badge.svg",
    title:
      "Commanded a Military Police (MP) unit in Afghanistan, leading criminal and accident investigations",
    description:
      "Successfully managed and led complex investigations, enhancing security protocols.",
  },
  {
    icon: "training.svg",
    title:
      "Delivered advanced training programs to over 3,000 personnel, including high-ranking officials",
    description:
      "Developed and implemented training modules that significantly improved operational readiness.",
  },
  {
    icon: "shield.svg",
    title:
      "Strategically planned and executed over 350 high-risk security missions in hostile environments",
    description:
      "Ensured mission success with zero casualties, demonstrating exceptional crisis management and operational planning skills.",
  },
  {
    icon: "medal.svg",
    title: "Recognized with 2 Bronze Star medals",
    description:
      "Praised mission success with zero casualties, demonstrating exceptional crisis management and operational planning skills.",
  },
];

const AccomplishmentsSection: React.FC = () => {
  return (
    <section className="bg-[#f2efec] py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#5d3e28] mb-10">
          Key Accomplishments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
          {accomplishments.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#657252] rounded-lg shadow pt-7 px-4 pb-4 flex gap-4 items-start relative"
            >
              <div className="absolute -top-6 left-0 w-full flex justify-center">
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-[#657252]">
                  <div className="w-7 h-7 relative shrink-0">
                    <Image src={`/assets/icons/${item.icon}`} alt="icon" fill />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1 text-[#5C4033]">
                  {item.title}
                </h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccomplishmentsSection;
