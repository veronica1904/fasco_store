interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink = ({ href, children }: FooterLinkProps) => (
  <a
    href={href}
    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
  >
    {children}
  </a>
);
