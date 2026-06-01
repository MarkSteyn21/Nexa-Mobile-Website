import { Download } from "lucide-react";
import { HUGE_APP_URL } from "@/lib/data";

type ButtonVariant = "primary" | "outline" | "outline-light";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-nexa-purple text-white hover:bg-nexa-purple-dark shadow-lg shadow-purple-500/25",
  outline:
    "border-2 border-nexa-purple text-nexa-purple hover:bg-purple-50",
  "outline-light":
    "border-2 border-white/80 text-white hover:bg-white/10",
};

export function Button({
  children,
  variant = "primary",
  href = HUGE_APP_URL,
  className = "",
  showDownloadIcon = false,
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  showDownloadIcon?: boolean;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${variantClasses[variant]} ${className}`}
    >
      {showDownloadIcon && <Download className="h-4 w-4" />}
      {children}
    </a>
  );
}
