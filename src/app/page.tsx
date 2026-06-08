import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import Services from "@/components/sections/Services";
import QuoteBand from "@/components/sections/QuoteBand";
import CTABand from "@/components/sections/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <QuoteBand />
      <CTABand />
    </>
  );
}
