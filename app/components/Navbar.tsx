"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/sobre", label: "Sobre o site" },
    { href: "/desenvolvedores", label: "Desenvolvedores" },
    { href: "/comentarios", label: "Comentários" },
    { href: "/login", label: "Login" },
    { href: "/perfil", label: "Perfil" },
  ];

  return (
    <nav>
      <Link href="/">
        <h1>Solve Code</h1>
      </Link>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              style={pathname === link.href ? { color: "#ffffff" } : {}}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
