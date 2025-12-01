import Link from "next/link";
import { MessageCircle, Zap, FileText, Smartphone, Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block mb-6 px-4 py-2 border border-primary/30 rounded-full text-sm text-primary/80">
                LANDING PAGE | SITE INSTITUCIONAL
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Se destaque dos concorrentes e cresça seu negócio investindo em um{" "}
                <span className="text-gradient">site profissional</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-foreground/90">
                Em pleno 2025, ter um site profissional não é mais um diferencial,{" "}
                <span className="text-primary font-semibold">é uma necessidade.</span>
              </p>
              <p className="text-lg mb-8 text-foreground/70">
                <span className="font-semibold">Contrate agora</span> e receba um site que gera resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://wa.me/5531995518614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  QUERO UM ORÇAMENTO
                </a>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
                  DIAGNÓSTICO GRATUITO
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              {/* Placeholder for visual element */}
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/5531995518614"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all z-50"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-8 w-8" />
        </a>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A VITRINE DO SEU NEGÓCIO
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-4">
            Em um mundo cada vez mais conectado, um site profissional é a primeira impressão que você deixa nos seus clientes. E essa impressão precisa ser a melhor possível.
          </p>
          <p className="text-lg md:text-xl text-foreground/80">
            <span className="font-semibold text-primary">O design, a funcionalidade, a rapidez – tudo conta.</span>
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mt-4">
            Quando você tem um site profissional, ele não apenas atrai visitantes, mas{" "}
            <span className="font-semibold text-primary">transforma essas visitas em clientes e esses clientes em faturamento.</span>
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AS SOLUÇÕES PARA O SEU NEGÓCIO
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              O meu compromisso é com o seu resultado. Desenvolvo sites que não são apenas visualmente atrativos, mas pensados para{" "}
              <span className="font-semibold text-primary">entregar resultados reais.</span>
            </p>
            <p className="text-lg text-foreground/70 mt-4">
              Seja você um empreendedor, infoprodutor ou empresa, posso ajudá-lo(a) com:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Landing Page</h3>
              <p className="text-foreground/70">
                Para lançamentos, produtos ou serviços. Páginas focadas em captar leads e aumentar suas vendas.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Site Institucional</h3>
              <p className="text-foreground/70">
                Para dar credibilidade ao seu negócio com um site que reflita sua identidade, valores e diferenciais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              OS DIFERENCIAIS
            </h2>
            <p className="text-lg text-foreground/70">
              Esses são os pilares que irão guiar o desenvolvimento do seu site profissional:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Velocidade e Performance</h3>
              <p className="text-foreground/70 text-sm">
                Ninguém tem tempo para esperar um site lento carregar. O seu site será{" "}
                <span className="text-primary font-semibold">otimizado para carregar rapidamente</span> e oferecer a melhor experiência possível.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Copy Persuasiva</h3>
              <p className="text-foreground/70 text-sm">
                Um site bonito por si só não basta. A copy também será elaborada para ser{" "}
                <span className="text-primary font-semibold">persuasiva e de alto impacto</span>, com objetivo de levar o visitante a tomar a decisão desejada.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Layout Responsivo</h3>
              <p className="text-foreground/70 text-sm">
                Em uma era onde a navegação móvel já ultrapassa o desktop, vou garantir que seu site{" "}
                <span className="text-primary font-semibold">funcione perfeitamente em qualquer dispositivo</span>.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Design Personalizado</h3>
              <p className="text-foreground/70 text-sm">
                <span className="text-primary font-semibold">Chega de modelos prontos</span> e sites sem alma. Oferço soluções sob medida, garantindo que{" "}
                <span className="text-primary font-semibold">cada detalhe atenda às suas expectativas</span>.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://wa.me/5531995518614"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              QUERO UM ORÇAMENTO
            </a>
          </div>
        </div>
      </section>

      {/* Animated Marquee */}
      <section className="py-8 bg-background overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center space-x-8 mx-8">
              <span className="text-2xl font-bold text-foreground/20">PROFISSIONALISMO</span>
              <span className="text-2xl font-bold text-foreground/20">•</span>
              <span className="text-2xl font-bold text-foreground/20">ALTA CONVERSÃO</span>
              <span className="text-2xl font-bold text-foreground/20">•</span>
              <span className="text-2xl font-bold text-foreground/20">RESULTADOS</span>
              <span className="text-2xl font-bold text-foreground/20">•</span>
              <span className="text-2xl font-bold text-foreground/20">PERSONALIZADO</span>
              <span className="text-2xl font-bold text-foreground/20">•</span>
              <span className="text-2xl font-bold text-foreground/20">RÁPIDO</span>
              <span className="text-2xl font-bold text-foreground/20">•</span>
              <span className="text-2xl font-bold text-foreground/20">RESPONSIVO</span>
              <span className="text-2xl font-bold text-foreground/20">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              COMO FUNCIONA
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              O processo foi pensado para ser simples, transparente e eficiente. Desde a primeira conversa até o lançamento do seu site, estarei disponível para{" "}
              <span className="font-semibold text-primary">garantir que tudo saia conforme planejado.</span>
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Diagnóstico",
                description: "Onboarding e entendimento de suas necessidades, público-alvo e objetivos. A partir daí, será criada uma estratégia personalizada."
              },
              {
                step: "2",
                title: "Construção da Copy",
                description: "A copy do seu site será elaborada com foco em engajar, atrair e converter, levando em conta palavras-chave e otimização para SEO."
              },
              {
                step: "3",
                title: "Design e Aprovação",
                description: "Você receberá um protótipo visual do site. Trabalharemos em conjunto para ajustá-lo até que esteja 100% de acordo com sua visão."
              },
              {
                step: "4",
                title: "Desenvolvimento",
                description: "Com o design aprovado, é iniciado o desenvolvimento do site e será realizado uma série de testes para garantir que tudo funcione perfeitamente."
              },
              {
                step: "5",
                title: "Lançamento e Suporte",
                description: "Seu site vai ao ar e continuarei ao seu lado para ajustes ou manutenções que surgirem no primeiro mês após o lançamento."
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            BÔNUS
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Além de receber um site que é uma verdadeira máquina de resultados, você também leva os seguintes bônus:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-card rounded-lg border border-primary/20">
              <p className="text-lg font-semibold text-primary">1 ano de domínio e hospedagem grátis</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-primary/20">
              <p className="text-lg font-semibold text-primary">Suporte no 1º mês após o site estar no ar</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-primary/20">
              <p className="text-lg font-semibold text-primary">Desconto em manutenções futuras</p>
            </div>
          </div>
          <a
            href="https://wa.me/5531995518614"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
          >
            QUERO UM ORÇAMENTO
          </a>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O VERDADEIRO IMPACTO
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-4">
            Nos próximos anos vão existir 2 tipos de negócio: os que tem uma forte presença digital e os que estão de porta fechada.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            Se você não valoriza sua presença online, pode ter certeza que seu concorrente valoriza.
          </p>
          <p className="text-xl font-bold text-primary mb-8">
            Não fique para trás e invista agora em um site profissional.
          </p>
          <div className="mb-8 p-8 bg-card/50 rounded-lg border border-primary/20">
            <p className="text-4xl md:text-6xl font-bold text-primary mb-2">81%</p>
            <p className="text-lg text-foreground/70">
              dos consumidores pesquisam online antes de fazer uma compra
            </p>
            <p className="text-sm text-foreground/50 mt-4">FONTE: aufaitux.com</p>
          </div>
          <a
            href="https://wa.me/5531995518614"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
          >
            QUERO UM SITE PROFISSIONAL
          </a>
        </div>
      </section>

      {/* About Founder */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            QUEM VAI CUIDAR DE TUDO
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-primary">Especialista em Sites e Landing Pages</h3>
              <p className="text-foreground/80 mb-4">
                Muito prazer, meu nome é <span className="font-semibold">Guilherme Martins</span> e sou um web designer especialista em sites personalizados e rápidos, com mais de 2 anos de experiência.
              </p>
              <p className="text-foreground/80 mb-4">
                Formado em Física e Filosofia, após trabalhar alguns anos como professor, em 2020 descobri o poder e o impacto do mercado digital.
              </p>
              <p className="text-foreground/80">
                Minha missão é dar vida aos seus projetos, ajudando-o a crescer seu negócio através de uma presença online profissional.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-primary/20 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-dark border-t border-primary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-foreground/70">© 2024 GM Web Design</p>
              <p className="text-sm text-foreground/50">CNPJ: 54.027.317/0001-40</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/guimartinsdg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.behance.net/guimartinsdg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Behance
              </a>
              <a
                href="mailto:contato@gmwebdesign.com.br"
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
