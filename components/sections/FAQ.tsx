"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "How early should we involve Unreal Atelier?",
    answer: "Ideally at concept stage, so previs and virtual production planning can reduce risk and save time during shoots.",
  },
  {
    question: "Do you support remote collaboration?",
    answer: "Yes. We run remote-friendly pipelines for reviews, scene updates, and milestone approvals.",
  },
  {
    question: "Can you integrate with existing production teams?",
    answer: "Absolutely. We often collaborate with in-house VFX supervisors, directors, and agency partners.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-[40px] md:px-8 md:py-[80px]">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-bold md:text-4xl">FAQ</h2>
        <div className="mt-8 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={item.question} className="rounded-lg border border-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-semibold"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                >
                  {item.question}
                  <span className="text-white/70">{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="px-5 pb-5 text-white/70">{item.answer}</p>
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
