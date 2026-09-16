import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const team = [
    "Jennifer Anderson",
    "Heather Williams-Baumgart",
    "Autumn Bodily",
    "Candace Bletscher",
    "Samantha Johnson",
    "Andrea Watkins",
    "Rosa Gomez",
    "Chad Flores",
  ];

  return (
    <footer id="contact" className="w-full bg-[#F6F4EE] border-t border-[#E3D9CA]/40 pt-16 sm:pt-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Office Intro */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative w-56 sm:w-64 h-16">
              <Image
                src="/assets/images/logo.png"
                alt="Conejo Valley Family Counseling"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-[#4A4A4A] text-[14px] sm:text-[15px] font-light leading-[1.75] max-w-sm">
              We want to make getting started simple. You’re welcome to come into
              our office in Newbury Park or schedule virtual appointments from
              anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Column 2: Navigate */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] sm:text-[12px] tracking-[0.22em] text-[#2B2B2B] uppercase font-semibold">
              NAVIGATE
            </h4>
            <ul className="space-y-2.5 text-[14px] text-[#4A4A4A] font-light">
              <li>
                <Link href="/" className="hover:text-[#86B3B3] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#how-we-work"
                  className="hover:text-[#86B3B3] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="hover:text-[#86B3B3] transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-[#86B3B3] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Team */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] sm:text-[12px] tracking-[0.22em] text-[#2B2B2B] uppercase font-semibold">
              OUR TEAM
            </h4>
            <ul className="space-y-2 text-[14px] text-[#4A4A4A] font-light">
              {team.map((member, idx) => (
                <li key={idx}>
                  <Link
                    href="#team"
                    className="hover:text-[#86B3B3] transition-colors block"
                  >
                    {member}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] sm:text-[12px] tracking-[0.22em] text-[#2B2B2B] uppercase font-semibold">
              CONTACT
            </h4>
            <div className="space-y-2.5 text-[14px] text-[#4A4A4A] font-light leading-relaxed">
              <p>
                925 Broadbeck Dr<br />
                Suites 200 and 225<br />
                Newbury Park, CA 91320
              </p>
              <p>
                <a
                  href="mailto:info@conejovalleycounseling.com"
                  className="hover:text-[#86B3B3] transition-colors block"
                >
                  info@conejovalleycounseling.com
                </a>
              </p>
              <p>
                <a
                  href="tel:8052423120"
                  className="hover:text-[#86B3B3] transition-colors block"
                >
                  805.242.3120
                </a>
              </p>
              <p className="italic text-[13px] text-[#666] pt-2">
                Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp;
                Simi Valley
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Teal Legal Strip */}
      <div className="w-full bg-[#749D9D] py-4 text-center px-6">
        <p className="text-white text-[12px] sm:text-[13px] font-light tracking-wide">
          <Link href="#terms" className="hover:underline">Terms</Link>
          {" "}|{" "}
          <Link href="#privacy" className="hover:underline">Privacy Policy</Link>
          {" "}|{" "}
          <Link href="#disclaimer" className="hover:underline">Disclaimer</Link>
          {" "}|{" "}
          <span>Website by Walker Strategy Co.</span>
        </p>
      </div>
    </footer>
  );
}
