import PageHero from "@/components/PageHero";
import React from "react";
import PortfolioSection from "./PortfolioSection";

export default function Portfolio() {
  return (
    <div>
      <PageHero title="Portfolio" backgroundImage="/temp/desk.png" description="Explore examples of my work, from Communications and Media Technology projects to personal content highlighting my storytelling, videography, and video-editing expertise." />
      <PortfolioSection />
    </div>
  );
}
