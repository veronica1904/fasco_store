import { FooterLink } from "../atoms/FooterLink";

const navLinks = [
  { href: "/", label: "Support Center" },
  { href: "/", label: "Invoicing" },
  { href: "/", label: "Contract" },
  { href: "/", label: "Careers" },
  { href: "/", label: "Blog" },
  { href: "/", label: "FAQ's" },
];

export const Footer = () => (
  <footer className="border-t border-gray-200 bg-white">
    <div className="container mx-auto px-4">
      <div className="py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <a href="/" className="text-xl font-bold text-gray-900">
            FASCO
          </a>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </nav>
        </div>

        <div className="flex justify-center mt-8">
          <p className="text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} Xpro. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
