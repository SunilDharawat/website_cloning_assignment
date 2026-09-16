"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft, X } from "lucide-react";

interface DropdownItem {
  name: string;
  href: string;
}

interface MenuFolder {
  id: string;
  title: string;
  items: DropdownItem[];
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileFolder, setActiveMobileFolder] = useState<string | null>(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setActiveMobileFolder(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const teamMembers: DropdownItem[] = [
    { name: "JENNIFER ANDERSON, LMFT", href: "#team" },
    { name: "CANDACE BLETSCHER, AMFT", href: "#team" },
    { name: "HEATHER WILLIAMS-BAUMGART, AMFT", href: "#team" },
    { name: "SAMANTHA JOHNSON, AMFT", href: "#team" },
    { name: "AUTUMN BODILY, AMFT", href: "#team" },
    { name: "ANDREA WATKINS, APCC", href: "#team" },
    { name: "ROSA GOMEZ, AMFT", href: "#team" },
    { name: "CHAD FLORES, AMFT", href: "#team" },
  ];

  const specialties: DropdownItem[] = [
    { name: "DISSOCIATION", href: "#specialties" },
    { name: "TRAUMA", href: "#specialties" },
    { name: "SPECIAL NEEDS PARENTING", href: "#specialties" },
    { name: "COUPLES", href: "#who-we-help" },
    { name: "CHILDREN & TEENS", href: "#who-we-help" },
    { name: "ANXIETY & DEPRESSION", href: "#specialties" },
    { name: "ADOPTION", href: "#specialties" },
  ];

  const methods: DropdownItem[] = [
    { name: "EMDR", href: "#specialties" },
    { name: "BRAINSPOTTING", href: "#specialties" },
    { name: "SOMATIC THERAPY", href: "#specialties" },
    { name: "PARTS WORK THERAPY", href: "#specialties" },
  ];

  const mobileFolders: MenuFolder[] = [
    { id: "team", title: "OUR TEAM", items: teamMembers },
    { id: "specialties", title: "SPECIALTIES", items: specialties },
    { id: "methods", title: "METHODS", items: methods },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[#F6F4EE] py-3 sm:py-4 shadow-xs"
          : "bg-[#F6F4EE] py-4 sm:py-6"
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 flex items-center justify-between">
        
        {/* Left: Brand Logo (start property) */}
        <Link href="/" className="relative flex items-center z-10 shrink-0">
          <div className="relative w-52 sm:w-64 h-14 sm:h-16">
            <Image
              src="/assets/images/logo.png"
              alt="Conejo Valley Family Counseling"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Right: Desktop Navigation Items & Contact Ellipse Button (end property) */}
        <div className="hidden lg:flex items-center space-x-7 xl:space-x-9">
          <nav className="flex items-center space-x-7 xl:space-x-9 text-[13px] tracking-[0.16em] font-medium text-[#2B2B2B]">
            {/* ABOUT */}
            <Link
              href="#how-we-work"
              className="uppercase transition-colors hover:text-[#555]"
            >
              ABOUT
            </Link>

            {/* OUR TEAM DROPDOWN */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDesktopDropdown("team")}
              onMouseLeave={() => setActiveDesktopDropdown(null)}
            >
              <button className="uppercase transition-colors hover:text-[#555] cursor-pointer font-medium">
                OUR TEAM
              </button>

              {/* Submenu container with solid background color and right alignment */}
              <div
                className={`absolute top-full right-0 bg-[#F6F4EE] pt-3 pb-4 px-3 flex flex-col items-end space-y-2.5 whitespace-nowrap z-50 transition-all duration-150 ${
                  activeDesktopDropdown === "team"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1 pointer-events-none"
                }`}
              >
                {teamMembers.map((member, idx) => (
                  <Link
                    key={idx}
                    href={member.href}
                    className="text-[12px] tracking-[0.14em] text-[#2B2B2B] hover:underline underline-offset-4 decoration-1 decoration-[#2B2B2B] uppercase transition-all block text-right"
                  >
                    {member.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* SPECIALTIES DROPDOWN */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDesktopDropdown("specialties")}
              onMouseLeave={() => setActiveDesktopDropdown(null)}
            >
              <button className="uppercase transition-colors hover:text-[#555] cursor-pointer font-medium">
                SPECIALTIES
              </button>

              <div
                className={`absolute top-full right-0 bg-[#F6F4EE] pt-3 pb-4 px-3 flex flex-col items-end space-y-2.5 whitespace-nowrap z-50 transition-all duration-150 ${
                  activeDesktopDropdown === "specialties"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1 pointer-events-none"
                }`}
              >
                {specialties.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="text-[12px] tracking-[0.14em] text-[#2B2B2B] hover:underline underline-offset-4 decoration-1 decoration-[#2B2B2B] uppercase transition-all block text-right"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* METHODS DROPDOWN */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDesktopDropdown("methods")}
              onMouseLeave={() => setActiveDesktopDropdown(null)}
            >
              <button className="uppercase transition-colors hover:text-[#555] cursor-pointer font-medium">
                METHODS
              </button>

              <div
                className={`absolute top-full right-0 bg-[#F6F4EE] pt-3 pb-4 px-3 flex flex-col items-end space-y-2.5 whitespace-nowrap z-50 transition-all duration-150 ${
                  activeDesktopDropdown === "methods"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1 pointer-events-none"
                }`}
              >
                {methods.map((method, idx) => (
                  <Link
                    key={idx}
                    href={method.href}
                    className="text-[12px] tracking-[0.14em] text-[#2B2B2B] hover:underline underline-offset-4 decoration-1 decoration-[#2B2B2B] uppercase transition-all block text-right"
                  >
                    {method.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQS */}
            <Link
              href="#faqs"
              className="uppercase transition-colors hover:text-[#555]"
            >
              FAQS
            </Link>
          </nav>

          {/* CONTACT Ellipse Button (Continuous geometric ellipse border matching screenshot) */}
          <Link
            href="#contact"
            className="w-[136px] h-[52px] rounded-[50%] border border-[#4A4A4A] flex items-center justify-center text-[12px] tracking-[0.16em] uppercase text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white transition-colors duration-200 font-medium shrink-0 ml-2 xl:ml-4"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Hamburger Button with 3 lines */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 text-[#2B2B2B] focus:outline-none"
          aria-label="Open Mobile Menu"
        >
          <div className="w-7 flex flex-col space-y-1.5 items-end justify-center">
            <span className="w-7 h-[1.5px] bg-[#2B2B2B] block"></span>
            <span className="w-7 h-[1.5px] bg-[#2B2B2B] block"></span>
            <span className="w-7 h-[1.5px] bg-[#2B2B2B] block"></span>
          </div>
        </button>

      </div>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#F6F4EE] z-50 flex flex-col">
          
          {/* Top Bar with Logo and Square Box Close Button */}
          <div className="w-full px-6 py-5 flex items-center justify-between border-b border-[#E3D9CA]/30">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="relative w-48 h-12 block"
            >
              <Image
                src="/assets/images/logo.png"
                alt="Conejo Valley Family Counseling"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            {/* Square Border Close Box */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-12 h-12 border border-[#2B2B2B] flex items-center justify-center text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Mobile Menu Body */}
          <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col justify-between">
            
            {/* View A: Root Main Menu */}
            {!activeMobileFolder && (
              <div className="space-y-7">
                {/* ABOUT */}
                <div>
                  <Link
                    href="#how-we-work"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[32px] sm:text-[38px] font-normal uppercase tracking-wide text-[#2B2B2B]"
                  >
                    ABOUT
                  </Link>
                </div>

                {/* OUR TEAM > */}
                <div>
                  <button
                    onClick={() => setActiveMobileFolder("team")}
                    className="w-full flex items-center justify-between text-left text-[32px] sm:text-[38px] font-normal uppercase tracking-wide text-[#2B2B2B] cursor-pointer"
                  >
                    <span>OUR TEAM</span>
                    <ChevronRight className="w-7 h-7 text-[#2B2B2B] stroke-[1.5]" />
                  </button>
                </div>

                {/* SPECIALTIES > */}
                <div>
                  <button
                    onClick={() => setActiveMobileFolder("specialties")}
                    className="w-full flex items-center justify-between text-left text-[32px] sm:text-[38px] font-normal uppercase tracking-wide text-[#2B2B2B] cursor-pointer"
                  >
                    <span>SPECIALTIES</span>
                    <ChevronRight className="w-7 h-7 text-[#2B2B2B] stroke-[1.5]" />
                  </button>
                </div>

                {/* METHODS > */}
                <div>
                  <button
                    onClick={() => setActiveMobileFolder("methods")}
                    className="w-full flex items-center justify-between text-left text-[32px] sm:text-[38px] font-normal uppercase tracking-wide text-[#2B2B2B] cursor-pointer"
                  >
                    <span>METHODS</span>
                    <ChevronRight className="w-7 h-7 text-[#2B2B2B] stroke-[1.5]" />
                  </button>
                </div>

                {/* FAQS */}
                <div>
                  <Link
                    href="#faqs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[32px] sm:text-[38px] font-normal uppercase tracking-wide text-[#2B2B2B]"
                  >
                    FAQS
                  </Link>
                </div>
              </div>
            )}

            {/* View B: Submenu Folder */}
            {activeMobileFolder && (
              <div className="space-y-6">
                {/* Back Button */}
                <button
                  onClick={() => setActiveMobileFolder(null)}
                  className="flex items-center gap-2 text-sm tracking-[0.2em] font-semibold text-[#2B2B2B] uppercase mb-6 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2]" />
                  <span>BACK</span>
                </button>

                {/* Submenu Title */}
                <h3 className="text-xs tracking-[0.25em] text-[#808080] uppercase font-medium mb-4">
                  {mobileFolders.find((f) => f.id === activeMobileFolder)?.title}
                </h3>

                {/* Submenu Items List */}
                <div className="space-y-4">
                  {mobileFolders
                    .find((f) => f.id === activeMobileFolder)
                    ?.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setActiveMobileFolder(null);
                        }}
                        className="block text-[22px] sm:text-[26px] font-normal text-[#2B2B2B] hover:underline underline-offset-4 decoration-1 decoration-[#2B2B2B] uppercase tracking-wide py-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                </div>
              </div>
            )}

            {/* Bottom: CONTACT Ellipse Button */}
            <div className="pt-10 pb-6 flex justify-center">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-[260px] sm:w-[280px] h-[64px] rounded-[50%] border border-[#4A4A4A] flex items-center justify-center text-[12px] tracking-[0.2em] uppercase font-medium text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white transition-colors"
              >
                CONTACT
              </Link>
            </div>

          </div>

        </div>
      )}
    </header>
  );
}
