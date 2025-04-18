import Image from "next/image";
import React from "react";

interface Service {
  title: string;
  icon: string;
}

interface ServiceSectionProps {
  sectionTitle?: string;
  backgroundColor?: string;
}

const services: Service[] = [
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

const ServiceSection: React.FC<ServiceSectionProps> = ({
  sectionTitle = "",
  backgroundColor = "",
}) => {
  return (
    <section className="w-full py-12 px-4" style={{ backgroundColor }}>
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#5d3e28] mb-10">
          {sectionTitle}
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

export default ServiceSection;
