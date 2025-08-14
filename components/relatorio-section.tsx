"use client"

import { TrendingUp, Users, Target, Zap, MessageSquare } from "lucide-react"
import { AnimatedWrapper } from "@/components/animated-wrapper"

const FeatureItem = ({ icon: Icon, title, description, delay = 0 }) => (
  <AnimatedWrapper delay={delay}>
    <div className="text-center group relative">
      <div className="flex justify-center mb-6">
        <Icon className="w-8 h-8 text-[#F9A51A] group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-lg font-medium text-white mb-3 group-hover:text-[#F9A51A] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
    </div>
  </AnimatedWrapper>
)

export default function FranchiseCardsSection() {
  const features = [
    {
      icon: Target,
      title: "Matches Perfeitos",
      description: "Apenas investidores pré-qualificados e alinhados com sua marca, faixa de investimento e região.",
    },
    {
      icon: Zap,
      title: "Inteligência Artificial",
      description: "Algoritmo cruza dados reais, comportamento e intenção para encontrar o fit perfeito.",
    },
    {
      icon: Users,
      title: "Sem Desperdício",
      description:
        "Você só paga por oportunidades reais, não por volume vazio. Cada match é uma validação de compatibilidade.",
    },
    {
      icon: TrendingUp,
      title: "Resultados Previsíveis",
      description: "Com nossa base de dados qualificada, você tem previsibilidade no seu pipeline de expansão.",
    },
    {
      icon: MessageSquare,
      title: "Suporte Especializado",
      description: "Nossa equipe te acompanha em todo processo de match e negociação para garantir o melhor resultado.",
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <AnimatedWrapper>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">A Revolução na Expansão</h2>
            <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed mb-4">
              E se você{" "}
              <span className="bg-gradient-to-r from-[#F9A51A] to-[#F9821A] bg-clip-text text-transparent font-semibold">
                não precisasse mais correr atrás
              </span>
              , e sim, simplesmente{" "}
              <span className="bg-gradient-to-r from-[#F9A51A] to-[#F9821A] bg-clip-text text-transparent font-semibold">
                escolher quando e com quem quer falar?
              </span>
            </p>
            <p className="text-lg text-white/50">Sem mídia. Sem achismo. Sem lead ruim.</p>
          </div>
        </AnimatedWrapper>

        {/* Features Grid - Layout igual ao Reflect AI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 relative">
          {/* Linhas horizontais com gradiente */}
          <div className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block" />

          {/* Primeira linha - 3 itens */}
          <FeatureItem
            icon={features[0].icon}
            title={features[0].title}
            description={features[0].description}
            delay={0.1}
          />

          {/* Linha vertical entre item 1 e 2 */}
          <div className="absolute top-0 left-1/3 w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

          <FeatureItem
            icon={features[1].icon}
            title={features[1].title}
            description={features[1].description}
            delay={0.2}
          />

          {/* Linha vertical entre item 2 e 3 */}
          <div className="absolute top-0 left-2/3 w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

          <FeatureItem
            icon={features[2].icon}
            title={features[2].title}
            description={features[2].description}
            delay={0.3}
          />
        </div>

        {/* Segunda linha - 2 itens centralizados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-16 max-w-4xl mx-auto relative">
          {/* Linha horizontal para segunda fileira */}
          <div className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block" />

          <FeatureItem
            icon={features[3].icon}
            title={features[3].title}
            description={features[3].description}
            delay={0.4}
          />

          {/* Linha vertical entre os 2 últimos itens */}
          <div className="absolute top-0 left-1/2 w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

          <FeatureItem
            icon={features[4].icon}
            title={features[4].title}
            description={features[4].description}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  )
}
