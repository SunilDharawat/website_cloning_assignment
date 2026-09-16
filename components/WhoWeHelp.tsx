import React from "react";
import Image from "next/image";

interface CardItem {
  title: string;
  image: string;
  alt: string;
  description: string;
}

export default function WhoWeHelp() {
  const cards: CardItem[] = [
    {
      title: "Adults",
      image: "/assets/images/who-adults.jpg",
      alt: "Two women sitting on bench facing peaceful water",
      description:
        "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
    },
    {
      title: "Couples",
      image: "/assets/images/who-couples.jpg",
      alt: "Smiling couple embracing warmly on the beach",
      description:
        "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
    },
    {
      title: "Children & Teens",
      image: "/assets/images/who-children.jpg",
      alt: "Older brother lifting laughing younger sister on beach",
      description:
        "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
    },
  ];

  return (
    <section id="who-we-help" className="w-full bg-[#F6F4EE] py-16 sm:py-24 border-t border-[#E3D9CA]/40">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        
        {/* Section Title with Cursive Accent */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-serif text-[38px] sm:text-[50px] text-[#2B2B2B] font-normal tracking-tight">
            Who we{" "}
            <span className="font-cursive text-[#86B3B3] text-[54px] sm:text-[72px] font-normal leading-none inline-block align-baseline -mb-2">
              help
            </span>
          </h2>
        </div>

        {/* 3 Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col group">
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#E3D9CA]/30 shadow-xs">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-[26px] sm:text-[28px] text-[#2B2B2B] font-normal mt-6 mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#4A4A4A] text-[15px] font-light leading-[1.7]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
