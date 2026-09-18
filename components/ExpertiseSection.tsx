import React from "react";
import Link from "next/link";

export default function ExpertiseSection() {
  const col1 = [
    { title: "DISSOCIATION", href: "#specialties" },
    { title: "TRAUMA", href: "#specialties" },
    { title: "FAMILY CONFLICT", href: "#specialties" },
    { title: "SPECIAL NEEDS PARENTING", href: "#specialties" },
    { title: "DEPRESSION", href: "#specialties" },
    { title: "MARRIAGE", href: "#who-we-help" },
  ];

  const col2 = [
    { title: "ANXIETY", href: "#specialties" },
    { title: "RELATIONSHIPS", href: "#who-we-help" },
    { title: "CHILDREN", href: "#who-we-help" },
    { title: "TEENS", href: "#who-we-help" },
    { title: "INTIMACY & CONNECTION", href: "#who-we-help" },
    { title: "…AND MORE.", href: "#contact" },
  ];

  return (
    <section id="expertise" className="expertise-wrapper w-full bg-[#F6F4EE] border-t border-[#E3D9CA]/40 overflow-hidden">
      <div className="expertise-fluid-grid w-full">
        
        {/* Left Heading (Desktop: 1/3/6/9, Mobile: 1/2/5/10) */}
        <div className="expertise-grid-heading">
          <h2 className="font-serif text-[40px] sm:text-[50px] text-[#2B2B2B] font-normal leading-[1.05]">
            Our areas of
            <span className="font-cursive text-[#86B3B3] text-[58px] sm:text-[76px] font-normal leading-none block mt-1">
              expertise
            </span>
          </h2>
        </div>

        {/* Column 1 Checklist (Desktop: 1/10/13/17, Mobile: 5/2/16/10) */}
        <div className="expertise-grid-col1 flex flex-col justify-start">
          {col1.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group py-3.5 sm:py-4 border-b border-[#E3D9CA] flex items-center justify-between text-[12px] sm:text-[13px] tracking-[0.2em] font-medium text-[#2B2B2B] hover:text-[#86B3B3] transition-colors"
            >
              <span>{item.title}</span>
            </Link>
          ))}
        </div>

        {/* Column 2 Checklist (Desktop: 1/18/13/25, Mobile: 16/2/28/10) */}
        <div className="expertise-grid-col2 flex flex-col justify-start">
          {col2.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group py-3.5 sm:py-4 border-b border-[#E3D9CA] flex items-center justify-between text-[12px] sm:text-[13px] tracking-[0.2em] font-medium text-[#2B2B2B] hover:text-[#86B3B3] transition-colors"
            >
              <span>{item.title}</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
