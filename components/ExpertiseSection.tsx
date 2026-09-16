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
    <section className="w-full bg-[#F6F4EE] py-20 sm:py-28 border-t border-[#E3D9CA]/40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Title Column */}
          <div className="lg:col-span-4">
            <h2 className="font-serif text-[40px] sm:text-[50px] text-[#2B2B2B] font-normal leading-[1.05]">
              Our areas of
              <span className="font-cursive text-[#86B3B3] text-[60px] sm:text-[76px] font-normal leading-none block mt-1">
                expertise
              </span>
            </h2>
          </div>

          {/* Right Checklist Columns (2 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 xl:gap-x-16">
            {/* Column 1 */}
            <div className="flex flex-col">
              {col1.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group py-4 sm:py-5 border-b border-[#E3D9CA] flex items-center justify-between text-[12px] sm:text-[13px] tracking-[0.2em] font-medium text-[#2B2B2B] hover:text-[#86B3B3] transition-colors"
                >
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              {col2.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group py-4 sm:py-5 border-b border-[#E3D9CA] flex items-center justify-between text-[12px] sm:text-[13px] tracking-[0.2em] font-medium text-[#2B2B2B] hover:text-[#86B3B3] transition-colors"
                >
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
