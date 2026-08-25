import Hero from "@/components/Hero";
import About from "@/components/About";
import Legacy from "@/components/Legacy";
import PhotoBand from "@/components/PhotoBand";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import AndMore from "@/components/AndMore";
import Commitment from "@/components/Commitment";
import Pillars from "@/components/Pillars";
import Region from "@/components/Region";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Legacy />
      <PhotoBand />
      <Services />
      <Portfolio />
      <AndMore />
      <Commitment />
      <Pillars />
      <Region />
      <Faq />
      <Newsletter />
    </main>
  );
}
