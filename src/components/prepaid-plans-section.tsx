import { Button } from "@/components/ui/button";
import { PREPAID_PLANS } from "@/lib/data";

export function PrepaidPlansSection() {
  return (
    <section id="plans" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-nexa-navy sm:text-4xl">
              Prepaid Plans
            </h2>
            <p className="mt-2 text-gray-600">
              Pick a plan that fits your lifestyle. No contracts.
            </p>
          </div>
          <Button href="#plans">View All Plans</Button>
        </div>

        <div className="plan-scroll mt-10 flex gap-5 overflow-x-auto pb-4">
          {PREPAID_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="w-[200px] shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <div
                className={`bg-gradient-to-br ${plan.accent} px-4 py-3 text-center`}
              >
                <p className="text-xs font-bold tracking-wide text-white/90">
                  {plan.name}
                </p>
              </div>
              <div className="p-5">
                <p className="text-3xl font-bold text-nexa-purple">
                  R{plan.price}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex justify-between">
                    <span>Minutes</span>
                    <span className="font-semibold text-nexa-navy">
                      {plan.minutes}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Data</span>
                    <span className="font-semibold text-nexa-navy">
                      {plan.data}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>SMS</span>
                    <span className="font-semibold text-nexa-navy">
                      {plan.sms}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
