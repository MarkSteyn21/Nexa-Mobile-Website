"use client";

import { Plus, Smartphone } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { BYO_OPTIONS } from "@/lib/data";

type Category = "data" | "voice" | "sms";

const categories: { key: Category; label: string }[] = [
  { key: "data", label: "Choose Data" },
  { key: "voice", label: "Choose Voice" },
  { key: "sms", label: "Choose SMS" },
];

export function ByoPlanSection() {
  const [selections, setSelections] = useState<Record<Category, number>>({
    data: 1,
    voice: 1,
    sms: 1,
  });

  const totalPrice = useMemo(() => {
    return categories.reduce((sum, { key }) => {
      const option = BYO_OPTIONS[key][selections[key]];
      return sum + (option?.price ?? 0);
    }, 0);
  }, [selections]);

  return (
    <section id="byo" className="bg-nexa-navy py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Build your own plan
            </h2>
            <p className="mt-3 text-lg text-white/70">
              Mix and match data, voice, and SMS. Pay only for what you need.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
              {categories.map(({ key, label }, index) => (
                <div key={key} className="flex items-end gap-3">
                  {index > 0 && (
                    <Plus className="mb-3 hidden h-5 w-5 text-purple-400 sm:block" />
                  )}
                  <div className="min-w-[140px] flex-1">
                    <label
                      htmlFor={`byo-${key}`}
                      className="mb-2 block text-sm font-medium text-white/80"
                    >
                      {label}
                    </label>
                    <select
                      id={`byo-${key}`}
                      value={selections[key]}
                      onChange={(e) =>
                        setSelections((prev) => ({
                          ...prev,
                          [key]: Number(e.target.value),
                        }))
                      }
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm focus:border-nexa-purple-light focus:outline-none focus:ring-2 focus:ring-nexa-purple/50"
                    >
                      {BYO_OPTIONS[key].map((option, optionIndex) => (
                        <option
                          key={option.label}
                          value={optionIndex}
                          className="text-nexa-navy"
                        >
                          {option.label} — R{option.price}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-block rounded-2xl border border-white/20 bg-white/10 px-8 py-5 backdrop-blur-sm">
              <p className="text-sm font-medium text-white/70">Your Price</p>
              <p className="text-4xl font-bold text-white">R{totalPrice}</p>
              <p className="mt-1 text-sm text-white/50">per month</p>
            </div>

            <div className="mt-8">
              <Button showDownloadIcon>Build Yours Now</Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/50 to-nexa-navy-light p-8">
              <div className="flex aspect-[4/5] max-w-sm flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/30 to-indigo-900/40">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
                  <Smartphone className="h-12 w-12 text-white/80" />
                </div>
                <p className="mt-6 text-center text-lg font-semibold text-white">
                  Your plan, your way
                </p>
                <p className="mt-2 max-w-xs text-center text-sm text-white/60">
                  Customise data, voice, and SMS in the HUGE App and activate
                  instantly.
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-nexa-purple px-4 py-3 shadow-lg">
                <p className="text-xs font-medium text-white/80">Dial</p>
                <p className="text-lg font-bold text-white">*135#</p>
                <p className="text-[10px] text-white/70">from your HUGE SIM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
