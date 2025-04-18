import PageHero from "@/components/PageHero";
import React from "react";
import ServiceSection from "./ServiceSection";
import AccomplishmentsSection from "./AccomplishmentsSection";
import ProfessionalExperience from "./ProfessionalExperience";
import EducationAndSkills from "./EducationAndSkills";

export default function Resume() {
  return (
    <div>
      <PageHero title="Resume" backgroundImage="/temp/desk.png" description="Creative video producer with a background in military leadership, specializing in drone cinematography, digital media strategy, and immersive storytelling. Experienced in crafting multimedia content that engages audiences through compelling narratives. Strong expertise in risk management, investigative analysis, and project leadership gained from over 20 years in military service. Adept at utilizing Adobe Creative Suite, OBS Studio, and Content Management Systems." />
      <ServiceSection sectionTitle="Core Competencies" />
      <AccomplishmentsSection />
      <ProfessionalExperience />
      <EducationAndSkills />
    </div>
  );
}
