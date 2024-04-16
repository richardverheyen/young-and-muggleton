import Hero from "@/app/Hero";
import Badges from "@/app/Badges";
import WhoWeAre from "@/app/WhoWeAre";
import WhatWeCanHelpWith from "@/app/WhatWeCanHelpWith";
import WhyContactUs from "@/app/WhyContactUs";
import AreasWeService from "@/app/AreasWeService";
import Contact from "@/app/Contact";
import CallUs from "./CallUs";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Badges />
      <WhoWeAre />
      <WhatWeCanHelpWith />
      <WhyContactUs />
      <AreasWeService />
      <Contact />
      <CallUs />
      <Footer />
    </main>
  );
}
