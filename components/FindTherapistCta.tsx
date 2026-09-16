import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FindTherapistCta() {
  return (
    <section className="w-full bg-[#F6F4EE] py-20 sm:py-28 border-t border-[#E3D9CA]/40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Arched Photo */}
          <div className="hidden lg:flex lg:col-span-3 justify-start">
            <div className="relative w-[240px] xl:w-[280px] h-[360px] xl:h-[420px] rounded-t-[160px] overflow-hidden shadow-xs">
              <Image
                src="/assets/images/find-arch-left.jpg"
                alt="Therapy client walking peacefully along beach"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Middle Content */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left px-2 sm:px-6">
            <p className="text-[11px] sm:text-[12px] tracking-[0.22em] text-[#555] uppercase font-semibold mb-6">
              SCHEDULE AN APPOINTMENT
            </p>

            <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[54px] text-[#2B2B2B] font-normal leading-[1.1] mb-6">
              Find a therapist who is the right fit for{" "}
              <span className="font-cursive text-[#86B3B3] text-[56px] sm:text-[76px] font-normal leading-none inline-block align-baseline -mb-2">
                you.
              </span>
            </h2>

            <p className="text-[#4A4A4A] text-[15px] sm:text-[16px] font-light leading-[1.75] mb-4">
              Coming to therapy is a courageous decision, and connecting with the
              right kind of therapist makes all the difference. We understand
              that your journey is personal, and we&apos;re here to support you
              with care and understanding every step of the way. Each member of
              our team brings dedicated expertise and a commitment to support you
              in your struggles. We want you to feel prioritized, understood, and
              empowered.
            </p>

            <p className="text-[#4A4A4A] text-[15px] sm:text-[16px] font-light leading-[1.75] mb-8">
              Click the button below to schedule an appointment.
            </p>

            <div>
              <Link
                href="#contact"
                className="inline-block border border-[#2B2B2B] hover:bg-[#86B3B3] hover:border-[#86B3B3] hover:text-white px-9 py-3 rounded-full text-[12px] tracking-[0.2em] transition-all duration-300 uppercase font-medium"
              >
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Right Arched Photo */}
          <div className="hidden lg:flex lg:col-span-3 justify-end">
            <div className="relative w-[240px] xl:w-[280px] h-[360px] xl:h-[420px] rounded-t-[160px] overflow-hidden shadow-xs">
              <Image
                src="/assets/images/find-arch-right.jpg"
                alt="Supportive therapist walking along shore"
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
