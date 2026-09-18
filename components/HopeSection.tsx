import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="hope-section-wrapper w-full bg-[#F6F4EE] border-t border-[#E3D9CA]/40 overflow-hidden">
      <div className="hope-fluid-grid w-full">
        
        {/* 1. Main Heading (Desktop: 4/3/8/18, Mobile: 1/2/5/10) */}
        <div className="hope-grid-heading">
          <h2 className="font-serif text-[34px] sm:text-[44px] xl:text-[48px] 2xl:text-[52px] text-[#2B2B2B] font-normal leading-[1.14]">
            You’re holding onto hope that life can be better than it is right now.
          </h2>
        </div>

        {/* 2. Column 1 Text (Desktop: 9/3/16/10, Mobile: 5/2/13/10) */}
        <div className="hope-grid-col1 flex flex-col justify-start">
          <p className="text-[11px] sm:text-[12px] tracking-[0.18em] text-[#333333] uppercase font-semibold leading-relaxed mb-4">
            AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
          </p>
          <p className="text-[#4A4A4A] text-[15px] sm:text-[16px] font-light leading-[1.7]">
            Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
          </p>
        </div>

        {/* 3. Column 2 Text (Desktop: 9/10/17/17, Mobile: 22/2/29/10) */}
        <div className="hope-grid-col2 flex flex-col justify-start">
          <p className="text-[#4A4A4A] text-[15px] sm:text-[16px] font-light leading-[1.7]">
            First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
          </p>
        </div>

        {/* 4. Beach Photo (Desktop: 1/19/17/27, Mobile: 14/2/21/10) */}
        <div className="hope-grid-img relative w-full h-full min-h-[280px] sm:min-h-0 rounded-none overflow-hidden shadow-xs">
          <Image
            src="/assets/images/hope-beach.jpg"
            alt="Calm coastal shoreline in Newbury Park"
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 450px, 90vw"
          />
        </div>

      </div>
    </section>
  );
}
