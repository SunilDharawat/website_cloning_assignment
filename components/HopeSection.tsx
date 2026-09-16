import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="w-full bg-[#F6F4EE] py-16 sm:py-24 border-t border-[#E3D9CA]/40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Full Width Main Heading */}
        <h2 className="font-serif text-[34px] sm:text-[46px] lg:text-[54px] text-[#2B2B2B] font-normal leading-[1.15] max-w-4xl mb-12 sm:mb-16">
          You’re holding onto hope that life can be better than it is right now.
        </h2>

        {/* 2-Column Text + Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Column 1 */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-[11px] sm:text-[12px] tracking-[0.18em] text-[#333333] uppercase font-semibold leading-relaxed">
              AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
            </p>
            <p className="text-[#4A4A4A] text-[15px] sm:text-[16px] font-light leading-[1.7]">
              Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
            </p>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-4">
            <p className="text-[#4A4A4A] text-[15px] sm:text-[16px] font-light leading-[1.7]">
              First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
            </p>
          </div>

          {/* Column 3 (Beach Photo) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] h-[280px] sm:h-[320px] rounded-xs overflow-hidden shadow-xs">
              <Image
                src="/assets/images/hope-beach.jpg"
                alt="Newbury Park coastal shoreline"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
