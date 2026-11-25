"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { FAQ_DATA, FAQ_SECTION_COPY, WHATSAPP_FAQ_URL } from "@/lib/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-[#F7F4EE] py-24 sm:py-32 md:py-40"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-20 items-start">
        {/* Left Sticky Column */}
        <div className="lg:sticky lg:top-28">
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#8C6B28] mb-4">
            {FAQ_SECTION_COPY.badge}
          </p>
          <h2
            id="faq-heading"
            className="text-[clamp(2rem,4.1vw,3.55rem)] leading-[1.06] tracking-[-0.035em] font-medium text-[#0D1829]"
          >
            {FAQ_SECTION_COPY.title}
          </h2>

          <div className="mt-10 p-6 sm:p-7 rounded-3xl bg-white border border-[#0D1829]/10 shadow-[0_14px_34px_-22px_rgba(9,18,31,0.18)] space-y-5">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              {FAQ_SECTION_COPY.subtitle}
            </p>
            <a
              href={WHATSAPP_FAQ_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-[#09121F] hover:bg-[#162740] text-[#E6CFA0] text-sm font-medium transition-colors cursor-pointer"
            >
              <span>{FAQ_SECTION_COPY.bottomCta}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right Accordion */}
        <div className="divide-y divide-[#0D1829]/12 border-y border-[#0D1829]/12">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full py-6 sm:py-7 flex items-center justify-between gap-6 text-left cursor-pointer group"
                  >
                    <span className="text-lg sm:text-xl font-medium tracking-[-0.02em] text-[#0D1829] group-hover:text-[#8C6B28] transition-colors">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#09121F] border-[#09121F] text-[#E6CFA0] rotate-45"
                          : "border-[#0D1829]/20 text-[#0D1829] group-hover:border-[#8C6B28]"
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-label={item.question}
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <p className="pb-7 pr-8 text-base text-[#475569] leading-relaxed max-w-2xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
