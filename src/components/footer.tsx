import { Logo } from "@/components/logo";
import { FOOTER_LINKS } from "@/lib/data";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="support" className="bg-nexa-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Prepaid mobile made simple. No contracts, full control from the
              HUGE App.
            </p>
          </div>
          <FooterColumn title="Quick Links" links={FOOTER_LINKS.quickLinks} />
          <FooterColumn title="Support" links={FOOTER_LINKS.support} />
          <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Nexa Mobile. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
