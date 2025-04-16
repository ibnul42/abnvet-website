import PageHero from "@/components/PageHero";
import React from "react";
import ContactSection from "./ContactSection";

export default function Contact() {
  return (
    <div>
      <PageHero title="Contact" backgroundImage="/temp/desk.png" />
      <ContactSection />
    </div>
  );
}
