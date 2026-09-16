import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SpecialtyItem {
  title: string;
  description: string;
  href: string;
}

export default function SpecialtiesGrid() {
  const specialties: SpecialtyItem[] = [
    {
      title: "Trauma",
      description:
        "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
      href: "#specialties",
    },
    {
      title: "EMDR",
      description:
        "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
      href: "#specialties",
    },
    {
      title: "Dissociation",
      description:
        "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
      href: "#specialties",
    },
    {
      title: "Special Needs Parenting",
      description:
        "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
      href: "#specialties",
    },
  ];

  return (
    <section id="specialties" className="w-full bg-[#F6F4EE] py-20 sm:py-28 border-t border-[#E3D9CA]/40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Transition Hero Banner: Image Left + Headline Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 sm:mb-32">
          {/* Left Photo */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] overflow-hidden rounded-xs shadow-xs">
              <Image
                src="/assets/images/shape-future.jpg"
                alt="Family standing together by ocean surf"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Headline */}
          <div className="lg:col-span-6 lg:pl-6">
            <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[54px] text-[#2B2B2B] font-normal leading-[1.15]">
              Honoring where you’ve been{" "}
              <span className="font-cursive text-[#86B3B3] text-[56px] sm:text-[76px] font-normal leading-none inline-block align-baseline -mb-2">
                &amp;
              </span>{" "}
              helping shape where you’re headed.
            </h2>
          </div>
        </div>

        {/* 2-Column or Sidebar Layout for "Our specialties include..." */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8 border-t border-[#E3D9CA]/40">
          {/* Left Heading */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-[38px] sm:text-[46px] text-[#2B2B2B] font-normal leading-[1.05]">
              Our{" "}
              <span className="font-cursive text-[#86B3B3] text-[56px] sm:text-[72px] font-normal leading-none inline-block align-baseline -mb-2">
                specialties
              </span>
              <br />
              include…
            </h3>
          </div>

          {/* Right 2x2 Specialty Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {specialties.map((item, idx) => (
              <div key={idx} className="flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-serif text-[26px] sm:text-[28px] text-[#2B2B2B] font-normal mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[#4A4A4A] text-[15px] font-light leading-[1.75]">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href={item.href}
                    className="inline-block text-[11px] tracking-[0.22em] font-medium text-[#2B2B2B] uppercase border-b border-[#2B2B2B] pb-1 hover:text-[#86B3B3] hover:border-[#86B3B3] transition-colors"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
