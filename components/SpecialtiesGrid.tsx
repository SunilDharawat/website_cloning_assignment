import React from "react";
import Link from "next/link";

export default function SpecialtiesGrid() {
  return (
    <section id="specialties" className="specialties-wrapper w-full bg-white overflow-hidden">
      <div className="specialties-fluid-grid w-full">
        
        {/* Section Heading (Desktop: 1/3/6/9, Mobile: 1/2/5/10) */}
        <div className="spec-grid-heading">
          <h3 className="font-serif text-[38px] sm:text-[46px] xl:text-[48px] text-[#2B2B2B] font-normal leading-[1.05]">
            Our{" "}
            <span className="font-cursive text-[#86B3B3] text-[56px] sm:text-[72px] font-normal leading-none inline-block align-baseline -mb-2">
              specialties
            </span>
            <br />
            include…
          </h3>
        </div>

        {/* Card 1: Trauma (Desktop: 1/10/5/17, Mobile: 5/2/11/10) */}
        <div className="spec-grid-card1 flex flex-col justify-start">
          <h4 className="font-serif text-[26px] sm:text-[28px] text-[#2B2B2B] font-normal mb-2">
            Trauma
          </h4>
          <p className="text-[#4A4A4A] text-[15px] font-light leading-[1.75] mb-4">
            We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.
          </p>
          <div>
            <Link
              href="#contact"
              className="animated-underline-btn text-[11px] tracking-[0.22em] font-medium uppercase"
            >
              LEARN MORE
            </Link>
          </div>
        </div>

        {/* Card 2: EMDR (Desktop: 1/18/5/25, Mobile: 11/2/17/10) */}
        <div className="spec-grid-card2 flex flex-col justify-start">
          <h4 className="font-serif text-[26px] sm:text-[28px] text-[#2B2B2B] font-normal mb-2">
            EMDR
          </h4>
          <p className="text-[#4A4A4A] text-[15px] font-light leading-[1.75] mb-4">
            Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.
          </p>
          <div>
            <Link
              href="#contact"
              className="animated-underline-btn text-[11px] tracking-[0.22em] font-medium uppercase"
            >
              LEARN MORE
            </Link>
          </div>
        </div>

        {/* Card 3: Dissociation (Desktop: 5/10/10/17, Mobile: 17/2/23/10) */}
        <div className="spec-grid-card3 flex flex-col justify-start">
          <h4 className="font-serif text-[26px] sm:text-[28px] text-[#2B2B2B] font-normal mb-2">
            Dissociation
          </h4>
          <p className="text-[#4A4A4A] text-[15px] font-light leading-[1.75] mb-4">
            The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.
          </p>
          <div>
            <Link
              href="#contact"
              className="animated-underline-btn text-[11px] tracking-[0.22em] font-medium uppercase"
            >
              LEARN MORE
            </Link>
          </div>
        </div>

        {/* Card 4: Special Needs Parenting (Desktop: 5/18/10/25, Mobile: 23/2/30/10) */}
        <div className="spec-grid-card4 flex flex-col justify-start">
          <h4 className="font-serif text-[26px] sm:text-[28px] text-[#2B2B2B] font-normal mb-2">
            Special Needs Parenting
          </h4>
          <p className="text-[#4A4A4A] text-[15px] font-light leading-[1.75] mb-4">
            Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.
          </p>
          <div>
            <Link
              href="#contact"
              className="animated-underline-btn text-[11px] tracking-[0.22em] font-medium uppercase"
            >
              LEARN MORE
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
