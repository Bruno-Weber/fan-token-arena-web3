
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import SectionFadeIn from "./SectionFadeIn";
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const { t } = useTranslation();
  const faqs = [
    {
      question: t('faqSection.question1'),
      answer: t('faqSection.answer1')
    },
    {
      question: t('faqSection.question2'),
      answer: t('faqSection.answer2')
    },
    {
      question: t('faqSection.question3'),
      answer: t('faqSection.answer3')
    },
    {
      question: t('faqSection.question4'),
      answer: t('faqSection.answer4')
    },
    {
      question: t('faqSection.question5'),
      answer: t('faqSection.answer5')
    }
  ];

  return (
    <SectionFadeIn className="bg-[#0A0A0A] py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-sport-purple mr-2">&lt;</span>
            {t('faqSection.title')}
            <span className="text-sport-purple ml-2">&gt;</span>
          </h2>
          <p className="text-lg text-white/70">
            {t('faqSection.subtitle')}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-xl bg-[#1A1A1A] overflow-hidden animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.07}s` }}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                  <div className="flex items-center gap-3">
                    <Plus className="h-5 w-5 text-sport-purple flex-shrink-0" />
                    <span className="text-white font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionFadeIn>
  );
};

export default FAQSection;
