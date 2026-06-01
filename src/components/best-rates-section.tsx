import { BEST_RATES } from "@/lib/data";

export function BestRatesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-nexa-navy sm:text-4xl">
          Best Rates
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BEST_RATES.map((rate) => (
            <div
              key={rate.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                {rate.title}
              </h3>
              <p className="mt-3 text-3xl font-bold text-nexa-purple">
                {rate.primary}
              </p>
              <p className="mt-1 text-sm text-gray-600">{rate.primaryLabel}</p>
              {"secondary" in rate && rate.secondary && (
                <>
                  <p className="mt-4 text-2xl font-bold text-nexa-purple">
                    {rate.secondary}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    {rate.secondaryLabel}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
