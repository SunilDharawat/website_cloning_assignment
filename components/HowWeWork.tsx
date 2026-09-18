import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="how-we-work-wrapper w-full bg-[#E3D9CA] border-t border-[#D7CCBC]/50 overflow-hidden">
      <div className="how-we-work-grid w-full">
        
        {/* Section Heading (Desktop: 2/3/6/18, Mobile: 1/2/5/10) */}
        <div className="hww-grid-heading">
          <p className="text-[11px] sm:text-[12px] tracking-[0.22em] text-[#555] uppercase font-semibold mb-3">
            HOW WE WORK
          </p>
          <h2 className="font-serif text-[38px] sm:text-[46px] xl:text-[50px] text-[#2B2B2B] font-normal leading-[1.1]">
            We’re here to make a difference.
          </h2>
        </div>

        {/* Column 1 Text (Desktop: 6/3/17/10, Mobile: 5/2/15/10) */}
        <div className="hww-grid-col1 flex flex-col justify-start">
          <p className="text-[12px] sm:text-[13px] tracking-[0.16em] text-[#2B2B2B] uppercase font-semibold leading-relaxed mb-4">
            THE CLIENTS WE WORK WITH ARE BALANCING SO MANY THINGS AT ONCE, IT’S
            OFTEN HARD FOR THEM TO PUT THEMSELVES FIRST.
          </p>
          <p className="text-[#3F3F3F] text-[15px] sm:text-[16px] font-light leading-[1.75]">
            Here, your needs are always top priority. Our team takes the time to
            deeply listen to our clients in order to truly understand their story
            and their struggles. We recognize that no two people are the same
            and that personalized therapy means an intentional, tailored
            approach. (You won’t find anything “one-size-fits-all” here.) If
            you’re ready to do the work, we’re ready to help.
          </p>
        </div>

        {/* Column 2 Text (Desktop: 6/11/17/18, Mobile: 15/2/25/10) */}
        <div className="hww-grid-col2 flex flex-col justify-start">
          <p className="text-[#3F3F3F] text-[15px] sm:text-[16px] font-light leading-[1.75]">
            Sometimes we may gently challenge you to look at things differently
            and other times we may explore your emotions, all while encouraging
            you to practice what you’ve learned in your daily life. We take what
            we do seriously because we know how important it is for you to heal
            from what’s hurting you, discover a fulfilling life, and build
            meaningful relationships. Our goal is to walk alongside you in this
            journey, offering support and guidance as you uncover your strengths
            and embrace what the future can hold for you.
          </p>
        </div>

        {/* CTA Link Button (Desktop: 17/3/20/10, Mobile: 25/2/28/10) */}
        <div className="hww-grid-cta">
          <Link
            href="#contact"
            className="animated-underline-btn text-[12px] tracking-[0.22em] font-medium uppercase"
          >
            LEARN MORE ABOUT US
          </Link>
        </div>

        {/* Dune Photo: Mother & Daughter (Desktop: 1/19/25/27, Mobile: 26/2/37/10) */}
        <div className="hww-grid-img relative w-full h-full min-h-[320px] sm:min-h-0 rounded-none overflow-hidden shadow-xs">
          <Image
            src="/assets/images/how-we-work.jpg"
            alt="Mother and daughter joyfully playing on coastal sand dunes"
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 35vw, 90vw"
          />
        </div>

      </div>
    </section>
  );
}
