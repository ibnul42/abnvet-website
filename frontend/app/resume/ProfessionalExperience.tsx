import React from 'react';
import { FaCheckSquare, FaStar } from 'react-icons/fa';

export default function ProfessionalExperience() {
  const freelanceContentCreatorAchievements = [
    'Designed and executed outdoor adventure video series, highlighting unique landscapes and activities.',
    'Integrated drone videography and ground footage to produce dynamic, engaging content.',
    'Collaborated with local businesses and community groups to showcase featured locations.',
    'Gained hands-on experience in video editing, post-production, and content strategy.',
  ];

  const armyRoles = [
    'Safety Officer',
    'First Sergeant',
    'Master Recruiter',
    'Operations Manager',
    'criminal investigator',
    'project manager',
    'accident reconstructionist',
    'platoon sergeant',
    'recruitment center manager'
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#5d3e28] mb-10">
          Professional Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Freelance Content Creator */}
          <div className="bg-white border border-[#657252] rounded-lg p-6 shadow">
            <h3 className="font-semibold text-[#657252] mb-4">
              Freelance Content Creator |<br />
              <span className="">Henderson, NV. 2020 – Present</span>
            </h3>
            <ul className="text-sm space-y-2">
              {freelanceContentCreatorAchievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FaStar className="shrink-0 text-[#5C4033] mt-1" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* US Army */}
          <div className="bg-white border border-[#657252] rounded-lg p-6 shadow">
            <h3 className="font-semibold text-[#657252] mb-2">
              U.S Army | Various Locations
            </h3>
            <p className="font-semibold text-[#657252] mb-4">(US and International) 1993 – 2018</p>
            <p className="font-semibold text-[#505050] mb-2">Positions Held</p>
            <ul className="text-sm grid grid-cols-1 lg:grid-cols-2 gap-2">
              {armyRoles.map((role, idx) => (
                <li key={idx} className="flex items-start gap-2 capitalize">
                  <FaCheckSquare className="shrink-0 text-[#5d3e28] mt-1" />
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
