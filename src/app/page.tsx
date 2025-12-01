"use client";

import { 
  ArrowRight, 
  Search, 
  FileText, 
  Palette, 
  Code, 
  Rocket,
  Zap,
  Smartphone,
  Shield,
  Headphones,
  Network,
  CheckCircle2,
  Instagram,
  Mail
} from "lucide-react";

// Componente do ícone do WhatsApp
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  const whatsappNumber = "5585996827671";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const whatsappDiagnostico = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20gratuito%20do%20meu%20site.`;

  return (
    <main className="min-h-screen">
      {/* Hero Section - Centralizado */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/fundosecao1.png)',
          }}
        />
        {/* Overlay gradient para melhorar legibilidade com cores institucionais */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e1b4b]/60 via-[#312e81]/50 to-[#1e1b4b]/60" />
        
        {/* Borrado no centro inferior na cor institucional */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/30 rounded-full blur-[120px] opacity-60"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Se destaque dos concorrentes e cresça seu negócio investindo em um{" "}
            <span className="text-gradient">site profissional</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto">
            Desenvolvo <span className="text-primary font-semibold">landing pages convencionais</span> e <span className="text-primary font-semibold">sites institucionais</span>, mas também trabalho com <span className="text-primary font-semibold">IA integrada</span> e <span className="text-primary font-semibold">agendamento integrado</span>. Faço prévias sem compromisso para você ver o resultado antes de decidir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappDiagnostico}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              DIAGNÓSTICO GRATUITO
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/davilucas.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
            >
              VER PORTFÓLIO
            </a>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all z-50"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="h-8 w-8" />
        </a>
      </section>

      {/* First Impression Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-card rounded-lg border border-primary/20 overflow-hidden">
                <img 
                  src="/secao2/felicidade.png" 
                  alt="Pessoas felizes" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Em um mundo cada vez mais conectado, um site profissional é a primeira impressão que você deixa nos seus clientes
              </h2>
              <p className="text-lg text-foreground/80">
                E essa impressão precisa ser a melhor possível. O design, a funcionalidade, a rapidez – tudo conta. Quando você tem um site profissional, seja uma <span className="font-semibold text-primary">landing page convencional</span> ou um <span className="font-semibold text-primary">site institucional</span>, com <span className="font-semibold text-primary">IA integrada</span> e <span className="font-semibold text-primary">agendamento integrado</span>, ele não apenas atrai visitantes, mas transforma essas visitas em clientes e esses clientes em faturamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 bg-gradient-dark relative overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 border border-primary/30 rounded-lg text-sm text-primary/80 bg-card/50">
              AS SOLUÇÕES PARA O SEU NEGÓCIO
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">
                O meu compromisso é com o seu resultado.
              </h2>
              <p className="text-lg text-foreground/80 mb-4">
                Desenvolvo <span className="font-semibold text-primary">landing pages convencionais</span> e <span className="font-semibold text-primary">sites institucionais</span> que não são apenas visualmente atrativos, mas pensados para <span className="font-semibold text-primary">entregar resultados reais</span>.
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                Mas também trabalho com <span className="font-semibold text-primary">IA integrada</span> e <span className="font-semibold text-primary">agendamento integrado</span>, oferecendo soluções completas e modernas para o seu negócio.
              </p>
              <p className="text-lg text-foreground/80 mb-8">
                Seja você um empreendedor, infoprodutor ou empresa, posso ajudá-lo(a) com:
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="p-4 bg-card/50 rounded-lg border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="inline-block px-4 py-2 border border-primary/30 rounded-lg text-sm text-primary/80 bg-background/50 mb-3">
                    Landing Pages
                  </div>
                  <p className="text-foreground/70">
                    Para lançamentos, produtos ou serviços. Páginas focadas em captar leads e aumentar suas vendas. <span className="font-semibold text-primary">Com agendamento integrado + IA</span>.
                  </p>
                </div>
                
                <div className="p-4 bg-card/50 rounded-lg border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="inline-block px-4 py-2 border border-primary/30 rounded-lg text-sm text-primary/80 bg-background/50 mb-3">
                    Sites Institucionais
                  </div>
                  <p className="text-foreground/70">
                    Para dar credibilidade ao seu negócio com um site que reflita sua identidade, valores e diferenciais. <span className="font-semibold text-primary">Com agendamento integrado + IA</span>.
                  </p>
                </div>
              </div>
              
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all hover:scale-105"
              >
                Peça sua prévia sem compromisso
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="relative flex items-center justify-center">
              <img 
                src="/secao3/imagemsecao3.png" 
                alt="Notebook com imagem" 
                className="w-full h-auto max-w-full object-contain animate-bounce-slow"
              />
            </div>
          </div>

          {/* Pillars Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Esses são os pilares que irão guiar o desenvolvimento do seu site profissional:
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Zap,
                title: "Performance e Otimização",
                description: "Sites rápidos e otimizados para oferecer a melhor experiência possível aos seus visitantes."
              },
              {
                icon: Palette,
                title: "Design Personalizado",
                description: "Chega de modelos prontos. Cada projeto é único e reflete a identidade do seu negócio."
              },
              {
                icon: Smartphone,
                title: "Layout Responsivo",
                description: "Funciona perfeitamente em qualquer dispositivo, do desktop ao smartphone."
              },
              {
                icon: Shield,
                title: "Segurança",
                description: "Proteção de dados e informações com as melhores práticas de segurança."
              },
              {
                icon: Headphones,
                title: "Suporte",
                description: "Atendimento dedicado para garantir que tudo funcione perfeitamente."
              },
              {
                icon: Network,
                title: "Integrações",
                description: "Conecte seu site com as ferramentas que você já usa no dia a dia."
              }
            ].map((pillar, index) => (
              <Card 
                key={index} 
                className="border-primary/20 hover:border-primary/40 transition-all hover:scale-105"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <pillar.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">
                    {pillar.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              QUERO MEU SITE PROFISSIONAL
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O processo foi pensado para ser simples, transparente e eficiente.
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Desde a primeira conversa até o lançamento do seu site, estarei disponível para garantir que tudo saia conforme planejado.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12 max-w-7xl mx-auto">
            {[
              {
                step: "01",
                icon: Search,
                title: "Diagnóstico",
                description: "Onboarding e entendimento de suas necessidades, público-alvo e objetivos."
              },
              {
                step: "02",
                icon: FileText,
                title: "Construção da Copy",
                description: "A copy do seu site será elaborada com foco em engajar, atrair e converter."
              },
              {
                step: "03",
                icon: Palette,
                title: "Design e Aprovação",
                description: "Você receberá um protótipo visual do site para aprovação e ajustes."
              },
              {
                step: "04",
                icon: Code,
                title: "Desenvolvimento",
                description: "Com o design aprovado, é iniciado o desenvolvimento e testes."
              },
              {
                step: "05",
                icon: Rocket,
                title: "Revisão e Lançamento",
                description: "Seu site vai ao ar e continuarei ao seu lado para ajustes necessários."
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="text-center border-primary/20 hover:border-primary/40 transition-all hover:scale-105 flex flex-col p-6"
                style={{ aspectRatio: '1 / 1' }}
              >
                <div className="flex-grow flex flex-col justify-center">
                  <div className="w-16 h-16 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="bg-card/50 rounded-lg border border-primary/20 p-8 mb-8">
            <p className="text-lg font-semibold mb-4 text-center">
              Além de receber um site que gera resultados, você também terá:
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">Entrega em tempo recorde</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80">Acesso ao meu suporte</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              QUERO MEU SITE PROFISSIONAL
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mais clientes para o seu negócio
            </h2>
            <p className="text-lg text-foreground/70">
              Conheça um pouco do meu trabalho e veja o que posso te oferecer
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                image: "/portifolio/adv-debora-1.png",
                title: "Advocacia - Débora"
              },
              {
                image: "/portifolio/esteticista-talita.png",
                title: "Esteticista - Talita"
              },
              {
                image: "/portifolio/soft-port1.png",
                title: "Soft Haus"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="aspect-[4/3] bg-card rounded-lg border border-primary/20 overflow-hidden hover:scale-105 transition-all cursor-pointer group relative"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay com cores no hover - desktop */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"></div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://www.instagram.com/davilucas.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              VER MEUS TRABALHOS
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a] overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quem já fez, recomenda
            </h2>
          </div>
          
          {/* Carrossel Infinito */}
          <div className="relative overflow-hidden">
            {/* Mobile: sem animação, em coluna */}
            <div className="flex md:hidden flex-col gap-6 items-center">
              {[
                "/depoimentos/Gemini_Generated_Image_pk0ir4pk0ir4pk0i.png",
                "/depoimentos/Gemini_Generated_Image_3bjrck3bjrck3bjr.png",
                "/depoimentos/Gemini_Generated_Image_dzwea0dzwea0dzwe.png",
                "/depoimentos/Gemini_Generated_Image_7eszbe7eszbe7esz.png",
                "/depoimentos/Gemini_Generated_Image_1xiecf1xiecf1xie.png",
                "/depoimentos/depo2.webp",
              ].map((image, index) => (
                <Card 
                  key={`mobile-${index}`}
                  className="overflow-hidden border-primary/20 rounded-xl"
                  style={{ marginBottom: '-20px' }}
                >
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src={image} 
                      alt={`Depoimento ${index + 1}`}
                      className="h-auto max-h-[400px] w-full object-contain"
                      style={{ 
                        height: 'auto', 
                        width: '100%',
                        clipPath: 'inset(0 0 20px 0)',
                        marginBottom: '-20px'
                      }}
                    />
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Desktop: com animação, em linha */}
            <div className="hidden md:flex md:flex-row md:animate-scroll-depoimentos gap-6 items-end">
              {[
                "/depoimentos/Gemini_Generated_Image_pk0ir4pk0ir4pk0i.png",
                "/depoimentos/Gemini_Generated_Image_3bjrck3bjrck3bjr.png",
                "/depoimentos/Gemini_Generated_Image_dzwea0dzwea0dzwe.png",
                "/depoimentos/Gemini_Generated_Image_7eszbe7eszbe7esz.png",
                "/depoimentos/Gemini_Generated_Image_1xiecf1xiecf1xie.png",
                "/depoimentos/depo2.webp",
                // Duplicar para efeito infinito
                "/depoimentos/Gemini_Generated_Image_pk0ir4pk0ir4pk0i.png",
                "/depoimentos/Gemini_Generated_Image_3bjrck3bjrck3bjr.png",
                "/depoimentos/Gemini_Generated_Image_dzwea0dzwea0dzwe.png",
                "/depoimentos/Gemini_Generated_Image_7eszbe7eszbe7esz.png",
                "/depoimentos/Gemini_Generated_Image_1xiecf1xiecf1xie.png",
                "/depoimentos/depo2.webp",
              ].map((image, index) => (
                <Card 
                  key={index}
                  className="flex-shrink-0 overflow-hidden border-primary/20 rounded-xl"
                  style={{ marginBottom: '-20px' }}
                >
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src={image} 
                      alt={`Depoimento ${index + 1}`}
                      className="h-auto max-h-[400px] w-auto object-contain"
                      style={{ 
                        height: 'auto', 
                        width: 'auto',
                        clipPath: 'inset(0 0 20px 0)',
                        marginBottom: '-20px'
                      }}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tire suas dúvidas
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                question: "QUAIS SÃO OS PRAZOS DE ENTREGA DE UM SITE?",
                answer: "O prazo varia de acordo com a complexidade do projeto. Em média, um site institucional leva de 15 a 30 dias, enquanto uma landing page pode ser entregue em 7 a 15 dias. Sempre discutimos os prazos no início do projeto para garantir que atendam suas necessidades."
              },
              {
                question: "O QUE É UM SITE RESPONSIVO?",
                answer: "Um site responsivo é aquele que se adapta automaticamente a diferentes tamanhos de tela, seja em computadores, tablets ou smartphones. Isso garante que seus visitantes tenham uma experiência perfeita, independentemente do dispositivo que estiverem usando."
              },
              {
                question: "VOCÊ TAMBÉM FAZ MANUTENÇÃO E ATUALIZAÇÕES?",
                answer: "Sim! Ofereço pacotes de manutenção mensal que incluem atualizações de conteúdo, correções, backups e suporte técnico. Também posso fazer atualizações pontuais conforme sua necessidade."
              },
              {
                question: "QUAL A DIFERENÇA ENTRE UM SITE E UMA LANDING PAGE?",
                answer: "Um site institucional é uma presença completa na web com várias páginas (sobre, serviços, contato, etc.). Uma landing page é uma página única focada em uma ação específica, como captar leads ou vender um produto. A escolha depende do seu objetivo."
              },
              {
                question: "POSSO PEDIR ALTERAÇÕES NO PROJETO?",
                answer: "Claro! Durante o processo de desenvolvimento, você pode solicitar alterações e ajustes. Trabalhamos em conjunto para garantir que o resultado final esteja 100% de acordo com sua visão e necessidades."
              }
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 border border-primary/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 border border-primary/30 rounded-lg text-sm text-primary/80 bg-card/50">
              QUEM VAI CUIDAR DE TUDO
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Imagem do perfil */}
              <div className="relative rounded-lg overflow-hidden border-2 border-primary/30">
                <img 
                  src="/eu/davi-profile.png" 
                  alt="Davi Lucas" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Cards de ícones sobrepostos na lateral direita */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center border-2 border-primary/30 hover:scale-110 transition-all shadow-lg"
                  >
                    <WhatsAppIcon className="h-6 w-6 text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/davilucas.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card/90 backdrop-blur-sm rounded-lg flex items-center justify-center border-2 border-primary/30 hover:scale-110 transition-all shadow-lg"
                  >
                    <Instagram className="h-6 w-6 text-primary" />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Especialista em Sites e Landing Pages
              </h2>
              <p className="text-lg text-foreground/80 mb-4">
                Muito prazer, meu nome é <span className="font-semibold text-primary">Davi Lucas</span> e sou um desenvolvedor especialista em sites personalizados e rápidos, com experiência em <span className="font-semibold text-primary">IA integrada</span> e <span className="font-semibold text-primary">agendamento integrado</span>.
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                Desenvolvo <span className="font-semibold text-primary">landing pages convencionais</span> e <span className="font-semibold text-primary">sites institucionais</span>, sempre pensando em entregar resultados reais para o seu negócio.
              </p>
              <p className="text-lg text-foreground/80">
                Minha missão é dar vida aos seus projetos, ajudando-o a crescer seu negócio através de uma presença online profissional. Faço prévias sem compromisso para você ver o resultado antes de decidir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-dark border-t border-primary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-foreground/70">© 2025 Davi Lucas - Desenvolvimento Web</p>
              <p className="text-sm text-foreground/50">Desenvolvido com dedicação e profissionalismo</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/davilucas.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:contato@davilucas.dev"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
