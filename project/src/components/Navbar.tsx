import { Link, useLocation } from "react-router-dom";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { href: "/", label: "الرئيسية", fr: "Accueil" },
    { href: "/pricing", label: "الأسعار", fr: "Tarifs" },
    { href: "/dashboard", label: "لوحة التحكم", fr: "Tableau de bord" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 flex h-16 items-center justify-between rounded-2xl glass px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-purpleDark shadow-lg shadow-brand-purple/40">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-extrabold text-white">botdz</span>
              <span className="text-[10px] text-white/50">AI Agents for Algeria</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  pathname === l.href
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                تسجيل الدخول
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="sm">ابدأ مجاناً</Button>
            </Link>
          </div>

          <button
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-white"
            onClick={() => setOpen(!open)}
            aria-label="القائمة"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl glass p-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    pathname === l.href
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {l.label} <span className="text-white/30 text-xs">— {l.fr}</span>
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <Link to="/dashboard" onClick={() => setOpen(false)}>
                  <Button variant="secondary" className="w-full">
                    تسجيل الدخول
                  </Button>
                </Link>
                <Link to="/pricing" onClick={() => setOpen(false)}>
                  <Button className="w-full">ابدأ مجاناً</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
