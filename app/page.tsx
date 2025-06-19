import Hero from "@/components/Hero";
import Proceso from "@/components/Proceso";
import Testimonials from "@/components/Testimonial";
import SEO from "@/components/SEO";
import Prices from "@/components/Prices";
import PetCrematoriumInfo from "@/components/PetCremationInfo";

export default function Home() {
  return (
    <>
      <SEO />
      <main>
        <Hero />
        <Proceso />
        <Prices />
        <PetCrematoriumInfo />
        <Testimonials />
      </main>
    </>
  );
}