"use client";
import { useEffect, useRef } from "react";
import ThemeToggle from "@components/ui/ThemeToggle";

const navItems = [
  {
    label: "Home",
    href: "#home",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z" />
      </svg>
    ),
  },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const maxScroll = 1000;
    let rafId: number | null = null;

    function updateNav() {
      if (!nav) return;
      if (window.scrollY > 0) {
        nav.classList.add("scrolling");
        const scrollProgress = Math.min(window.scrollY / maxScroll, 1);
        const easeProgress = 1 - Math.pow(1 - scrollProgress, 4);
        const minWidth = 528;
        const maxWidth = window.innerWidth * 0.8;
        const currentWidth = maxWidth - (maxWidth - minWidth) * easeProgress;
        if (window.innerWidth >= 768) nav.style.setProperty("width", `${currentWidth}px`);
      } else {
        nav.classList.remove("scrolling");
        nav.style.setProperty("width", "80%");
      }
      rafId = null;
    }

    const onScroll = () => { if (!rafId) rafId = requestAnimationFrame(updateNav); };
    window.addEventListener("scroll", onScroll, { passive: true });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        const targetId = target.getAttribute("href")?.substring(1) || "";
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      });
    });

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a[href^='#']");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("active"));
            const id = entry.target.getAttribute("id");
            document.querySelector(`nav a[href="#${id}"]`)?.classList.add("active");
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((s) => observer.observe(s));

    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <nav
        ref={navRef}
        id="main-nav"
        className="fixed left-1/2 -translate-x-1/2 z-100 bg-background/70 border border-transparent backdrop-blur-xl transition-all duration-500 ease-in-out md:top-6 md:bottom-auto bottom-0 w-[80%] [&.scrolling]:border-border [&.scrolling]:rounded-full [&.scrolling]:bg-surface/70 max-md:rounded-[1rem_1rem_0_0] max-md:border-border max-md:w-full"
      >
        <div className="container mx-auto flex justify-center items-center p-3">
          <ul className="flex w-full justify-between md:space-x-6 md:justify-center md:gap-12 gap-6 items-center">
            {navItems.map((item) => (
              <li key={item.label} className="flex-1 md:flex-none">
                <a href={item.href} className="flex flex-col items-center gap-1 text-(--white-icon) transition-colors text-xs md:text-base relative group [&.active]:text-(--white)">
                  <div className="nav-indicator absolute -left-6 top-1/2 w-2 h-2 rounded-full bg-[#A9FF5B] hidden md:block" />
                  <span className="md:hidden flex items-center justify-center w-6 h-6">{item.icon}</span>
                  <span className="hidden md:inline-block">{item.label}</span>
                  <span className="md:hidden">{item.label}</span>
                </a>
              </li>
            ))}
            <li className="flex-1 md:flex-none flex items-center justify-center">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>
      <style>{`
        .nav-indicator {
          transform: translateY(-50%) scale(0);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        nav a.active .nav-indicator {
          transform: translateY(-50%) scale(1);
          opacity: 1;
        }
        @media (max-width: 767px) { body { padding-bottom: 70px; } }
      `}</style>
    </div>
  );
}
