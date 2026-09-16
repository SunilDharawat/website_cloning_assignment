"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

interface DropdownItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teamMembers: DropdownItem[] = [
    { name: "Jennifer Anderson, LMFT", href: "#team" },
    { name: "Candace Bletscher, AMFT", href: "#team" },
    { name: "Heather Williams-Baumgart, AMFT", href: "#team" },
    { name: "Samantha Johnson, AMFT", href: "#team" },
    { name: "Autumn Bodily, AMFT", href: "#team" },
    { name: "Andrea Watkins, APCC", href: "#team" },
    { name: "Rosa Gomez, AMFT", href: "#team" },
    { name: "Chad Flores, AMFT", href: "#team" },
  ];

  const specialties: DropdownItem[] = [
    { name: "Dissociation", href: "#specialties" },
    { name: "Trauma", href: "#specialties" },
    { name: "Special Needs Parenting", href: "#specialties" },
    { name: "Couples", href: "#who-we-help" },
    { name: "Children & Teens", href: "#who-we-help" },
    { name: "Anxiety & Depression", href: "#specialties" },
    { name: "Adoption", href: "#specialties" },
  ];

  const methods: DropdownItem[] = [
    { name: "EMDR", href: "#specialties" },
    { name: "Brainspotting", href: "#specialties" },
    { name: "Somatic Therapy", href: "#specialties" },
    { name: "Parts Work Therapy", href: "#specialties" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#F6F4EE]/95 backdrop-blur-md shadow-xs py-3"
          : "bg-[#F6F4EE] py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex items-center z-10">
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 text-[13px] tracking-[0.15em] font-medium text-[#2B2B2B]">
          <Link
            href="#how-we-work"
            className="hover:text-[#86B3B3] transition-colors uppercase"
          >
            ABOUT
          </Link>

          {/* OUR TEAM DROPDOWN */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setActiveDropdown("team")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#86B3B3] transition-colors uppercase cursor-pointer">
              <span>OUR TEAM</span>
              <ChevronDown className="w-3 h-3 text-[#2B2B2B] group-hover:text-[#86B3B3] transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <div
              className={`absolute top-full left-0 min-w-[260px] bg-[#F6F4EE] border border-[#E3D9CA] shadow-md py-3 transition-all duration-200 ${
                activeDropdown === "team"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
            >
              {teamMembers.map((member, idx) => (
                <Link
                  key={idx}
                  href={member.href}
                  className="block px-5 py-2 text-[12px] tracking-wider text-[#2B2B2B] hover:bg-[#E3D9CA]/50 hover:text-[#86B3B3] transition-colors"
                >
                  {member.name}
                </Link>
              ))}
            </div>
          </div>

          {/* SPECIALTIES DROPDOWN */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setActiveDropdown("specialties")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#86B3B3] transition-colors uppercase cursor-pointer">
              <span>SPECIALTIES</span>
              <ChevronDown className="w-3 h-3 text-[#2B2B2B] group-hover:text-[#86B3B3] transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <div
              className={`absolute top-full left-0 min-w-[240px] bg-[#F6F4EE] border border-[#E3D9CA] shadow-md py-3 transition-all duration-200 ${
                activeDropdown === "specialties"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
            >
              {specialties.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="block px-5 py-2 text-[12px] tracking-wider text-[#2B2B2B] hover:bg-[#E3D9CA]/50 hover:text-[#86B3B3] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* METHODS DROPDOWN */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setActiveDropdown("methods")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#86B3B3] transition-colors uppercase cursor-pointer">
              <span>METHODS</span>
              <ChevronDown className="w-3 h-3 text-[#2B2B2B] group-hover:text-[#86B3B3] transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <div
              className={`absolute top-full left-0 min-w-[220px] bg-[#F6F4EE] border border-[#E3D9CA] shadow-md py-3 transition-all duration-200 ${
                activeDropdown === "methods"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
            >
              {methods.map((method, idx) => (
                <Link
                  key={idx}
                  href={method.href}
                  className="block px-5 py-2 text-[12px] tracking-wider text-[#2B2B2B] hover:bg-[#E3D9CA]/50 hover:text-[#86B3B3] transition-colors"
                >
                  {method.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="#faqs"
            className="hover:text-[#86B3B3] transition-colors uppercase"
          >
            FAQS
          </Link>

          {/* Contact Pill Button */}
          <Link
            href="#contact"
            className="border border-[#2B2B2B] hover:border-[#86B3B3] hover:bg-[#86B3B3] hover:text-white px-7 py-2.5 rounded-full text-[12px] tracking-[0.18em] transition-all duration-300 inline-block font-normal"
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#2B2B2B] hover:text-[#86B3B3] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] bottom-0 bg-[#F6F4EE] z-40 px-8 py-6 overflow-y-auto border-t border-[#E3D9CA] flex flex-col space-y-5">
          <Link
            href="#how-we-work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-[0.15em] font-medium text-[#2B2B2B] hover:text-[#86B3B3] uppercase py-2 border-b border-[#E3D9CA]/50"
          >
            ABOUT
          </Link>

          <div>
            <span className="text-xs tracking-[0.2em] font-semibold text-[#808080] uppercase block mb-2">
              OUR TEAM
            </span>
            <div className="pl-3 space-y-2 border-l border-[#86B3B3]/40">
              {teamMembers.map((member, idx) => (
                <Link
                  key={idx}
                  href={member.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs tracking-wider text-[#2B2B2B] hover:text-[#86B3B3] py-1"
                >
                  {member.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs tracking-[0.2em] font-semibold text-[#808080] uppercase block mb-2">
              SPECIALTIES
            </span>
            <div className="pl-3 space-y-2 border-l border-[#86B3B3]/40">
              {specialties.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs tracking-wider text-[#2B2B2B] hover:text-[#86B3B3] py-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs tracking-[0.2em] font-semibold text-[#808080] uppercase block mb-2">
              METHODS
            </span>
            <div className="pl-3 space-y-2 border-l border-[#86B3B3]/40">
              {methods.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs tracking-wider text-[#2B2B2B] hover:text-[#86B3B3] py-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm tracking-[0.15em] font-medium text-[#2B2B2B] hover:text-[#86B3B3] uppercase py-2 border-b border-[#E3D9CA]/50"
          >
            FAQS
          </Link>

          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center border border-[#2B2B2B] hover:bg-[#86B3B3] hover:border-[#86B3B3] hover:text-white py-3 rounded-full text-xs tracking-[0.2em] transition-colors uppercase font-medium mt-4"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
