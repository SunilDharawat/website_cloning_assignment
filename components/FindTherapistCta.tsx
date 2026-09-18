import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FindTherapistCta() {
  return (
    <section className="find-cta-wrapper w-full bg-[#F6F4EE] border-t border-[#E3D9CA]/40 overflow-hidden">
      <div className="find-cta-grid w-full">
        
        {/* 1. Left image (Desktop: 2/1/15/6, Mobile: 1/2/8/10) */}
        <div className="find-cta-img-left relative w-full h-full min-h-[260px] sm:min-h-0 rounded-none overflow-hidden">
          <Image
            src="/assets/images/find-arch-left.jpg"
            alt="Therapy client walking peacefully along beach"
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 25vw, 90vw"
          />
        </div>

        {/* 2. Heading (Desktop: 1/7/6/19, Mobile: 8/2/13/10) */}
        <div className="find-cta-heading">
          <p className="text-[11px] sm:text-[12px] tracking-[0.22em] text-[#555] uppercase font-semibold mb-3">
            SCHEDULE AN APPOINTMENT
          </p>
          <h2 className="font-serif text-[38px] sm:text-[48px] xl:text-[52px] text-[#2B2B2B] font-normal leading-[1.1]">
            Find a therapist who is the right fit for{" "}
            <span className="font-cursive text-[#86B3B3] text-[54px] sm:text-[76px] font-normal leading-none inline-block align-baseline -mb-2">
              you.
            </span>
          </h2>
        </div>

        {/* 3. Paragraph 1 (Desktop: 6/7/12/19, Mobile: 13/2/21/10) */}
        <div className="find-cta-p1">
          <p className="text-[#4A4A4A] text-[15px] sm:text-[16px] font-light leading-[1.75]">
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>
        </div>

        {/* 4. Paragraph 2 (Desktop: 12/7/14/19, Mobile: 21/2/24/10) */}
        <div className="find-cta-p2">
          <p className="text-[#4A4A4A] text-[15px] sm:text-[16px] font-light leading-[1.75]">
            Click the button below to schedule an appointment.
          </p>
        </div>

        {/* 5. Book now button (Desktop: 14/7/17/12, Mobile: 24/2/27/10) */}
        <div className="find-cta-btn">
          <Link
            href="#contact"
            className="w-[160px] h-[54px] rounded-[50%] border border-[#4A4A4A] hover:bg-[#2B2B2B] hover:text-white flex items-center justify-center text-[12px] tracking-[0.2em] transition-all duration-300 uppercase font-medium text-[#2B2B2B]"
          >
            BOOK NOW
          </Link>
        </div>

        {/* 6. Right image (Desktop: 1/20/17/27, Mobile: 27/2/34/10) */}
        <div className="find-cta-img-right relative w-full h-full min-h-[260px] sm:min-h-0 rounded-none overflow-hidden">
          <Image
            src="/assets/images/find-arch-right.jpg"
            alt="Supportive therapist walking along shore"
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 30vw, 90vw"
          />
        </div>

      </div>
    </section>
  );
}
