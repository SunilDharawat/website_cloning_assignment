import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="w-full bg-[#E3D9CA] py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <p className="text-[11px] sm:text-[12px] tracking-[0.22em] text-[#555] uppercase font-semibold mb-3">
            HOW WE WORK
          </p>
          <h2 className="font-serif text-[38px] sm:text-[52px] text-[#2B2B2B] font-normal leading-[1.1] max-w-2xl">
            We’re here to make a difference.
          </h2>
        </div>

        {/* 3-Column Content & Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1 Text */}
          <div className="lg:col-span-4 space-y-6">
            <p className="text-[12px] sm:text-[13px] tracking-[0.16em] text-[#2B2B2B] uppercase font-semibold leading-relaxed">
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

          {/* Column 2 Text + CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
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

            <div className="pt-4">
              <Link
                href="#contact"
                className="inline-block text-[12px] tracking-[0.22em] font-medium text-[#2B2B2B] uppercase border-b border-[#2B2B2B] pb-1 hover:text-[#86B3B3] hover:border-[#86B3B3] transition-colors"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>

          {/* Column 3 Photo (Mother and Daughter on Dunes) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] h-[440px] sm:h-[500px] overflow-hidden rounded-xs shadow-xs">
              <Image
                src="/assets/images/how-we-work.jpg"
                alt="Mother and daughter joyfully playing on coastal sand dunes"
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
