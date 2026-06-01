import {
  Ban,
  CheckCircle2,
  Smartphone,
  Wallet,
} from "lucide-react";
import { WHY_NEXA } from "@/lib/data";

const icons = [Ban, CheckCircle2, Smartphone, Wallet];

export function WhyNexaSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-nexa-navy sm:text-4xl">
          Why choose Nexa?
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_NEXA.map((item, index) => {
            const Icon = icons[index] ?? CheckCircle2;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
                  <Icon className="h-6 w-6 text-nexa-purple" />
                </div>
                <h3 className="text-lg font-bold text-nexa-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
