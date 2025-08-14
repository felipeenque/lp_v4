"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedWrapper } from "@/components/animated-wrapper"

const faqs = [
  {
    question: "Como a plataforma encontra a franquia ideal para mim?",
    answer:
      "Nosso algoritmo cruza seu perfil e preferências com dados de desempenho de centenas de redes para indicar as opções mais compatíveis.",
  },
  {
    question: "Preciso pagar alguma coisa para usar a análise inicial?",
    answer:
      "Não. O cadastro e a análise básica são gratuitos. Você só paga se decidir contratar nossos serviços premium.",
  },
  {
    question: "Quanto tempo leva para receber meu match de franquias?",
    answer:
      "Logo após preencher seu perfil, nossa IA entrega uma lista personalizada em alguns segundos, junto com um relatório completo.",
  },
  {
    question: "Meus dados estão seguros? Vocês vendem minhas informações?",
    answer:
      "Levamos sua privacidade a sério. Todas as informações são criptografadas e nunca serão vendidas ou compartilhadas sem consentimento.",
  },
]

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedWrapper>
          <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tighter mb-12">
            Perguntas&nbsp;Frequentes
          </h2>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.1}>
          <Accordion type="single" collapsible className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border rounded-lg overflow-hidden bg-secondary/30"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium hover:bg-secondary/40">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedWrapper>
      </div>
    </section>
  )
}
