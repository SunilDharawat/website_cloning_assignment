"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#F6F4EE] pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Arched Photo (Family on Beach) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-[280px] sm:w-[340px] xl:w-[380px] h-[390px] sm:h-[480px] xl:h-[540px] rounded-t-[180px] sm:rounded-t-[220px] overflow-hidden shadow-xs">
              <Image
                src="/assets/images/hero-arch-left.jpg"
                alt="Family walking on Newbury Park beach"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Middle Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left order-1 lg:order-2 lg:pl-2 xl:pl-6">
            <p className="text-[11px] sm:text-[12px] tracking-[0.22em] text-[#5A5A5A] uppercase font-semibold mb-6 sm:mb-8">
              ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA
            </p>

            <h1 className="font-serif text-[42px] sm:text-[56px] xl:text-[66px] leading-[1.08] text-[#2B2B2B] font-normal tracking-[-0.01em]">
              Rebuild your foundation on solid ground and finally begin to{" "}
              <span className="font-cursive text-[#86B3B3] text-[58px] sm:text-[76px] xl:text-[88px] font-normal leading-none inline-block align-baseline -mb-2">
                thrive.
              </span>
            </h1>

            <p className="text-[#4A4A4A] text-[16px] sm:text-[17px] font-light leading-[1.65] mt-6 sm:mt-8 max-w-xl">
              Specialized therapy for adults, couples, teens, and children to
              reflect, heal, and grow.
            </p>

            <div className="mt-8 sm:mt-10">
              <Link
                href="#contact"
                className="inline-block text-[12px] tracking-[0.22em] font-medium text-[#2B2B2B] uppercase border-b border-[#2B2B2B] pb-1 hover:text-[#86B3B3] hover:border-[#86B3B3] transition-colors"
              >
                BOOK AN APPOINTMENT
              </Link>
            </div>
          </div>

          {/* Right Arched Waves Peek Photo */}
          <div className="hidden xl:flex lg:col-span-2 justify-end order-3">
            <div className="relative w-[180px] h-[360px] rounded-t-[140px] overflow-hidden shadow-xs opacity-90">
              <Image
                src="/assets/images/hero-arch-right.jpg"
                alt="Gentle Pacific ocean waves"
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
