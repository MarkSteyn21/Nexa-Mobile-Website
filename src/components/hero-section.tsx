import {
  Ban,
  CheckCircle2,
  Smartphone,
  Wallet,
} from "lucide-react";
import { PhoneMockup } from "@/components/phone-mockup";
import { Button } from "@/components/ui/button";
import { HERO_FEATURES } from "@/lib/data";

const featureIcons = [Ban, CheckCircle2, Wallet, Smartphone];

export function HeroSection() {
  return (
    <section id="home" className="hero-glow relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full border border-purple-500/20" />
        <div className="absolute left-1/3 top-1/3 h-96 w-96 rounded-full border border-purple-500/10" />
        <div className="absolute right-1/4 top-1/2 h-48 w-48 rounded-full border border-purple-400/15" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Stay connected.{" "}
            <span className="gradient-text">Effortlessly.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            Choose what you need, when you need it. No contracts. Just prepaid
            convenience with full control from the HUGE App.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button showDownloadIcon>Download HUGE App</Button>
            <Button variant="outline-light" href="#packages">
              View Packages
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            {HERO_FEATURES.map((feature, index) => {
              const Icon = featureIcons[index] ?? CheckCircle2;
              return (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <Icon className="h-4 w-4 text-nexa-purple-light" />
                  {feature.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <PhoneMockup variant="hero" />
        </div>
      </div>
    </section>
  );
}
