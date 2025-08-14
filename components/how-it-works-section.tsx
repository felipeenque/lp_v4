import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { AnimatedWrapper } from "./animated-wrapper"

const Step = ({
  stepNumber,
  title,
  items,
  imageUrl,
  imageAlt,
  reverse = false,
}: {
  stepNumber: string
  title: string
  items: string[]
  imageUrl: string
  imageAlt: string
  reverse?: boolean
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
    <AnimatedWrapper
      className={`relative w-full h-full flex items-center justify-center ${reverse ? "md:order-last" : ""}`}
      delay={0.2}
    >
      <div className="bg-secondary/30 border border-border p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          width={600}
          height={450}
          className="rounded-xl object-contain w-full"
        />
      </div>
    </AnimatedWrapper>
    <AnimatedWrapper className="space-y-6" delay={0.1}>
      <p className="text-sm font-bold text-[#F9A51A] tracking-widest">{stepNumber}</p>
      <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <Check className="h-5 w-5 text-[#F9A51A]" />
            </div>
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        size="lg"
        className="bg-transparent border-gray-600 text-gray-300 font-medium h-12 px-6 hover:bg-gray-800 hover:text-white"
      >
        Saiba mais sobre a análise
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </AnimatedWrapper>
  </div>
)

export function HowItWorksSection() {
  const steps = [
    {
      stepNumber: "PASSO 01",
      title: "Match Inteligente e Personalizado",
      items: [
        "Análise de compatibilidade baseada em 47 critérios objetivos.",
        "Cruzamos seu perfil, experiência e capital com centenas de franquias.",
        "Algoritmo de IA que considera até o alinhamento cultural para o seu sucesso.",
        "Receba uma pontuação de compatibilidade clara e objetiva para cada opção.",
      ],
      imageUrl: "https://trunk.v4kuri.com.br/media/user_files/HgkRmvSCSLVM7LGQoRjQeQCyxp9R8nbX_0b22d2ab938a16cb88ae3dd23a5e3308c5c52b3773330eb87e28cd1329426a1c.svg",
      imageAlt: "Interface de Match Inteligente com IA",
    },
    {
      stepNumber: "PASSO 02",
      title: "Dados Financeiros Transparentes",
      items: [
        "Acesso a projeções de ROI e tempo de retorno baseados em dados reais.",
        "Análise de custos completa, incluindo taxas ocultas e capital de giro.",
        "Comparamos o desempenho financeiro com a média do setor.",
        "Chega de promessas vazias, tome decisões com base em números.",
      ],
      imageUrl: "https://trunk.v4kuri.com.br/media/user_files/zm9eCCYQj1ZUj1QXFhgnCNaSmXlQVRw5_e9a6df783c1b120c00bdb5b9df4b47717bf64648462d62626118e58a5e8dc804.svg",
      imageAlt: "Painel com dados financeiros de franquias",
    },
    {
      stepNumber: "PASSO 03",
      title: "Proteção Contra Riscos",
      items: [
        "Identificamos 'red flags' e cláusulas abusivas em contratos (COF).",
        "Alertamos sobre franqueadoras com histórico problemático ou litígios.",
        "Análise de reputação da marca e satisfação de outros franqueados.",
        "Invista com a segurança de quem conhece os bastidores do mercado.",
      ],
      imageUrl: "https://trunk.v4kuri.com.br/media/user_files/XqLeSDaSPwysSC0qgq3kq4BPHUyLAc8b_2bc206ba64951ec6eeef495ff26c502805f88cd524def52f300fb7576900fa90.svg",
      imageAlt: "Relatório de análise de riscos com alertas",
    },
    {
      stepNumber: "PASSO 04",
      title: "Educação, Não Vendas",
      items: [
        "Nosso foco é capacitar você com informação de qualidade.",
        "Oferecemos guias, checklists e suporte de especialistas isentos.",
        "Entenda os prós e contras de cada modelo de negócio.",
        "Seu sucesso a longo prazo é a nossa principal métrica.",
      ],
      imageUrl: "https://trunk.v4kuri.com.br/media/user_files/gB0rgIEfOIbjNWaC151u72lab8DPEAKM_93840414b1df628fd41a1ece9b63bd1bf12970a249c6c7082842582ed5a7eaa7.svg",
      imageAlt: "Plataforma de educação para novos empreendedores",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedWrapper className="text-center mb-16 md:mb-20">
          <h3 className="text-base font-semibold text-[#F9A51A] tracking-wider uppercase">
            Nossa Solução: Como Funciona
          </h3>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter text-white text-balance">
            Um processo simples, transparente e focado em dados para garantir a sua segurança e o seu sucesso.
          </h2>
        </AnimatedWrapper>
        <div className="space-y-20 md:space-y-28">
          {steps.map((step, index) => (
            <Step key={step.title} {...step} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
