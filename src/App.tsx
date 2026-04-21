import heroBg from './assets/hero-bg.jpg'
import impactsImg from './assets/impacts.jpg'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(0,229,255,0.18),transparent_55%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_80%_70%,rgba(34,239,126,0.12),transparent_55%)]"></div>
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(195,245,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(195,245,255,0.35)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      </div>
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#10141a]/75 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto max-w-[80rem] flex items-center justify-between px-6 md:px-8 py-4">
          <a
            className="flex items-center gap-3 text-2xl font-black text-[#c3f5ff] tracking-tighter font-headline uppercase"
            href="#"
          >
            <img
              src="/logo.webp"
              alt="Logo APEX IV"
              className="h-8 w-8 rounded-sm"
              decoding="async"
              loading="eager"
            />
            APEX IV
          </a>
          <div className="hidden lg:flex gap-8 items-center">
            <a
              className="text-slate-300 hover:text-white transition-colors font-headline font-bold tracking-tight uppercase text-sm"
              href="#evolucao"
            >
              Evolução
            </a>
            <a
              className="text-slate-300 hover:text-white transition-colors font-headline font-bold tracking-tight uppercase text-sm"
              href="#pilares"
            >
              Pilares
            </a>
            <a
              className="text-slate-300 hover:text-white transition-colors font-headline font-bold tracking-tight uppercase text-sm"
              href="#impactos"
            >
              Impactos
            </a>
            <a
              className="text-slate-300 hover:text-white transition-colors font-headline font-bold tracking-tight uppercase text-sm"
              href="#tecnologias"
            >
              Tecnologias
            </a>
            <a
              className="text-slate-300 hover:text-white transition-colors font-headline font-bold tracking-tight uppercase text-sm"
              href="#arquitetura"
            >
              Arquitetura
            </a>
            <a
              className="text-slate-300 hover:text-white transition-colors font-headline font-bold tracking-tight uppercase text-sm"
              href="#roadmap"
            >
              Roadmap
            </a>
            <a
              className="text-slate-300 hover:text-white transition-colors font-headline font-bold tracking-tight uppercase text-sm"
              href="#faq"
            >
              FAQ
            </a>
          </div>
          <a
            className="btn btn-primary btn-sm"
            href="#download"
          >
            Whitepaper
          </a>
        </div>
      </nav>

      <header className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-surface/10 via-surface/70 to-surface z-10"></div>
          <img
            className="w-full h-full object-cover opacity-35"
            src={heroBg}
            alt="Paisagem industrial futurista com braços robóticos e sobreposições digitais"
          />
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_20%,rgba(195,245,255,0.18),transparent_55%)]"></div>
        </div>

        <div className="mx-auto max-w-[80rem] px-6 md:px-8 z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-primary/30 bg-primary/5">
                <span className="material-symbols-outlined text-primary text-sm">
                  precision_manufacturing
                </span>
                <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                  Máquinas conectadas • Pessoas • Dados
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8 text-on-background">
                A REVOLUÇÃO DA{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                  INDÚSTRIA 4.0
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-on-surface-variant font-light leading-relaxed mb-5 max-w-2xl">
                Indústria 4.0 é quando a fábrica “enxerga” o que está acontecendo:
                máquinas conectadas, dados organizados e decisões mais rápidas no
                dia a dia.
              </p>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
                Aqui você entende o conceito sem complicação, com exemplos
                práticos e um caminho claro para começar pequeno, melhorar um
                processo real e só depois escalar com segurança.
              </p>

              <div className="flex flex-wrap gap-4 md:gap-6 items-center">
                <a
                  className="btn btn-primary"
                  href="#evolucao"
                >
                  Iniciar Exploração
                </a>
                <a
                  className="btn btn-outline"
                  href="#roadmap"
                >
                  Ver Roadmap
                </a>
                <div className="hidden md:flex items-center gap-4 text-outline">
                  <div className="w-12 h-[1px] bg-outline-variant"></div>
                  <span className="text-[10px] uppercase tracking-widest">
                    APEX IV • Guia Acadêmico
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-panel border border-outline-variant/20 p-8">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-[10px] text-primary tracking-[0.3em] uppercase font-bold">
                      Painel
                    </p>
                    <p className="mt-2 font-headline font-black text-xl tracking-tight uppercase">
                      Sumário rápido
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-primary tracking-[0.3em] uppercase font-bold">
                      Status
                    </p>
                    <div className="mt-2 flex items-center justify-end gap-2">
                      <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
                      <span className="text-xs font-bold text-tertiary uppercase tracking-widest">
                        Online
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 text-xs">
                  <a
                    className="bg-surface-container-lowest/70 border border-outline-variant/20 px-4 py-3 hover:border-primary/40 transition-colors"
                    href="#evolucao"
                  >
                    Linha do Tempo
                  </a>
                  <a
                    className="bg-surface-container-lowest/70 border border-outline-variant/20 px-4 py-3 hover:border-primary/40 transition-colors"
                    href="#pilares"
                  >
                    9 Pilares
                  </a>
                  <a
                    className="bg-surface-container-lowest/70 border border-outline-variant/20 px-4 py-3 hover:border-primary/40 transition-colors"
                    href="#impactos"
                  >
                    Impactos
                  </a>
                  <a
                    className="bg-surface-container-lowest/70 border border-outline-variant/20 px-4 py-3 hover:border-primary/40 transition-colors"
                    href="#tecnologias"
                  >
                    CPS (Deep Dive)
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="bg-surface-container-lowest/70 border border-outline-variant/20 p-4">
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                      Foco
                    </p>
                    <p className="mt-2 font-headline font-black tracking-tight">
                      Dados
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest/70 border border-outline-variant/20 p-4">
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                      Camada
                    </p>
                    <p className="mt-2 font-headline font-black tracking-tight">
                      OT/IT
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest/70 border border-outline-variant/20 p-4">
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                      Resultado
                    </p>
                    <p className="mt-2 font-headline font-black tracking-tight">
                      KPIs
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    className="btn btn-primary btn-sm w-full"
                    href="#download"
                  >
                    Abrir Whitepaper
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-24 md:py-32 bg-surface" id="evolucao">
          <div className="mx-auto max-w-[80rem] px-6 md:px-8">
            <div className="mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-primary">
                01. LINHA DO TEMPO INDUSTRIAL
              </h2>
              <div className="h-1 w-24 bg-primary"></div>
              <p className="mt-6 max-w-3xl text-on-surface-variant text-base md:text-lg leading-relaxed">
                A ideia de “revolução industrial” não é só história: cada etapa
                mudou como as fábricas produzem, medem e melhoram. Entender essa
                evolução ajuda a enxergar por que a Indústria 4.0 é, acima de tudo,
                visibilidade e decisão baseada em dados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-low p-7 md:p-9 border-l-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] group">
                <span className="text-4xl font-black text-outline-variant group-hover:text-primary mb-4 block transition-colors">
                  1.0
                </span>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">
                  Mecanização
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  Final do séc. XVIII. Energia hidráulica e vapor viabilizam a
                  primeira produção mecânica e ampliam escala pela padronização
                  básica.
                </p>
                <span className="text-[10px] font-bold bg-surface-container-high px-2 py-1">
                  TELAR MECÂNICO
                </span>
              </div>

              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-low p-7 md:p-9 border-l-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] group">
                <span className="text-4xl font-black text-outline-variant group-hover:text-primary mb-4 block transition-colors">
                  2.0
                </span>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">
                  Eletricidade
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  Início do séc. XX. Eletrificação e produção em massa com
                  divisão de tarefas, controle de qualidade e cadeias de
                  suprimento mais longas.
                </p>
                <span className="text-[10px] font-bold bg-surface-container-high px-2 py-1">
                  LINHA DE MONTAGEM
                </span>
              </div>

              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-low p-7 md:p-9 border-l-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] group">
                <span className="text-4xl font-black text-outline-variant group-hover:text-primary mb-4 block transition-colors">
                  3.0
                </span>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">
                  Automação
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  Anos 70. Eletrônica e TI entram no chão de fábrica. PLCs, SCADA
                  e robótica clássica automatizam tarefas repetitivas com foco
                  em produtividade.
                </p>
                <span className="text-[10px] font-bold bg-surface-container-high px-2 py-1">
                  PLCs &amp; SCADA
                </span>
              </div>

              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 border-l-2 border-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] group">
                <span className="text-4xl font-black text-primary mb-4 block">
                  4.0
                </span>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">
                  Conectividade
                </h3>
                <p className="text-sm text-on-surface leading-relaxed mb-4">
                  Hoje. Máquinas e sistemas “conversam”, dados viram rotina e a
                  fábrica ganha visibilidade em tempo real para melhorar
                  qualidade, prazo e custos.
                </p>
                <span className="text-[10px] font-bold bg-primary text-on-primary px-2 py-1 uppercase">
                  ERA ATUAL
                </span>
              </div>
            </div>

            <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                <p className="text-[10px] text-primary tracking-[0.3em] uppercase font-bold mb-3">
                  Definição prática
                </p>
                <h3 className="text-2xl font-black tracking-tight uppercase mb-4">
                  O que é Indústria 4.0?
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose">
                  É um jeito mais moderno de gerir a produção: o chão de fábrica
                  deixa de ser “caixa-preta” e passa a ter dados confiáveis sobre
                  o que está acontecendo. Isso ajuda a reduzir desperdício,
                  aumentar qualidade, reagir mais rápido e melhorar o processo
                  com menos achismo.
                </p>
              </div>
              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                <p className="text-[10px] text-secondary tracking-[0.3em] uppercase font-bold mb-3">
                  Mudança de paradigma
                </p>
                <h3 className="text-2xl font-black tracking-tight uppercase mb-4">
                  De automação para autonomia
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose">
                  Na 3.0 a meta era automatizar tarefas. Na 4.0, além de
                  automatizar, você entende por que as coisas acontecem e atua
                  antes do problema virar prejuízo. É sair do “apagar incêndio”
                  para um controle mais previsível.
                </p>
              </div>
              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                <p className="text-[10px] text-tertiary tracking-[0.3em] uppercase font-bold mb-3">
                  Resultado esperado
                </p>
                <h3 className="text-2xl font-black tracking-tight uppercase mb-4">
                  Valor mensurável
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose">
                  O objetivo final é simples: produzir melhor com menos
                  desperdício. Para isso, você usa métricas que façam sentido
                  (qualidade, paradas, atraso, energia). Tecnologia é meio; o fim
                  é desempenho que a equipe consegue enxergar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-surface-container-lowest" id="pilares">
          <div className="mx-auto max-w-[80rem] px-6 md:px-8">
            <div className="max-w-3xl mb-16 md:mb-24">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase leading-[1.05]">
                Os 9 Pilares Tecnológicos
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                A base da Indústria 4.0 é a integração vertical (chão de fábrica
                → gestão) e horizontal (fornecedores → produção → cliente). Os
                pilares abaixo funcionam como um sistema: quando um falha, o
                valor do todo diminui.
              </p>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mt-4">
                O ponto principal: você não precisa “comprar tudo” de uma vez.
                Comece pelo pilar que resolve a sua dor atual (paradas, qualidade,
                rastreabilidade, energia) e construa o resto por etapas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] flex flex-col items-start">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  database
                </span>
                <h3 className="text-xl font-bold mb-4 uppercase">
                  Big Data &amp; Analytics
                </h3>
                <p className="text-sm text-on-surface-variant leading-loose mb-6">
                  É transformar dados em respostas simples: onde perde mais tempo,
                  qual máquina para mais, qual turno tem mais variação. Ajuda a
                  decidir com base em fatos e não em “sensação”.
                </p>
                <div className="mt-auto h-[2px] w-full bg-outline-variant">
                  <div className="h-full bg-primary w-2/3"></div>
                </div>
              </div>

              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] flex flex-col items-start">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  precision_manufacturing
                </span>
                <h3 className="text-xl font-bold mb-4 uppercase">
                  Robótica Avançada
                </h3>
                <p className="text-sm text-on-surface-variant leading-loose mb-6">
                  Robôs mais flexíveis e seguros, que podem trabalhar próximos de
                  pessoas, mudar de tarefa e ajudar em operações repetitivas.
                  Traz ganho de produtividade sem perder qualidade.
                </p>
                <div className="mt-auto h-[2px] w-full bg-outline-variant">
                  <div className="h-full bg-primary w-1/2"></div>
                </div>
              </div>

              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] flex flex-col items-start">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  model_training
                </span>
                <h3 className="text-xl font-bold mb-4 uppercase">Simulação</h3>
                <p className="text-sm text-on-surface-variant leading-loose mb-6">
                  Testar mudanças antes de mexer na linha. Você simula cenário,
                  compara resultados e evita “tentativa e erro” caro na produção.
                </p>
                <div className="mt-auto h-[2px] w-full bg-outline-variant">
                  <div className="h-full bg-primary w-3/4"></div>
                </div>
              </div>

              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] flex flex-col items-start">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  hub
                </span>
                <h3 className="text-xl font-bold mb-4 uppercase">
                  Integração de Sistemas
                </h3>
                <p className="text-sm text-on-surface-variant leading-loose mb-6">
                  Fazer os sistemas “se entenderem”: produção, manutenção,
                  qualidade e gestão olhando para o mesmo dado. Evita planilhas
                  paralelas e reduz retrabalho de informação.
                </p>
                <div className="mt-auto h-[2px] w-full bg-outline-variant">
                  <div className="h-full bg-primary w-4/5"></div>
                </div>
              </div>

              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] flex flex-col items-start">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  router
                </span>
                <h3 className="text-xl font-bold mb-4 uppercase">
                  Internet das Coisas (IIoT)
                </h3>
                <p className="text-sm text-on-surface-variant leading-loose mb-6">
                  Sensores e máquinas conectadas para registrar o que acontece
                  (parada, velocidade, temperatura, consumo). É o primeiro passo
                  para ter visibilidade e agir mais rápido.
                </p>
                <div className="mt-auto h-[2px] w-full bg-outline-variant">
                  <div className="h-full bg-primary w-full"></div>
                </div>
              </div>

              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] flex flex-col items-start">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  security
                </span>
                <h3 className="text-xl font-bold mb-4 uppercase">
                  Cibersegurança
                </h3>
                <p className="text-sm text-on-surface-variant leading-loose mb-6">
                  Protege a operação para não parar por falha, acesso indevido ou
                  ataque. É controle de acesso, organização de rede e rotina de
                  atualização sem susto.
                </p>
                <div className="mt-auto h-[2px] w-full bg-outline-variant">
                  <div className="h-full bg-primary w-2/3"></div>
                </div>
              </div>

              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] flex flex-col items-start">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  cloud_done
                </span>
                <h3 className="text-xl font-bold mb-4 uppercase">
                  Computação em Nuvem
                </h3>
                <p className="text-sm text-on-surface-variant leading-loose mb-6">
                  Guarda e processa dados com facilidade para gerar relatórios,
                  comparar unidades e escalar análises. Funciona bem quando
                  combinada com coleta local na fábrica.
                </p>
                <div className="mt-auto h-[2px] w-full bg-outline-variant">
                  <div className="h-full bg-primary w-3/5"></div>
                </div>
              </div>

              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] flex flex-col items-start">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  layers
                </span>
                <h3 className="text-xl font-bold mb-4 uppercase">
                  Manufatura Aditiva
                </h3>
                <p className="text-sm text-on-surface-variant leading-loose mb-6">
                  Impressão 3D para protótipo, ferramental e peças específicas.
                  Ajuda a reduzir tempo de espera e a testar ideias com custo
                  menor.
                </p>
                <div className="mt-auto h-[2px] w-full bg-outline-variant">
                  <div className="h-full bg-primary w-1/3"></div>
                </div>
              </div>

              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)] flex flex-col items-start">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">
                  view_in_ar
                </span>
                <h3 className="text-xl font-bold mb-4 uppercase">
                  Realidade Aumentada
                </h3>
                <p className="text-sm text-on-surface-variant leading-loose mb-6">
                  Instruções e ajuda na hora, no local do trabalho. Ótimo para
                  manutenção, setup e inspeção, reduzindo erro e tempo de parada.
                </p>
                <div className="mt-auto h-[2px] w-full bg-outline-variant">
                  <div className="h-full bg-primary w-1/4"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-surface overflow-hidden" id="impactos">
          <div className="mx-auto max-w-[80rem] px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase leading-tight">
                  Impactos socioeconômicos e novos paradigmas
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary">
                        trending_up
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 uppercase">
                        Customização em massa
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        Produzir itens personalizados com eficiência próxima à
                        produção em massa, usando dados de demanda, engenharia e
                        rastreabilidade.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary">
                        groups
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 uppercase">
                        Nova força de trabalho
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        Funções manuais migram para supervisão, análise e
                        melhoria contínua. Reskilling e cultura de dados viram
                        requisito, não diferencial.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary">
                        eco
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 uppercase">
                        Sustentabilidade operacional
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        Menos consumo energético e material com gestão baseada
                        em dados: monitoramento, metas por linha e otimização
                        ponta a ponta.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
                <div className="bg-surface-container p-1 rounded-sm border border-white/5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <img
                      className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      src={impactsImg}
                      alt="Sala de servidores futurista com fibras óticas representando fluxo de dados"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-surface/10 to-transparent"></div>
                  </div>
                </div>

                <div className="mt-4 lg:mt-0 lg:absolute lg:-bottom-6 lg:-left-6 glass-panel border border-primary/20 p-6 max-w-sm">
                  <p className="text-primary text-[10px] uppercase font-bold tracking-[0.3em]">
                    Insight
                  </p>
                  <p className="mt-3 font-headline font-black text-4xl italic tracking-tighter text-on-surface">
                    +45% eficiência
                  </p>
                  <p className="mt-2 text-on-surface-variant text-sm leading-relaxed">
                    Estimativa típica em iniciativas bem executadas, combinando
                    redução de paradas, qualidade e fluxo de informação.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                <p className="text-[10px] text-primary tracking-[0.3em] uppercase font-bold mb-3">
                  Custo e risco
                </p>
                <h3 className="text-2xl font-black tracking-tight uppercase mb-4">
                  O erro comum
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose">
                  Implementar tecnologia sem processo e sem indicador. O resultado
                  é uma “fábrica conectada” que não muda o desempenho. Comece por
                  uma dor real (parada, scrap, energia, atraso) e desenhe a
                  solução de dados de trás para frente.
                </p>
              </div>
              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                <p className="text-[10px] text-secondary tracking-[0.3em] uppercase font-bold mb-3">
                  Governança
                </p>
                <h3 className="text-2xl font-black tracking-tight uppercase mb-4">
                  Dados confiáveis
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose">
                  Sem dados consistentes, não existe melhoria sustentada.
                  Padronize nomes, unidades, horários e o que cada “estado” da
                  máquina significa. Combine quem registra, quem valida e como
                  corrigir quando aparecer algo errado.
                </p>
              </div>
              <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                <p className="text-[10px] text-tertiary tracking-[0.3em] uppercase font-bold mb-3">
                  Pessoas
                </p>
                <h3 className="text-2xl font-black tracking-tight uppercase mb-4">
                  Cultura OT/IT
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose">
                  Na prática, é fazer produção e tecnologia trabalharem juntos.
                  Um lado pensa em segurança e continuidade da operação; o outro,
                  em organização e escala. Com alinhamento, o projeto vira rotina
                  e não “um sistema a mais”.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-24 md:py-32 bg-surface-container-low border-y border-outline-variant/10"
          id="tecnologias"
        >
          <div className="mx-auto max-w-[80rem] px-6 md:px-8">
            <div className="text-center mb-16 md:mb-24">
              <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">
                Explicação sem complicar
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                Sistemas Ciber-Físicos (CPS)
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                CPS é a ponte entre o mundo físico e o digital. Sensores mostram
                o que está acontecendo, o software organiza e ajuda a decidir, e
                a operação executa ações. Em vez de “adivinhar”, você enxerga o
                processo e melhora com base em fatos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20">
              <div className="bg-surface p-10 md:p-12">
                <div className="mb-8 inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase">
                  Arquitetura de Borda
                </div>
                <h3 className="text-2xl font-bold mb-6 font-headline tracking-tight uppercase">
                  Edge Computing
                </h3>
                <p className="text-on-surface-variant leading-loose mb-8">
                  É quando parte do processamento acontece “perto da máquina”.
                  Isso ajuda a não depender de internet para o básico, reduz
                  atraso de resposta e deixa a operação mais estável — algo
                  importante quando a produção não pode parar.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-on-surface">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    Latência baixa para decisões críticas
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    Economia de largura de banda
                  </li>
                  <li className="flex items-center gap-3 text-sm text-on-surface">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    Operação mesmo com falha de rede
                  </li>
                </ul>
              </div>

              <div className="bg-surface p-10 md:p-12">
                <div className="mb-8 inline-block px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold tracking-widest uppercase">
                  O Coração da IIoT
                </div>
                <h3 className="text-2xl font-bold mb-6 font-headline tracking-tight uppercase">
                  Sistemas Ciber-Físicos
                </h3>
                <p className="text-on-surface-variant leading-loose mb-8">
                  Um CPS combina elementos computacionais e físicos. Ele monitora
                  processos via modelos digitais, compara o real com o esperado e
                  ajusta o sistema com base em regras, otimização e (quando faz
                  sentido) aprendizado de máquina.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 border border-outline-variant/20">
                    <span className="text-xs font-bold text-primary block mb-1">
                      CAMADA FÍSICA
                    </span>
                    <span className="text-[10px] text-on-surface-variant uppercase">
                      Sensores e atuadores
                    </span>
                  </div>
                  <div className="p-4 border border-outline-variant/20">
                    <span className="text-xs font-bold text-primary block mb-1">
                      CAMADA CIBER
                    </span>
                    <span className="text-[10px] text-on-surface-variant uppercase">
                      Modelos e algoritmos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-surface p-10 md:p-12">
                <p className="text-[10px] text-primary tracking-[0.3em] uppercase font-bold mb-3">
                  Exemplo prático
                </p>
                <h3 className="text-2xl font-black tracking-tight uppercase mb-4">
                  Manutenção preditiva
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose">
                  Sensores de vibração e temperatura alimentam modelos que
                  detectam anomalias. O CPS recomenda intervenção antes da
                  falha, gera uma ordem no CMMS e ajusta a produção para reduzir
                  risco sem parar tudo.
                </p>
              </div>
              <div className="bg-surface p-10 md:p-12">
                <p className="text-[10px] text-secondary tracking-[0.3em] uppercase font-bold mb-3">
                  Controle de qualidade
                </p>
                <h3 className="text-2xl font-black tracking-tight uppercase mb-4">
                  Rastreabilidade
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose">
                  Cada lote ou unidade “carrega” dados do processo: parâmetros,
                  tempos, inspeções e eventos. Ao ocorrer desvio, você encontra
                  causa raiz mais rápido e reduz recall, retrabalho e scrap.
                </p>
              </div>
              <div className="bg-surface p-10 md:p-12">
                <p className="text-[10px] text-tertiary tracking-[0.3em] uppercase font-bold mb-3">
                  Segurança OT
                </p>
                <h3 className="text-2xl font-black tracking-tight uppercase mb-4">
                  Zona e conduto
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose">
                  Convergência IT/OT aumenta superfície de ataque. Segmentar a
                  rede, minimizar privilégios e monitorar tráfego industrial são
                  práticas essenciais para não comprometer a disponibilidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-surface" id="arquitetura">
          <div className="mx-auto max-w-[80rem] px-6 md:px-8">
            <div className="mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-primary">
                02. ARQUITETURA DE REFERÊNCIA (IT/OT)
              </h2>
              <div className="h-1 w-24 bg-primary"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-5 bg-surface-container-low p-10">
                <h3 className="text-2xl font-black tracking-tight uppercase mb-4">
                  Camadas típicas
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose mb-8">
                  Uma boa arquitetura de Indústria 4.0 separa responsabilidades:
                  aquisição de dados, processamento em borda, plataforma de
                  dados, aplicações e governança. O objetivo é escalar sem
                  fragilizar o chão de fábrica.
                </p>
                <div className="space-y-4">
                  <div className="bg-surface-container-high p-6">
                    <p className="text-[10px] text-primary tracking-[0.3em] uppercase font-bold">
                      Campo (OT)
                    </p>
                    <p className="text-sm text-on-surface mt-2 leading-relaxed">
                      Sensores, atuadores, CLPs, CNC, inversores e instrumentação.
                    </p>
                  </div>
                  <div className="bg-surface-container-high p-6">
                    <p className="text-[10px] text-primary tracking-[0.3em] uppercase font-bold">
                      Supervisão
                    </p>
                    <p className="text-sm text-on-surface mt-2 leading-relaxed">
                      SCADA, historiadores, alarmes, receitas, estados de
                      máquina, coleta e normalização.
                    </p>
                  </div>
                  <div className="bg-surface-container-high p-6">
                    <p className="text-[10px] text-primary tracking-[0.3em] uppercase font-bold">
                      Execução (MES)
                    </p>
                    <p className="text-sm text-on-surface mt-2 leading-relaxed">
                      Ordens, rastreabilidade, apontamentos, qualidade, OEE e
                      sincronização com ERP.
                    </p>
                  </div>
                  <div className="bg-surface-container-high p-6">
                    <p className="text-[10px] text-primary tracking-[0.3em] uppercase font-bold">
                      Plataforma de Dados
                    </p>
                    <p className="text-sm text-on-surface mt-2 leading-relaxed">
                      Data lake, catálogos, governança, ML, APIs e dashboards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-surface-container-lowest p-10">
                  <h3 className="text-2xl font-black tracking-tight uppercase mb-6">
                    Regras de ouro
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface-container p-8">
                      <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary">
                          shield
                        </span>
                        <div>
                          <p className="font-bold uppercase tracking-tight">
                            Segurança por design
                          </p>
                          <p className="text-on-surface-variant text-sm leading-relaxed mt-2">
                            Defina segmentação, identidade e logs desde o
                            início. Em OT, disponibilidade é requisito.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container p-8">
                      <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary">
                          sync_alt
                        </span>
                        <div>
                          <p className="font-bold uppercase tracking-tight">
                            Integração incremental
                          </p>
                          <p className="text-on-surface-variant text-sm leading-relaxed mt-2">
                            Integre por casos de uso, não por “plataforma
                            gigante”. Cada entrega precisa melhorar um KPI.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container p-8">
                      <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary">
                          fact_check
                        </span>
                        <div>
                          <p className="font-bold uppercase tracking-tight">
                            Dado com contexto
                          </p>
                          <p className="text-on-surface-variant text-sm leading-relaxed mt-2">
                            Carimbo de tempo, unidade, estado de máquina e
                            origem do dado devem ser explícitos.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container p-8">
                      <div className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-primary">
                          language
                        </span>
                        <div>
                          <p className="font-bold uppercase tracking-tight">
                            Protocolos industriais
                          </p>
                          <p className="text-on-surface-variant text-sm leading-relaxed mt-2">
                            Prefira padrões e camadas de adaptação para reduzir
                            dependência de fornecedor e facilitar evolução.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 bg-surface-container-high p-8">
                    <p className="text-[10px] text-secondary tracking-[0.3em] uppercase font-bold mb-3">
                      Checklist rápido
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-on-surface">
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-secondary"></span>
                        Inventário de ativos OT/IT
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-secondary"></span>
                        Segmentação por zonas
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-secondary"></span>
                        Políticas de acesso mínimo
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-secondary"></span>
                        Padrão de tags e nomenclatura
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-secondary"></span>
                        Telemetria e logs centralizados
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-secondary"></span>
                        Plano de resposta a incidentes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-surface-container-lowest" id="roadmap">
          <div className="mx-auto max-w-[80rem] px-6 md:px-8">
            <div className="mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-primary">
                03. ROADMAP DE IMPLEMENTAÇÃO
              </h2>
              <div className="h-1 w-24 bg-primary"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="relative rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 pt-12 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-surface border border-primary/25 flex items-center justify-center">
                  <span className="font-headline font-black text-primary">1</span>
                </div>
                <p className="text-[10px] text-primary tracking-[0.3em] uppercase font-bold mb-3">
                  Fase 1
                </p>
                <h3 className="text-2xl font-black tracking-tight uppercase mb-5">
                  Diagnóstico
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  O objetivo aqui é entender onde está a dor e o que vai provar
                  que você melhorou. Sem isso, o projeto vira “tecnologia por
                  tecnologia”.
                </p>
                <ul className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-primary mt-2"></span>
                    Escolher um problema claro (paradas, retrabalho, atraso, energia).
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-primary mt-2"></span>
                    Ver o que já existe (máquinas, sensores, sistemas) e o que falta.
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-primary mt-2"></span>
                    Definir um primeiro caso de uso simples, que dá resultado rápido.
                  </li>
                </ul>
              </div>

              <div className="relative rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 pt-12 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-surface border border-secondary/25 flex items-center justify-center">
                  <span className="font-headline font-black text-secondary">2</span>
                </div>
                <p className="text-[10px] text-secondary tracking-[0.3em] uppercase font-bold mb-3">
                  Fase 2
                </p>
                <h3 className="text-2xl font-black tracking-tight uppercase mb-5">
                  Piloto
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Um piloto é uma “prova no mundo real”. Ele precisa caber no
                  dia a dia da equipe e mostrar ganho antes/depois.
                </p>
                <ul className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-secondary mt-2"></span>
                    Conectar uma área pequena e coletar dados do jeito certo.
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-secondary mt-2"></span>
                    Entregar um painel simples e combinar como ele será usado.
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-secondary mt-2"></span>
                    Medir o antes/depois e ajustar regras, nomes e qualidade do dado.
                  </li>
                </ul>
              </div>

              <div className="relative rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 pt-12 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-surface border border-tertiary/25 flex items-center justify-center">
                  <span className="font-headline font-black text-tertiary">3</span>
                </div>
                <p className="text-[10px] text-tertiary tracking-[0.3em] uppercase font-bold mb-3">
                  Fase 3
                </p>
                <h3 className="text-2xl font-black tracking-tight uppercase mb-5">
                  Escala
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Quando funciona em um lugar, você replica o padrão. O segredo é
                  não reinventar a roda a cada linha.
                </p>
                <ul className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-tertiary mt-2"></span>
                    Replicar conexões e padrões de dados (mesmos nomes e regras).
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-tertiary mt-2"></span>
                    Evoluir para soluções maiores conforme a maturidade do time.
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-tertiary mt-2"></span>
                    Criar uma lista de próximos casos de uso e rotina de melhoria contínua.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              <div className="lg:col-span-7 rounded-sm border border-outline-variant/20 bg-surface-container-low p-7 md:p-9">
                <h3 className="text-2xl font-black tracking-tight uppercase mb-4">
                  KPIs recomendados
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose mb-8">
                  Indicadores são o “placar do jogo”. Escolha poucos, explique o
                  que cada um significa e garanta que o dado seja confiável.
                  Assim o time consegue ver o que melhorou de verdade.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                    <p className="text-sm font-bold uppercase tracking-tight">
                      OEE (Eficiência)
                    </p>
                    <p className="text-on-surface-variant text-sm leading-relaxed mt-2">
                      Mostra o quanto a linha está realmente produzindo bem.
                      Ajuda a separar perda por parada, lentidão e defeito.
                    </p>
                  </div>
                  <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                    <p className="text-sm font-bold uppercase tracking-tight">
                      Defeitos e retrabalho
                    </p>
                    <p className="text-on-surface-variant text-sm leading-relaxed mt-2">
                      Diz quantas peças saem fora do padrão e quanto tempo a equipe
                      gasta corrigindo. É um dos ganhos mais rápidos quando o dado
                      fica visível.
                    </p>
                  </div>
                  <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                    <p className="text-sm font-bold uppercase tracking-tight">
                      Falhas e tempo de reparo
                    </p>
                    <p className="text-on-surface-variant text-sm leading-relaxed mt-2">
                      Ajuda a entender com que frequência a máquina falha e quanto
                      tempo leva para voltar. Ótimo para reduzir paradas repetidas.
                    </p>
                  </div>
                  <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                    <p className="text-sm font-bold uppercase tracking-tight">
                      Energia por unidade
                    </p>
                    <p className="text-on-surface-variant text-sm leading-relaxed mt-2">
                      Mostra quanto energia vira produto. Bom para reduzir desperdício
                      e comparar turnos, lotes e linhas de forma justa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(0,0,0,0.35)]" id="download">
                <h3 className="text-2xl font-black tracking-tight uppercase mb-4">
                  Whitepaper (conteúdo)
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose mb-8">
                  Pense no whitepaper como um “documento de alinhamento”: ele
                  explica o problema, o plano, as regras e o que será medido.
                  Serve para evitar ruído entre áreas e deixar a implantação
                  previsível.
                </p>
                <div className="space-y-4 text-sm text-on-surface">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    Glossário simples (o que cada termo quer dizer)
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    Onde estamos hoje e qual objetivo queremos alcançar
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    Como escolher bons casos de uso (impacto, esforço, risco)
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    Indicadores e metas (o que vai melhorar e quanto)
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    Rotina de uso (quem olha, quando, e qual ação toma)
                  </div>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    className="btn btn-primary btn-sm"
                    href="#faq"
                  >
                    Ler FAQ
                  </a>
                  <a
                    className="btn btn-outline btn-sm"
                    href="#evolucao"
                  >
                    Voltar ao topo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-surface-container-lowest" id="faq">
          <div className="mx-auto max-w-[80rem] px-6 md:px-8">
            <div className="text-center mb-16">
              <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">
                Perguntas frequentes
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                FAQ Indústria 4.0
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Respostas objetivas para dúvidas comuns — com foco em aplicação
                real no chão de fábrica.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-surface-container-high p-10">
                <h3 className="text-lg font-bold uppercase tracking-tight mb-3">
                  Indústria 4.0 é só automação?
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose">
                  Não. Automação é fazer a máquina executar uma tarefa. Indústria
                  4.0 é, além disso, entender o que está acontecendo (com dados),
                  conectar áreas e melhorar decisões no dia a dia. O foco é ter
                  visibilidade, reduzir desperdício e ganhar previsibilidade.
                </p>
              </div>

              <div className="bg-surface-container-high p-10">
                <h3 className="text-lg font-bold uppercase tracking-tight mb-3">
                  Preciso de IA para começar?
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose">
                  Não. A maioria dos ganhos vem primeiro do básico bem feito:
                  coletar dados com consistência, registrar paradas/causas e ter
                  um painel simples que vira rotina. IA faz sentido quando você já
                  tem histórico confiável e um objetivo claro (por exemplo,
                  prever falhas recorrentes).
                </p>
              </div>

              <div className="bg-surface-container-high p-10">
                <h3 className="text-lg font-bold uppercase tracking-tight mb-3">
                  Nuvem ou on-prem?
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose">
                  Normalmente é um mix. O que é crítico para operação costuma ficar
                  local (para não depender da internet). Já a nuvem é ótima para
                  relatórios, comparação entre linhas/unidades e análises mais
                  pesadas. O melhor caminho é o que não atrapalha a produção.
                </p>
              </div>

              <div className="bg-surface-container-high p-10">
                <h3 className="text-lg font-bold uppercase tracking-tight mb-3">
                  Qual é o primeiro caso de uso ideal?
                </h3>
                <p className="text-on-surface-variant text-sm leading-loose">
                  O melhor é o que tem impacto claro e é fácil de medir. Exemplo:
                  monitorar paradas (com causa), acompanhar qualidade por lote ou
                  enxergar consumo de energia por produto. O piloto ideal é aquele
                  que a equipe usa todos os dias e que dá para repetir em outra
                  linha sem recomeçar do zero.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-surface" id="referencias">
          <div className="mx-auto max-w-[80rem] px-6 md:px-8">
            <div className="mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-primary">
                Referências e Colaboradores
              </h2>
              <div className="h-1 w-24 bg-primary"></div>
              <p className="mt-6 max-w-3xl text-on-surface-variant leading-relaxed">
                A lista abaixo reúne materiais clássicos e normas que ajudaram a
                orientar o conteúdo. Use como base para aprofundar temas,
                comparar abordagens e embasar trabalhos acadêmicos.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              <div className="lg:col-span-4 rounded-sm border border-outline-variant/20 bg-surface-container-high p-7 md:p-9">
                <h3 className="text-xl font-black tracking-tight uppercase mb-6">
                  Colaboradores
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    <p className="font-bold tracking-tight">
                      Carlos Vítor Faria Barboza
                    </p>
                  </div>
                  <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    <p className="font-bold tracking-tight">Helton do Nascimento</p>
                  </div>
                  <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    <p className="font-bold tracking-tight">
                      Renato Fernandes de Mattos
                    </p>
                  </div>
                  <div className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    <p className="font-bold tracking-tight">
                      Matheus Pereira Dos Reis
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 rounded-sm border border-outline-variant/20 bg-surface-container-low p-7 md:p-9">
                <h3 className="text-xl font-black tracking-tight uppercase mb-6">
                  Bibliografia
                </h3>
                <ol className="space-y-4 text-sm text-on-surface-variant leading-relaxed list-decimal pl-5">
                  <li className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    KAGERMANN, Henning; WAHLSTER, Wolfgang; HELBIG, Johannes.
                    <span className="italic"> Recommendations for implementing the strategic initiative INDUSTRIE 4.0</span>.
                    Frankfurt: acatech, 2013.
                  </li>
                  <li className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    LASI, Heiner; FETTKE, Peter; KEMPER, Hans-Georg; FELD,
                    Thomas; HOFFMANN, Michael.
                    <span className="italic"> Industry 4.0</span>.
                    <span className="italic"> Business &amp; Information Systems Engineering</span>, v. 6, n. 4, p. 239–242, 2014.
                  </li>
                  <li className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    HERMANN, Mario; PENTEK, Tobias; OTTO, Boris.
                    <span className="italic"> Design Principles for Industrie 4.0 Scenarios</span>.
                    In: <span className="italic">Proceedings of the 49th Hawaii International Conference on System Sciences (HICSS)</span>. 2016.
                  </li>
                  <li className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    NIST.
                    <span className="italic"> Guide to Industrial Control Systems (ICS) Security</span> (SP 800-82 Rev. 3).
                    Gaithersburg: National Institute of Standards and Technology, 2024.
                  </li>
                  <li className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    IEC.
                    <span className="italic"> IEC 62443 — Security for industrial automation and control systems</span>.
                    Geneva: International Electrotechnical Commission, 2018–2024.
                  </li>
                  <li className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    ISA.
                    <span className="italic"> ANSI/ISA-95 — Enterprise-Control System Integration</span>.
                    Research Triangle Park: International Society of Automation, 2010–2013.
                  </li>
                  <li className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    OPC FOUNDATION.
                    <span className="italic"> OPC UA Specifications</span>.
                    Disponível em:{' '}
                    <a
                      className="text-primary hover:underline"
                      href="https://opcfoundation.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://opcfoundation.org/
                    </a>
                    . Acesso em: 21 abr. 2026.
                  </li>
                  <li className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    OASIS.
                    <span className="italic"> MQTT Version 5.0</span>.
                    Disponível em:{' '}
                    <a
                      className="text-primary hover:underline"
                      href="https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html
                    </a>
                    . Acesso em: 21 abr. 2026.
                  </li>
                  <li className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    ISO.
                    <span className="italic"> ISO 23247 — Digital Twin Framework for Manufacturing</span>.
                    Geneva: International Organization for Standardization, 2021–2022.
                  </li>
                  <li className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    IIC.
                    <span className="italic"> Industrial Internet Reference Architecture (IIRA)</span>.
                    Industrial Internet Consortium, 2017.
                  </li>
                  <li className="rounded-sm border border-outline-variant/20 bg-surface-container-lowest p-6">
                    RAMI 4.0.
                    <span className="italic"> Reference Architectural Model Industrie 4.0</span>.
                    Disponível em:{' '}
                    <a
                      className="text-primary hover:underline"
                      href="https://www.plattform-i40.de/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.plattform-i40.de/
                    </a>
                    . Acesso em: 21 abr. 2026.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 md:py-40 bg-surface-container-lowest">
          <div className="mx-auto max-w-[80rem] px-6 md:px-8">
            <div className="relative p-10 md:p-16 lg:p-24 overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 border border-primary/20"></div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-none">
                  Pronto para a nova era industrial?
                </h2>
                <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
                  Indústria 4.0 não é só tecnologia: é um jeito de trabalhar
                  melhor. Você melhora um processo real, mede o resultado, cria
                  um padrão que a equipe entende e então replica.
                </p>
                <div className="flex flex-wrap gap-6">
                  <a
                    className="btn btn-primary"
                    href="#download"
                  >
                    Acessar Whitepaper
                  </a>
                  <a
                    className="btn btn-outline"
                    href="#roadmap"
                  >
                    Ver Roadmap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a0e14] w-full py-16 mt-10 border-t border-white/5">
        <div className="max-w-[80rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img
                src="/logo.webp"
                alt="Logo APEX IV"
                className="h-10 w-10 rounded-sm"
                decoding="async"
                loading="lazy"
              />
              <div className="text-lg font-bold text-[#c3f5ff] font-headline uppercase tracking-tighter">
                PROJETO APEX IV
              </div>
            </div>
            <p className="font-body text-xs uppercase tracking-widest text-slate-500 leading-relaxed max-w-md">
              © 2026 Projeto APEX IV — Guia sobre Indústria 4.0, CPS e IIoT.
              <br />
              Conteúdo educacional para fins acadêmicos.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-8">
            <a
              className="font-body text-xs uppercase tracking-widest text-slate-500 hover:text-[#ffb778] transition-colors"
              href="#tecnologias"
            >
              Deep Dive
            </a>
            <a
              className="font-body text-xs uppercase tracking-widest text-slate-500 hover:text-[#ffb778] transition-colors"
              href="#arquitetura"
            >
              Arquitetura
            </a>
            <a
              className="font-body text-xs uppercase tracking-widest text-slate-500 hover:text-[#ffb778] transition-colors"
              href="#roadmap"
            >
              Roadmap
            </a>
            <a
              className="font-body text-xs uppercase tracking-widest text-slate-500 hover:text-[#ffb778] transition-colors"
              href="#faq"
            >
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
