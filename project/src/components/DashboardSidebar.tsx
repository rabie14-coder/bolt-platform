import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Bot,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type DashboardSection = "overview" | "agent" | "conversations" | "settings";

interface NavItem {
  id: DashboardSection;
  label: string;
  icon: typeof LayoutDashboard;
  badge?: string;
}

const navItems: NavItem[] = [
  { id: "overview", label: "نظرة عامة", icon: LayoutDashboard },
  { id: "agent", label: "وكيلي", icon: Bot },
  { id: "conversations", label: "المحادثات", icon: MessageSquare, badge: "12" },
  { id: "settings", label: "الإعدادات", icon: Settings },
];

interface SidebarProps {
  active: DashboardSection;
  onChange: (s: DashboardSection) => void;
}

export default function DashboardSidebar({ active, onChange }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const content = (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5 px-6 h-16 border-b border-white/10 shrink-0">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-purpleDark shadow-lg shadow-brand-purple/30">
          <Bot className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-lg font-extrabold text-white">botdz</span>
          <span className="text-[10px] text-white/40">لوحة التاجر</span>
        </div>
      </Link>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="px-3 text-xs font-semibold text-white/30 uppercase tracking-wider mb-2">
          القائمة
        </p>
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                onChange(item.id);
                setMobileOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-gradient-to-l from-brand-purple/30 to-brand-purple/5 text-white border border-brand-purple/20"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 shrink-0",
                  isActive ? "text-brand-purpleLight" : ""
                )}
              />
              <span className="flex-1 text-right">{item.label}</span>
              {item.badge && (
                <Badge variant="default" className="text-[10px] py-0.5 px-2">
                  {item.badge}
                </Badge>
              )}
              {isActive && (
                <ChevronLeft className="h-4 w-4 text-brand-purpleLight" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Upgrade card */}
      <div className="px-4 pb-4">
        <div className="rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-purpleDark/10 border border-brand-purple/20 p-4">
          <p className="text-sm font-bold text-white mb-1">باقة فريق</p>
          <p className="text-xs text-white/50 mb-3">
            استعملت 73% من رسائلك الشهرية
          </p>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-3">
            <div className="h-full w-[73%] rounded-full bg-gradient-to-r from-brand-purple to-brand-purpleLight" />
          </div>
          <Link to="/pricing">
            <Button size="sm" variant="secondary" className="w-full">
              ترقية الباقة
            </Button>
          </Link>
        </div>
      </div>

      {/* User */}
      <div className="border-t border-white/10 p-4 shrink-0">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback>مت</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">متجر النور</p>
            <p className="text-xs text-white/40 truncate">contact@alnoor.dz</p>
          </div>
          <button className="text-white/40 hover:text-white transition-colors">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex fixed inset-y-0 right-0 w-64 border-l border-white/10 bg-brand-deep/60 backdrop-blur-xl z-40">
        {content}
      </aside>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg glass"
      >
        <Menu className="h-5 w-5 text-white" />
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute inset-y-0 right-0 w-72 bg-brand-deep border-l border-white/10 animate-slide-in-right">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 left-4 text-white/60 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            {content}
          </aside>
        </div>
      )}
    </>
  );
}

export function DashboardTopbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-white/10 bg-brand-deep/60 backdrop-blur-xl px-4 sm:px-6">
      <h1 className="text-lg font-bold text-white flex-1">{title}</h1>
      <div className="hidden sm:flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 h-9">
        <Search className="h-4 w-4 text-white/40" />
        <input
          placeholder="بحث..."
          className="bg-transparent text-sm text-white placeholder:text-white/40 outline-none w-40"
        />
      </div>
      <button className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white transition-colors">
        <Bell className="h-4 w-4" />
        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-brand-purple" />
      </button>
      <Avatar className="h-9 w-9">
        <AvatarFallback>مت</AvatarFallback>
      </Avatar>
    </header>
  );
}
