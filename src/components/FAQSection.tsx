import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "O que são fan tokens?",
      answer: "Fan tokens são ativos digitais que oferecem aos torcedores direitos de participação e benefícios exclusivos em seus clubes favoritos, como votar em decisões do clube, acesso a conteúdo exclusivo e recompensas especiais."
    },
    {
      question: "Como posso adquirir fan tokens?",
      answer: "Você pode adquirir fan tokens diretamente através da nossa plataforma após o lançamento. O processo é simples e seguro, basta criar uma conta e seguir as instruções de compra."
    },
    {
      question: "Que benefícios os clubes têm ao criar fan tokens?",
      answer: "Os clubes podem gerar novas receitas, aumentar o engajamento dos torcedores, criar uma economia digital própria e ter acesso a dados valiosos sobre sua base de fãs."
    },
    {
      question: "Como funciona a governança através dos fan tokens?",
      answer: "Os detentores de fan tokens podem participar em votações oficiais do clube, influenciando decisões como design de uniformes, música do estádio e outras iniciativas definidas pelo clube."
    },
    {
      question: "É seguro investir em fan tokens?",
      answer: "Nossa plataforma utiliza tecnologia blockchain de ponta e segue rigorosos protocolos de segurança. No entanto, como qualquer ativo digital, recomendamos que os usuários estudem bem antes de investir."
    }
  ];

  return (
    <section id="faq" className="section-gradient-bg py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-sport-purple mr-2">&lt;</span>
            FAQ
            <span className="text-sport-purple ml-2">&gt;</span>
          </h2>
          <p className="text-lg text-white/70">
            Tire suas dúvidas sobre nossa plataforma
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-xl bg-web3-dark/50 overflow-hidden"
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
    </section>
  );
};

export default FAQSection;
