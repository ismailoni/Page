"use client";
import React from "react";
import data from "@/app/components/data.json";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/app/components/ui/accordion";

export default function FAQ() {
  const { FAQs } = data;

  return (
    <section id="7" className="py-20 px-4 md:px-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-[#4BC1F0] tracking-widest text-sm font-medium mb-2">
          EXPLORE FAQs
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Questions, Answered</h2>
        <p className="text-gray-500">
          Find answers to the most frequently asked questions about MSSN Unilag. Whether you&apos;re
          curious about our programs, events, or membership, we&apos;ve got you covered with detailed and
          helpful information to guide you.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto gap-2">
        {FAQs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="border-b bg-[#F7F7F7] px-4 py-2 mb-2 rounded-md">
            <AccordionTrigger className="text-left text-lg font-medium">
              {faq.Q}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base">
              {faq.A}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
