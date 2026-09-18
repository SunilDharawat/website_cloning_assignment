import React from "react";
import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="quote-banner-wrapper w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/quote-banner.png"
          alt="Children joyfully running across coastal beach sands"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Contrast Overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Squarespace Fluid Engine Grid */}
      <div className="quote-fluid-grid w-full relative z-10">
        {/* Quote Text Block (Desktop: 4/3/11/19, Mobile: 1/2/3/10) */}
        <div className="quote-grid-text-block">
          <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] text-white font-normal leading-[1.22] tracking-normal drop-shadow-xs">
            You deserve a place where your story is heard, valued, and understood.{" "}
            <span className="italic font-normal">
              Nothing will be too heavy for us to carry together.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
