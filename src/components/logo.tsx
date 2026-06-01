import Image from "next/image";

export function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  if (variant === "dark") {
    return (
      <a href="#home" className={`flex items-center gap-2.5 ${className}`}>
        <Image
          src="/logos/nexa-icon.png"
          alt="Nexa Mobile"
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
          priority
        />
        <span className="text-sm font-bold tracking-widest text-nexa-navy">
          NEXA MOBILE
        </span>
      </a>
    );
  }

  return (
    <a href="#home" className={`flex items-center ${className}`}>
      <Image
        src="/logos/nexa-mobile.png"
        alt="Nexa Mobile"
        width={220}
        height={56}
        className="h-11 w-auto object-contain sm:h-12"
        priority
      />
    </a>
  );
}

export function HugeLogo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Image
      src="/logos/huge-mobile.png"
      alt="HUGE Mobile"
      width={compact ? 120 : 160}
      height={compact ? 32 : 44}
      className={`object-contain ${compact ? "h-8 w-auto" : "h-11 w-auto"} ${className}`}
    />
  );
}
