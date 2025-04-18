// components/EducationAndSkills.tsx
import React from "react";
import { FaStar } from "react-icons/fa";

const education = [
  {
    school: "Academy of Art Univ, San Francisco, CA, BA",
    description: "in Communication and Media Technology, Expected May 2025",
  },
  {
    school: "University of Texas at Dallas, Richardson, TX, BS",
    description: "in Criminal Justice, August 2001",
  },
];

const certifications = [
  "FAA Part 107 Drone Pilot Certification",
  "Full Stack Development Certificate – San Diego Global Knowledge University",
];

const technicalSkills = [
  "Adobe Creative Suite (Premiere Pro, After Effects, Photoshop, Illustrator)",
  "OBS Studio | Content Management Systems (CMS)",
  "Visual Studio Code | Video & Audio Editing Tools",
  "Drone Cinematography & Post-Production Techniques",
];

const EducationAndSkills: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#f2efec]">
      <div className="container mx-auto space-y-8">
        {/* Education */}
        <div className="bg-white rounded-lg shadow-[5px_5px_10px_rgba(0,0,0,0.15)] p-6 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#5C4033] mb-4">
            EDUCATION
          </h2>
          {education.map((item, index) => (
            <div key={index} className="mb-4 flex flex-col items-center">
              <FaStar className="text-[#657252] mb-2" />
              <p className="font-semibold text-[#5C4033] flex items-center justify-center gap-2">
                {item.school}
              </p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications and Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certifications */}
          <div className="bg-white rounded-lg shadow-[5px_5px_10px_rgba(0,0,0,0.15)] p-6">
            <h3 className="text-lg font-semibold text-[#657252] mb-4">
              Training & Certifications
            </h3>
            <ul className="space-y-2 text-sm">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaStar className="shrink-0 text-[#657252] mt-1" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="bg-white rounded-lg shadow-[5px_5px_10px_rgba(0,0,0,0.15)] p-6">
            <h3 className="text-lg font-semibold text-[#657252] mb-4">
              Technical Skills
            </h3>
            <ul className="space-y-2 text-sm">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaStar className="shrink-0 text-[#657252] mt-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndSkills;
