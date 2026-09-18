import React from "react";
import Image from "next/image";

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="who-we-help-wrapper w-full bg-[#F6F4EE] border-t border-[#E3D9CA]/40 overflow-hidden">
      <div className="who-we-help-grid w-full">
        
        {/* Title: Who we help (Desktop: 1/2/3/10, Mobile: 1/2/3/10) */}
        <div className="who-grid-title flex items-end">
          <h2 className="font-serif text-[38px] sm:text-[50px] text-[#2B2B2B] font-normal tracking-tight leading-none">
            Who we{" "}
            <span className="font-cursive text-[#86B3B3] text-[54px] sm:text-[72px] font-normal leading-none inline-block align-baseline -mb-2">
              help
            </span>
          </h2>
        </div>

        {/* 1. Adults Image (Desktop: 4/5/15/12, Mobile: 4/2/13/10) */}
        <div className="who-grid-img-adults relative w-full h-full min-h-[300px] sm:min-h-0 rounded-none overflow-hidden shadow-xs">
          <Image
            src="/assets/images/who-adults.jpg"
            alt="Two women sitting on bench facing peaceful water"
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 33vw, 90vw"
          />
        </div>

        {/* 1. Adults Content (Desktop: 16/5/21/12, Mobile: 14/2/20/10) */}
        <div className="who-grid-text-adults flex flex-col justify-start pt-2">
          <h3 className="font-serif text-[26px] sm:text-[28px] text-[#2B2B2B] font-normal mb-3">
            Adults
          </h3>
          <p className="text-[#4A4A4A] text-[15px] font-light leading-[1.7]">
            Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.
          </p>
        </div>

        {/* 2. Couples Image (Desktop: 4/12/15/19, Mobile: 21/2/30/10) */}
        <div className="who-grid-img-couples relative w-full h-full min-h-[300px] sm:min-h-0 rounded-none overflow-hidden shadow-xs">
          <Image
            src="/assets/images/who-couples.jpg"
            alt="Smiling couple embracing warmly on the beach"
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 33vw, 90vw"
          />
        </div>

        {/* 2. Couples Content (Desktop: 16/12/22/19, Mobile: 31/2/37/10) */}
        <div className="who-grid-text-couples flex flex-col justify-start pt-2">
          <h3 className="font-serif text-[26px] sm:text-[28px] text-[#2B2B2B] font-normal mb-3">
            Couples
          </h3>
          <p className="text-[#4A4A4A] text-[15px] font-light leading-[1.7]">
            Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.
          </p>
        </div>

        {/* 3. Children & Teens Image (Desktop: 4/19/15/26, Mobile: 38/2/47/10) */}
        <div className="who-grid-img-children relative w-full h-full min-h-[300px] sm:min-h-0 rounded-none overflow-hidden shadow-xs">
          <Image
            src="/assets/images/who-children.jpg"
            alt="Older brother lifting laughing younger sister on beach"
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 33vw, 90vw"
          />
        </div>

        {/* 3. Children & Teens Content (Desktop: 16/19/22/26, Mobile: 48/2/54/10) */}
        <div className="who-grid-text-children flex flex-col justify-start pt-2">
          <h3 className="font-serif text-[26px] sm:text-[28px] text-[#2B2B2B] font-normal mb-3">
            Children &amp; Teens
          </h3>
          <p className="text-[#4A4A4A] text-[15px] font-light leading-[1.7]">
            Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.
          </p>
        </div>

      </div>
    </section>
  );
}
