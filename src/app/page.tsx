import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import Services from "@/components/Services";
import GalleryPreview from "@/components/GalleryPreview";
import Testimonials from "@/components/Testimonials";
import JournalPreview from "@/components/JournalPreview";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Legacy />
      <Services />
      <GalleryPreview />
      <Testimonials />
      <JournalPreview />
      <Newsletter />
    </main>
  );
}
