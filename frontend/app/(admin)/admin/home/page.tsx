import React from "react";
import HeroSection from "./HeroSection";

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

export default async function page() {
  const hero = await getHero();
  return (
    <div className="">
      <HeroSection hero={hero} />
    </div>
  );
}
