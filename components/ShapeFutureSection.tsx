import React from "react";
import Image from "next/image";

export default function ShapeFutureSection() {
  return (
    <section className="shape-future-wrapper w-full bg-white overflow-hidden">
      <div className="shape-future-grid w-full">
        
        {/* Photo Left (Desktop: 1/1/15/15, Mobile: 1/1/8/11) */}
        <div className="sf-grid-img relative w-full h-full min-h-[300px] sm:min-h-0 rounded-none overflow-hidden">
          <Image
            src="/assets/images/shape-future.jpg"
            alt="Family standing together by ocean surf"
            fill
            className="object-cover object-[15%_center]"
            sizes="(min-width: 768px) 55vw, 100vw"
            priority
          />
        </div>

        {/* Text Right (Desktop: 6/15/15/25, Mobile: 8/2/14/10) */}
        <div className="sf-grid-text">
          <h2 className="font-serif text-[34px] sm:text-[46px] xl:text-[52px] text-[#2B2B2B] font-normal leading-[1.15]">
            Honoring where you’ve been{" "}
            <span className="font-cursive text-[#86B3B3] text-[52px] sm:text-[72px] font-normal leading-none inline-block align-baseline -mb-2">
              &amp;
            </span>{" "}
            helping shape where you’re headed.
          </h2>
        </div>

      </div>
    </section>
  );
}
