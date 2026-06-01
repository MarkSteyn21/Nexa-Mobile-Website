import {
  Download,
  ListChecks,
  Settings,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HugeLogo } from "@/components/logo";
import { HOW_IT_WORKS } from "@/lib/data";

const stepIcons = [Download, Smartphone, ListChecks, Settings];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-nexa-navy sm:text-4xl">
          How it works
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="relative">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 border-t-2 border-dashed border-purple-200 lg:block lg:mx-12" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {HOW_IT_WORKS.map((step, index) => {
                const Icon = stepIcons[index] ?? Download;
                return (
                  <div key={step.step} className="relative text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50">
                      <Icon className="h-7 w-7 text-nexa-purple" />
                    </div>
                    <div className="mx-auto mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-nexa-purple text-sm font-bold text-white">
                      {step.step}
                    </div>
                    <h3 className="mt-3 font-bold text-nexa-navy">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-purple-50 to-white shadow-sm">
            <div className="bg-gradient-to-r from-nexa-purple to-purple-600 px-6 py-4">
              <p className="font-bold text-white">Think Nexa.</p>
              <p className="text-sm text-white/80">Get connected now.</p>
            </div>
            <div className="p-6">
              <div className="flex aspect-video items-center justify-center rounded-xl bg-white px-6">
                <HugeLogo />
              </div>
              <p className="mt-4 text-center text-2xl font-bold text-nexa-purple">
                *135#
              </p>
              <p className="mt-1 text-center text-sm text-gray-600">
                from your HUGE SIM
              </p>
              <div className="mt-6">
                <Button className="w-full" showDownloadIcon>
                  Download HUGE App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
