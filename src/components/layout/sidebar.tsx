"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  BarChart3,
  Settings,
  FileText,
  HelpCircle,
  LayoutDashboard,
  ArrowRightLeft,
  Target,
  CreditCard,
} from "lucide-react";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        active: true,
      },
      {
        title: "Transactions",
        icon: ArrowRightLeft,
        href: "/transactions",
      },
      {
        title: "My Goals",
        icon: Target,
        href: "/goals",
      },
      {
        title: "Investment",
        icon: BarChart3,
        href: "/investment",
      },
      {
        title: "Bills and Payment",
        icon: CreditCard,
        href: "/bills",
      },
      {
        title: "Analytics and Reports",
        icon: FileText,
        href: "/reports",
      },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      {
        title: "Helpers",
        icon: HelpCircle,
        href: "/help",
      },
      {
        title: "Settings",
        icon: Settings,
        href: "/settings",
      },
    ],
  },
];

function SidebarContent() {
  return (
    <>
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-mint-green rounded-full" />
        <div>
          <h2 className="text-white font-semibold">Finanxic</h2>
          <p className="text-gray-400 text-xs">Financial Assistant</p>
        </div>
      </div>
      <nav className="space-y-6">
        {menuItems.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs text-gray-400 font-medium mb-2">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
                      item.active
                        ? "bg-mint-green text-gray-900"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="mt-auto">
        <div className="bg-gray-800 rounded-xl p-4">
          <h3 className="text-white font-medium mb-1">Become Pro Access</h3>
          <p className="text-gray-400 text-sm mb-3">
            Try your experience for using more features
          </p>
          <button className="w-full bg-gray-700 text-white rounded-lg py-2 text-sm hover:bg-gray-600">
            Upgrade Pro
          </button>
        </div>
      </div>
    </>
  );
}

export function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="lg:hidden fixed top-4 left-4 z-50 text-white hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-64 p-6 bg-[#1A1D1F] border-r border-gray-800"
        >
          <div className="flex flex-col h-full">
            <SidebarContent />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-64 bg-[#1A1D1F] border-r border-gray-800 h-screen p-6 flex-col">
        <SidebarContent />
      </div>
    </>
  );
}
