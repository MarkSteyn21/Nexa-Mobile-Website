import {
  ArrowLeftRight,
  CreditCard,
  IdCard,
  RefreshCw,
  Smartphone,
  User,
} from "lucide-react";
import { HugeLogo } from "@/components/logo";
import { PhoneMockup } from "@/components/phone-mockup";
import { APP_FEATURES } from "@/lib/data";

const icons = [IdCard, CreditCard, ArrowLeftRight, RefreshCw, Smartphone, User];

export function SmartAppSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <HugeLogo className="mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-nexa-navy sm:text-4xl">
            Everything in One Smart App
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Simple. Seamless. All in your control.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center">
            <PhoneMockup variant="app" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {APP_FEATURES.map((feature, index) => {
              const Icon = icons[index] ?? Smartphone;
              return (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-xl bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50">
                    <Icon className="h-5 w-5 text-nexa-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nexa-navy">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
