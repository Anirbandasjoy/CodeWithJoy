"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  FolderOpen,
  FileText,
  Mail,
  Sun,
  Menu,
  X,
} from "lucide-react";
import { GrTechnology } from "react-icons/gr";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: User, label: "About" },
    { href: "/projects", icon: FolderOpen, label: "Projects" },
    { href: "/technologies", icon: GrTechnology, label: "Technologies" },
    { href: "/articles", icon: FileText, label: "Articles" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ];

  // Remove hash (#) from a path string, if any
  const stripHash = (path: string) => path.split("#")[0];

  // Check if nav item is active based on current pathname (ignoring hash)
  const isActive = (href: string) => {
    const hrefPath = stripHash(href);
    const currentPath = stripHash(pathname || "");
    return hrefPath === currentPath;
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-6 xl:space-x-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out ${
                      active
                        ? "text-slate-900 bg-slate-200"
                        : "text-gray-700 hover:text-slate-800 hover:bg-blue-50"
                    }`}
                  >
                    <IconComponent
                      size={16}
                      className={`transition-transform ${
                        active
                          ? "scale-110 text-blue-700"
                          : "group-hover:scale-110"
                      }`}
                    />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Tablet Navigation - Hidden on mobile and desktop */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex flex-col items-center gap-1 px-2 py-2 rounded-md text-xs font-medium transition-all duration-200 ease-in-out ${
                      active
                        ? "text-slate-900 bg-blue-100"
                        : "text-gray-700 hover:text-slate-800 hover:bg-blue-50"
                    }`}
                  >
                    <IconComponent
                      size={18}
                      className={`transition-transform ${
                        active
                          ? "scale-110 text-blue-700"
                          : "group-hover:scale-110"
                      }`}
                    />
                    <span className="text-xs">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle Button */}
            <button
              className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors duration-200 group"
              aria-label="Toggle theme"
            >
              <Sun
                size={16}
                className="sm:w-[18px] sm:h-[18px] text-slate-800 group-hover:text-yellow-500 transition-colors duration-200"
              />
            </button>

            {/* Mobile Menu Button - Only visible on mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-slate-800 hover:bg-blue-50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/5 rounded-lg mt-2 border-gray-100">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium transition-all duration-200 active:bg-blue-100 ${
                    active
                      ? "text-slate-900 bg-blue-100"
                      : "text-gray-700 hover:text-slate-800 hover:bg-blue-50"
                  }`}
                >
                  <IconComponent size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
