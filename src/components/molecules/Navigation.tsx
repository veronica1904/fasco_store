import { NavLink } from "../atoms/NavLink";

export const Navigation = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Deals", href: "/underConstruction" },
    { label: "New Arrivals", href: "/underConstruction" },
    { label: "Packages", href: "/underConstruction" },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-2">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
