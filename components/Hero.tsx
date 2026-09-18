"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#F6F4EE] pt-4 sm:pt-8 pb-16 sm:pb-24 overflow-hidden">
      <div className="hero-fluid-grid w-full">
        
        {/* 1. Left Family Image (Grid area: 2/1/17/10 on desktop, 15/1/24/8 on mobile) */}
        <div className="hero-grid-img-left relative w-full h-full min-h-[320px] sm:min-h-[480px] lg:min-h-0 rounded-none overflow-hidden shadow-xs">
          <Image
            src="/assets/images/hero-arch-left.jpg"
            alt="Family walking on Newbury Park beach"
            fill
            className="object-cover object-left"
            priority
            sizes="(min-width: 768px) 522px, 80vw"
          />
        </div>

        {/* 2. Top Subtitle (Grid area: 2/12/4/21 on desktop, 2/2/5/10 on mobile) */}
        <div className="hero-grid-subtitle flex items-center">
          <p className="text-[11px] sm:text-[12px] tracking-[0.22em] text-[#4A4A4A] uppercase font-semibold leading-relaxed whitespace-pre-wrap">
            ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA
          </p>
        </div>

        {/* 3. Main Heading (Grid area: 7/12/15/24 on desktop, 5/2/12/10 on mobile) */}
        <div className="hero-grid-heading flex items-center">
          <h1 className="font-serif text-[40px] sm:text-[50px] xl:text-[58px] 2xl:text-[64px] leading-[1.08] text-[#2B2B2B] font-normal tracking-[-0.01em]">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <span className="font-cursive text-[#86B3B3] text-[58px] sm:text-[76px] xl:text-[88px] font-normal leading-none inline-block align-baseline -mb-2">
              thrive.
            </span>
          </h1>
        </div>

        {/* 4. Subtext & CTA Link (Grid area: 15/12/17/24 on desktop, 12/2/14/10 on mobile) */}
        <div className="hero-grid-cta flex flex-col justify-center">
          <p className="text-[#4A4A4A] text-[15px] sm:text-[16px] font-light leading-[1.65] max-w-xl mb-5 sm:mb-6">
            Specialized therapy for adults, couples, teens, and children to
            reflect, heal, and grow.
          </p>
          <div>
            <Link
              href="#contact"
              className="animated-underline-btn text-[12px] tracking-[0.22em] font-medium uppercase"
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>

        {/* 5. Right Partial Waves Image (Grid area: 7/25/17/27 on desktop, 18/9/24/11 on mobile) */}
        <div className="hero-grid-img-right relative w-full h-full min-h-[220px] sm:min-h-0 rounded-none overflow-hidden shadow-xs">
          <Image
            src="/assets/images/hero-arch-right.jpg"
            alt="Gentle Pacific ocean waves on beach"
            fill
            className="object-cover object-right"
            sizes="(min-width: 768px) 180px, 30vw"
          />
        </div>

      </div>
    </section>
  );
}
