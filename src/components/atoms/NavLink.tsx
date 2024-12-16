interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="text-gray-600 hover:text-black transition-colors px-4 py-2"
  >
    {children}
  </a>
);
