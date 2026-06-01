import { BestRatesSection } from "@/components/best-rates-section";
import { BundlesSection } from "@/components/bundles-section";
import { ByoPlanSection } from "@/components/byo-plan-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { PrepaidPlansSection } from "@/components/prepaid-plans-section";
import { SmartAppSection } from "@/components/smart-app-section";
import { WhyNexaSection } from "@/components/why-nexa-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyNexaSection />
        <SmartAppSection />
        <BestRatesSection />
        <BundlesSection />
        <PrepaidPlansSection />
        <ByoPlanSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </>
  );
}
