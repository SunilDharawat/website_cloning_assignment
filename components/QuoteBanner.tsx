import React from "react";
import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full min-h-[460px] sm:min-h-[540px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/images/quote-banner.png"
        alt="Children joyfully running across coastal beach sands"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Subtle Darkening Overlay */}
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[#2B2B2B]/20" />

      {/* Quote Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-12 py-24 sm:py-32 text-left sm:text-left">
        <h2 className="font-serif text-[30px] sm:text-[42px] lg:text-[48px] text-white font-normal leading-[1.25] max-w-4xl tracking-wide drop-shadow-xs">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <span className="italic font-normal">
            Nothing will be too heavy for us to carry together.
          </span>
        </h2>
      </div>
    </section>
  );
}
