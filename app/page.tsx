"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ShieldCheck,
  Target,
  CheckCircle,
  UserCheck,
  BrainCircuit,
  LifeBuoy,
  Users,
  Award,
  TrendingUp,
  DollarSign,
  RotateCcw,
  Zap,
} from "lucide-react"
import { AnimatedWrapper } from "@/components/animated-wrapper"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ConversionForm } from "@/components/conversion-form"
import { FaqSection } from "@/components/faq-section"
import { InfiniteCarousel } from "@/components/marcas-wrapper"
import FranchiseCardsSection from "@/components/relatorio-section"
import { useState, useEffect } from "react"

export default function FranchiseLandingPage() {
  const scrollToForm = () => {
    const elemento = document.getElementById("formulario-cadastro")
    if (elemento) {
      const offsetTop = elemento.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const scrollToLearnMore = () => {
    const elemento = document.getElementById("como-funciona")
    if (elemento) {
      const offsetTop = elemento.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const ProblemCard = ({ icon: Icon, title, description, delay = 0 }) => (
    <AnimatedWrapper delay={delay}>
      <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F9A51A]/20 via-transparent to-[#F9821A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Icon container */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F9A51A]/20 to-[#F9821A]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-[#F9A51A]" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#F9A51A] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/70 leading-relaxed text-[15px]">{description}</p>
        </div>
      </div>
    </AnimatedWrapper>
  )

  const [queryParams, setQueryParams] = useState("")

  useEffect(() => {
    setQueryParams(window.location.search)
  }, [])

  const howItWorksData = [
    {
      icon: <UserCheck className="h-10 w-10 text-[#F9A51A]" />,
      title: "Você Define o Perfil",
      description:
        "Informa o perfil ideal do franqueado, faixa de investimento, região de interesse e informações estratégicas. Configuração única.",
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-[#F9A51A]" />,
      title: "Nosso Sistema Trabalha",
      description:
        "Consultores especializados conversam com investidores, nossa IA analisa dados e comportamentos, e o sistema identifica matches perfeitos.",
    },
    {
      icon: <Target className="h-10 w-10 text-[#F9A51A]" />,
      title: "Você Recebe o Match",
      description:
        "Recebe notificação apenas quando alguém preenche anamnese completa e bate exatamente com seu perfil. Acessa o contato direto na plataforma.",
    },
    {
      icon: <LifeBuoy className="h-10 w-10 text-[#F9A51A]" />,
      title: "Conversão Real",
      description:
        "Entra em contato direto com quem já quer exatamente seu modelo de negócio. Sem SDR, sem prospecção, sem anúncios.",
    },
  ]

  return (
    <div className="w-full dark-gradient-background text-gray-200 font-sans overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-800/50 bg-transparent">
        <div className="hero-header container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Image src="/franchise-logo.svg" alt="Franchise Store Logo" width={170} height={38} />
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <div className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              <span>100% Ético</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors">
              <Target className="h-4 w-4 text-green-500" />
              <span>Sem Pegadinhas</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Transparente</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-8 md:py-20 lg:py-20">
          <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <AnimatedWrapper delay={0.1}>
                <h1 className="hero-title text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl leading-tight text-balance">
                  Sistema de Demanda Infinita de{" "}
                  <span className="bg-gradient-to-r from-[#F9A51A] to-[#F9821A] bg-clip-text text-transparent">
                    Franqueados™
                  </span>{" "}
                  <span className="underline decoration-[#F9A51A] decoration-2 underline-offset-4">
                    sem gastar com leads frios
                  </span>
                </h1>
              </AnimatedWrapper>
              <AnimatedWrapper delay={0.3}>
                <p className="text-lg text-muted-foreground max-w-2xl hero-description">
                  <span className="bg-gradient-to-r from-[#F9A51A] to-[#F9821A] bg-clip-text text-transparent">
                    Pare de pagar por leads que não convertem.
                    <br />
                  </span>{" "}
                  Receba apenas franqueados qualificados que batem exatamente com seu perfil ideal.
                </p>
              </AnimatedWrapper>
            </div>

            {/* Conversion Form */}
            <AnimatedWrapper delay={0.2}>
              <div className="" id="formulario-cadastro">
                <ConversionForm />
              </div>
            </AnimatedWrapper>
          </div>
          <div className="py-16">
            <AnimatedWrapper delay={0.4}>
              <InfiniteCarousel />
            </AnimatedWrapper>
          </div>
        </section>

        {/* Partnership Banner - Refinado */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9A51A] via-[#F9821A] to-[#F9A51A] opacity-90"></div>
          <div className="relative container mx-auto py-8 px-4 text-center">
            <AnimatedWrapper>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <Award className="h-6 w-6 text-white" />
                <p className="text-white text-lg md:text-xl font-medium flex items-center gap-3 flex-wrap justify-center">
                  <strong className="font-bold">Parceria Exclusiva:</strong> 
                  <span>Condições diferenciadas para clientes da</span>
                  <img 
                    src="https://trunk.v4kuri.com.br/media/user_files/76jaSqPbulSlC2i1Tt1PqaojDCXdUvKc_08e99a620746b1bc2a3490a44c7895406f17af82e6e558c63bb98b47e5aa9b4b.png" 
                    alt="V4 Company" 
                    className="h-6 md:h-7 w-auto"
                  />
                </p>
              </div>
            </AnimatedWrapper>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            {/* Header */}
            <AnimatedWrapper>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Você Conhece Esse{" "}
                  <span className="bg-gradient-to-r from-[#F9A51A] to-[#F9821A] bg-clip-text text-transparent">
                    Ciclo Frustrante?
                  </span>
                </h2>
                <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
                  O modelo tradicional de expansão está quebrado. É hora de uma nova abordagem.
                </p>
              </div>
            </AnimatedWrapper>

            {/* Problems Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <ProblemCard
                icon={Target}
                title="Leads Frios e Curiosos"
                description="Feira, indicação, lead curioso, outro lead curioso... E no fim, quase nada avança. Tudo isso custa tempo, energia e muito dinheiro."
                delay={0.1}
              />

              <ProblemCard
                icon={DollarSign}
                title="Desperdício de Recursos"
                description="R$10.000 por mês em tráfego e SDR, tentando achar uma agulha num palheiro. Alto CAC e baixa conversão."
                delay={0.2}
              />

              <ProblemCard
                icon={RotateCcw}
                title="Falta de Previsibilidade"
                description="Crescimento baseado em sorte, não em estratégia. Sua marca tem potencial, mas está travada por falta de acesso às pessoas certas."
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* Solution Stats - Nova Seção */}
        <section className="py-20 border-t border-gray-800/50">
          <div className="container mx-auto px-4">
            <AnimatedWrapper>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                  A Solução Que{" "}
                  <span className="bg-gradient-to-r from-[#F9A51A] to-[#F9821A] bg-clip-text text-transparent">
                    Transforma Resultados
                  </span>
                </h2>
              </div>
            </AnimatedWrapper>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedWrapper delay={0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F9A51A] to-[#F9821A] bg-clip-text text-transparent mb-2">
                    87%
                  </div>
                  <p className="text-gray-400">Taxa de Conversão</p>
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper delay={0.2}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F9A51A] to-[#F9821A] bg-clip-text text-transparent mb-2">
                    R$0
                  </div>
                  <p className="text-gray-400">Custo com Anúncios</p>
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper delay={0.3}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F9A51A] to-[#F9821A] bg-clip-text text-transparent mb-2">
                    24h
                  </div>
                  <p className="text-gray-400">Tempo até o Match</p>
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper delay={0.4}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F9A51A] to-[#F9821A] bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <p className="text-gray-400">Leads Qualificados</p>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        <FranchiseCardsSection />

        {/* Final CTA Section - Melhorado */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedWrapper>
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1f1f1f] via-[#1f1f1f]/95 to-[#1f1f1f]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#F9A51A]/10 via-transparent to-transparent"></div>
                <div className="relative p-12 md:p-20 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9A51A]/10 border border-[#F9A51A]/30 mb-8">
                    <TrendingUp className="h-4 w-4 text-[#F9A51A]" />
                    <span className="text-sm font-medium text-[#F9A51A]">Transforme sua expansão hoje</span>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-balance text-white mb-6">
                    Pronto para receber{" "}
                    <span className="bg-gradient-to-r from-[#F9A51A] to-[#F9821A] bg-clip-text text-transparent">
                      franqueados qualificados?
                    </span>
                  </h2>

                  <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400 text-balance mb-10">
                    Pare de desperdiçar recursos com leads frios. Receba apenas quem já quer seu modelo de negócio.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#F9A51A] to-[#F9821A] font-bold text-lg h-14 px-10 hover:opacity-90 transition-all duration-300 text-stone-950 shadow-xl hover:shadow-2xl hover:scale-105"
                      onClick={scrollToForm}
                    >
                      Quero Transformar Minha Expansão
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-transparent border-t border-gray-800/50">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Franchise Store. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href={`/termos-de-servico${queryParams}`}
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Termos de Serviço
            </a>
            <a
              href={`/politica-de-privacidade${queryParams}`}
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
