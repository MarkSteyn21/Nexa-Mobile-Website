import Image from "next/image";

export function PhoneMockup({
  variant = "hero",
  className = "",
}: {
  variant?: "hero" | "app";
  className?: string;
}) {
  const isHero = variant === "hero";

  return (
    <div
      className={`relative mx-auto w-[240px] sm:w-[280px] ${isHero ? "animate-float" : ""} ${className}`}
    >
      <div className="rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-900 p-2 shadow-2xl shadow-purple-900/40">
        <div className="overflow-hidden rounded-[2rem] bg-white">
          <div className="flex items-center justify-center bg-gray-100 px-4 py-2">
            <div className="h-1 w-16 rounded-full bg-gray-300" />
          </div>
          <div className="relative overflow-hidden bg-white">
            <Image
              src="/logos/huge-app-screen.png"
              alt="HUGE Mobile app"
              width={280}
              height={560}
              className={`w-full object-cover object-top ${isHero ? "min-h-[420px]" : "min-h-[380px]"}`}
              priority={isHero}
            />
          </div>
        </div>
      </div>
      {isHero && (
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />
      )}
    </div>
  );
}
