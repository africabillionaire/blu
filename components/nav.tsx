"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What We Do", isMega: true },
    { href: "/who-we-are", label: "Who We Are" },
    { href: "/what-we-think", label: "What We Think", isMega: true },
    { href: "/career", label: "Career", isMega: true },
    { href: "/contact", label: "Contact Us" },
    { href: "/login", label: "Login" },
  ];

  return (
    <div className="relative">
      {/* Utility Bar */}
      <div className="utility-bar flex h-10 items-center px-6 bg-gray-50 dark:bg-gray-800">
        <div className="flex-1 text-sm text-gray-800 dark:text-gray-100">
          Operating in Africa
        </div>
        <div className="flex items-center space-x-4 text-sm">
          {/* Language switcher - simplified */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="px-2 py-0.5 text-gray-500 dark:text-gray-400 hover:text-gray-300 dark:hover:text-gray-200">
              EN
            </Link>
            <span className="text-gray-400 dark:text-gray-600">|</span>
            <Link href="/" className="px-2 py-0.5 text-gray-500 dark:text-gray-400 hover:text-gray-300 dark:hover:text-gray-200">
              FR
            </Link>
          </div>
          {/* Contact us link */}
          <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-300 dark:hover:text-gray-200 underline">
            Contact us
          </Link>
          {/* Log in link */}
          <Link href="/login" className="ml-4 text-gray-600 dark:text-gray-400 hover:text-gray-300 dark:hover:text-gray-200 underline">
            Log in
          </Link>
          {/* Dark/Light mode toggle - placeholder */}
          <div className="ml-4 flex items-center space-x-2">
            <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <span className="text-gray-600 dark:text-gray-400">☀️/🌙</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="flex h-16 items-center px-6 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-600">
        <Link href="/" className="flex-shrink-0 text-xl font-bold">
          CITADOLPH
        </Link>
        <div className="flex-1 flex justify-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "text-base font-medium tracking-tight",
                item.isMega ? "relative" : "",
                "transition-colors duration-200",
                activeMega === item.label.toLowerCase().split(' ').join('-') ||
                (item.href === pathname && !item.isMega)
                  ? "text-[var(--brand-blue)]"
                  : "text-gray-800 dark:text-gray-100",
                item.isMega &&
                  activeMega === item.label.toLowerCase().split(' ').join('-')
                  ? "after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-0.5 after:bg-[var(--brand-red)]"
                  : ""
              )}
              onMouseEnter={e => {
                if (item.isMega) {
                  e.preventDefault();
                  setActiveMega(item.label.toLowerCase().split(' ').join('-'));
                }
              }}
              onMouseLeave={e => {
                if (item.isMega) {
                  setActiveMega(null);
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/quote"
          className="flex-shrink-0 flex items-center justify-center px-4 py-2 bg-[var(--brand-red)] text-white text-sm font-medium rounded-none hover:bg-[var(--brand-red)]/90 transition-colors duration-200"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
}