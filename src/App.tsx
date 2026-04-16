/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  Heart,
  Gem,
  ExternalLink,
  Instagram,
  MapPin,
  Clock
} from 'lucide-react';

const COLORS = {
  blue: '#1f88cc',
  green: '#7fc89a',
};

const LOGO_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGV0hqst62qmvGN4a86SBu4YNYANCpkKcW26fBB30BfDXJGqARUDsc1D4XDCz73mwTIfbD0y2L1bHfsyNYz71hDCvTEbpd4A6O-nxhoJaiGs2oN_qNK-W8t5b9FoH8C7LK0GGeIXeRzSxR1LTidqnI1aRfxfgBa3vvnFIj792MfWrNgu9USDIWC9Ghr0Y/s320/logo%20nova.png";
const HERO_IMAGE = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3QVnxVyK3LEGb9SefE-QXBUZUBOqQb9dhHP97br6OugwjPFpaYhQ1uUqV1ul8yXW1-6MP1ZRTL_1qNmrbf5PJdHoQ-PPvMfOHFYf_nhpVOJr8uJXou5tTBOtpcyP6jmuc7YTkT3Yihlmfbc5bPaf-QSmvcivcYdm4KVFu6IhChD8qcd1pNAhSIPS1U-Q/s16000/heroazul.png";
const ABOUT_IMAGE = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsYv_OHQwE2zGU4XYSc1acmGyeLrUuG45ss3wMKxnihLu_oHxxMTRpMc1L_ajZrXDEkdlIoAPIKiRA4ZdGYSC1KsQK243af_O2WqPIA6U8i2sB1xb9uZWEZFIJ5C-xU542vSl5xugja35JMSRURBKDF225Zd92sFNVLdbN-e8iQxo5hbSqW-GakJKEyR4/w427-h640/renata.png";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  wrapperClassName?: string;
};

const Section = ({ children, className = "", id, wrapperClassName = "" }: SectionProps) => (
  <section id={id} className={`w-full overflow-hidden ${wrapperClassName}`}>
    <div className={`py-10 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  </section>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Limpeza Semanal', href: '#weekly' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <img src={LOGO_URL} alt="Reenergizar Logo" className="h-10 md:h-12 w-auto object-contain" referrerPolicy="no-referrer" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-brand-blue' : 'text-white hover:text-brand-green'}`}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="https://wa.me/553191573115" 
            target="_blank" 
            rel="noopener noreferrer"
            className="animate-pulse-cta bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-brand-blue/30 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-slate-800' : 'text-white'}`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-slate-600 hover:text-brand-blue"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="https://wa.me/553191573115"
                className="w-full bg-brand-blue text-white px-6 py-3 rounded-xl text-center font-semibold block"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="Reenergizar Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent md:bg-gradient-to-r"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white md:pt-0"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-3 py-1 rounded-full bg-brand-green/20 backdrop-blur-sm border border-brand-green/30 text-brand-green text-[10px] md:text-sm font-bold tracking-widest uppercase mb-6"
            >
              Atendimento Online em Todo o Brasil
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight md:leading-[1.1] mb-6">
              Às vezes o que você precisa, é se <span className="text-brand-green">Reenergizar.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
              Limpeza energética profunda e ritual de alinhamento semanal para liberar pesos invisíveis e retomar sua leveza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#weekly" 
                className="animate-pulse-cta group w-full sm:w-auto bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-brand-blue/20"
              >
                Começar Limpeza <span className="hidden sm:inline">Semanal</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#about" 
                className="group w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center transition-all hover:bg-white/20"
              >
                Conhecer Renata Lu
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Banner */}
      <div className="bg-white py-8 md:py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Atendimentos Realizados', value: '100+', icon: Users },
              { label: 'Especialista em Limpeza', value: 'Campo Vibracional', icon: Sparkles },
              { label: 'Participantes por Sessão', value: 'Até 30', icon: ShieldCheck },
              { label: 'Frequência Semanal', icon: Calendar, value: 'Toda Quarta 15h' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:border-r last:border-0 border-slate-100 px-4"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-brand-blue animate-float" />
                </div>
                <div className="text-2xl font-display font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Ritual Section */}
      <Section id="weekly" wrapperClassName="bg-brand-green">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Limpeza Energética Profunda de Quarta-Feira
          </h2>
          <p className="text-lg text-slate-900 font-medium">
            Seu ritual semanal de alinhamento e leveza. Toda quarta às 15h, realizo uma ativação energética remota para limpeza profunda do campo vibracional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="group glass-card p-8 rounded-[2rem]"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-brand-blue shadow-sm animate-float">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4">Por que Semanal?</h3>
            <p className="text-slate-700 leading-relaxed font-medium">
              Energia se acumula. Assim como o banho diário, seu campo também absorve tensões e pensamentos. A limpeza semanal é seu reinício.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="group glass-card p-8 rounded-[2rem]"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-brand-green shadow-sm animate-float">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4">Como Funciona?</h3>
            <p className="text-slate-700 leading-relaxed font-medium">
              Trabalho remoto via mesa radiônica. Você não precisa estar online. Eu me conecto ao seu Eu Superior e as energias são recebidas no seu campo.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="group glass-card p-8 rounded-[2rem]"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-brand-blue shadow-sm animate-float">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4">Relatório Energético</h3>
            <p className="text-slate-700 leading-relaxed font-medium">
              Após a ativação, você recebe um relatório pelo WhatsApp explicando o que foi identificado e reorganizado no campo coletivo.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Services / Benefits (Bento Grid Style) */}
      <Section id="services">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">O que a limpeza trabalha?</h2>
          <p className="text-slate-600">Um processo profundo de reorganização que impacta todas as áreas da sua vida.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-brand-green rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center border border-brand-green/20 shadow-lg">
            <Heart className="w-16 h-16 text-white mb-6 animate-float" />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Equilíbrio Emocional</h3>
            <p className="text-slate-800 font-medium">Liberação de cargas emocionais acumuladas, redução de ansiedade e restauração da paz interior através da harmonização dos chakras.</p>
          </div>
          
          <div className="md:col-span-2 bg-brand-blue rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center border border-white/10 shadow-lg text-white">
            <Gem className="w-12 h-12 text-brand-green mb-4 animate-float" />
            <h3 className="text-xl font-bold mb-2">Desbloqueio de Prosperidade</h3>
            <p className="text-white/80 text-sm font-medium">Remoção de crenças limitantes e padrões repetitivos que travam o fluxo de abundância e novas oportunidades.</p>
          </div>

          <div className="md:col-span-1 bg-brand-green rounded-[2.5rem] p-6 border border-brand-green/20 flex flex-col items-center justify-center text-center shadow-md">
            <h3 className="font-bold text-slate-900 mb-2">Limpeza Profunda</h3>
            <p className="text-slate-800 text-xs font-medium">Proteção contra interferências externas densas e influências de ambientes carregados.</p>
            <ShieldCheck className="w-8 h-8 text-white mt-4 animate-float" />
          </div>

          <div className="md:col-span-1 bg-slate-900 rounded-[2.5rem] p-6 text-white flex flex-col items-center justify-center text-center border border-white/5 shadow-md">
            <h3 className="font-bold mb-2">Upgrade Vibracional</h3>
            <p className="text-slate-400 text-xs">Elevação da frequência geral para atrair relacionamentos saudáveis e clareza mental.</p>
            <Sparkles className="w-8 h-8 text-brand-green mt-4 animate-float" />
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-brand-green/10 rounded-[2rem] -rotate-3"></div>
            <img 
              src={ABOUT_IMAGE} 
              alt="Renata Lu - Terapeuta" 
              className="relative rounded-[2rem] shadow-2xl w-full max-w-md mx-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block">Sua Guia no Processo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Eu sou Renata Lu</h2>
            <div className="space-y-6 text-slate-600">
              <p>
                Terapeuta energética e espiritual, especializada em desbloqueios e limpezas do campo energético, com mais de 100 atendimentos realizados.
              </p>
              <p>
                Criei a Limpeza Energética Profunda de quarta-feira para quem deseja manter o campo equilibrado sem esperar entrar em colapso. Energia equilibrada não é luxo, é a base para uma vida que flui.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 animate-float" />
                  <span className="text-sm font-medium">Mesa Radiônica</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 animate-float" />
                  <span className="text-sm font-medium">Alinhamento de Chakras</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 animate-float" />
                  <span className="text-sm font-medium">Reprogramação Vibracional</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 animate-float" />
                  <span className="text-sm font-medium">Atendimento Remoto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing / Participation Models */}
      <section id="pricing" className="bg-brand-blue text-white overflow-hidden relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="1" fill="white" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-8">
                Energia equilibrada não é luxo. <span className="text-brand-green">É base!</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-10">
                Escolha a melhor forma de iniciar seu processo de reorganização. Vagas limitadas para garantir o trabalho individualizado na mesa radiônica.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-brand-green group-hover:text-slate-900 transition-colors">
                    <Clock className="w-5 h-5 animate-float" />
                  </div>
                  <span className="text-lg font-medium">Inscrições encerram toda quarta às 12h</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-brand-green group-hover:text-slate-900 transition-colors">
                    <CheckCircle2 className="w-5 h-5 animate-float" />
                  </div>
                  <span className="text-lg font-medium">Feedback detalhado pós-ativação</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Mini Cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {/* Option 1 Mini */}
              <div className="bg-white rounded-3xl p-6 text-slate-900 shadow-2xl flex flex-col transform hover:-translate-y-1 transition-transform">
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-1 leading-tight">Participação Avulsa</h3>
                  <div className="text-2xl font-black text-brand-blue">R$ 27</div>
                </div>
                <ul className="space-y-2 mb-6 text-xs text-slate-500 font-medium">
                  <li className="flex items-center gap-2 italic">● Ritual Semanal</li>
                  <li className="flex items-center gap-2 italic">● Relatório Coletivo</li>
                </ul>
                <a 
                  href="https://wa.me/553191573115?text=Olá,%20gostaria%20de%20participar%20da%20Ativação%20Avulsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-pulse-cta mt-auto w-full py-2.5 bg-slate-50 text-brand-blue border border-brand-blue/20 rounded-xl text-center text-xs font-bold hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  Garantir Vaga
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Option 2 Mini */}
              <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-2xl flex flex-col relative border border-white/10 transform hover:-translate-y-1 transition-transform">
                <div className="absolute top-3 right-3">
                  <span className="bg-brand-green text-slate-900 text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Mensal</span>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-1 leading-tight">Ciclo Completo</h3>
                  <div className="text-2xl font-black text-brand-green">R$ 97</div>
                </div>
                <ul className="space-y-2 mb-6 text-xs text-slate-400 font-medium">
                  <li className="flex items-center gap-2 italic">● 4 Quartas Seguídas</li>
                  <li className="flex items-center gap-2 italic">● Relatório Personalizado</li>
                </ul>
                <a 
                  href="https://wa.me/553191573115?text=Olá,%20gostaria%20de%20participar%20do%20Ciclo%20Mensal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-pulse-green mt-auto w-full py-2.5 bg-brand-green text-slate-900 rounded-xl text-center text-xs font-bold hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-green/20"
                >
                  Assinar Ciclo
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Section id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: 'Preciso estar online no horário?', a: 'Não! As ativações são realizadas à distância. Você envia seus dados e recebe as energias conforme sua necessidade, sem precisar parar suas atividades.' },
              { q: 'Quanto tempo leva para sentir os efeitos?', a: 'Cada pessoa reage de uma forma. Muitos relatam leveza, clareza mental e melhora na qualidade do sono já nos primeiros dias após a ativação.' },
              { q: 'É um trabalho religioso?', a: 'Não. O trabalho é espiritual e energético, mas não possui vínculo com nenhuma religião específica. Atua na anatomia sutil do ser.' },
              { q: 'Substitui tratamento médico?', a: 'Não. As terapias energéticas são práticas complementares significativas, mas não substituem acompanhamento médico ou psicológico profissional.' }
            ].map((item, i) => (
              <details key={i} className="group overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 bg-brand-green open:bg-white border border-brand-green/20 open:shadow-xl">
                <summary className="flex items-center justify-between font-bold text-slate-900 p-6 [&_summary::-webkit-details-marker]:hidden list-none">
                  {item.q}
                  <span className="shrink-0 ml-1.5 transition duration-500 group-open:-rotate-180">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base border-t border-slate-100 pt-4">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="px-0 py-0 max-w-none">
        <div className="bg-brand-blue rounded-none md:rounded-[4rem] mx-0 md:mx-6 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="relative z-10 py-12 px-6 md:py-24 text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">Sente que algo está travado ou pesado na sua vida?</h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-12">
              Lembre-se: energia equilibrada não é luxo. É a base para tudo o que você deseja manifestar. 
              <strong> Inscrições abertas até quarta-feira às 12h.</strong>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://wa.me/553191573115"
                className="animate-pulse-cta bg-white text-brand-blue hover:bg-brand-green hover:text-slate-900 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                Ativação Coletiva Limpeza
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-8 text-white/60 text-sm">Vagas limitadas a 30 participantes. Restam poucas para esta semana.</p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <img src={LOGO_URL} alt="Reenergizar Logo" className="h-16 w-auto mx-auto md:mx-0 mb-6 object-contain" referrerPolicy="no-referrer" />
            <p className="text-slate-500 max-w-xs text-sm">
              Sua jornada semanal de alinhamento, leveza e conexão espiritual com Renata Lu.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a href="https://www.instagram.com/reenergizar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-all shadow-sm">
                <Instagram className="w-6 h-6 animate-float" />
              </a>
              <a href="https://wa.me/553191573115" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-green hover:text-white transition-all shadow-sm">
                <MessageCircle className="w-6 h-6 animate-float" />
              </a>
            </div>
            <div className="text-slate-400 text-sm font-medium">
              &copy; 2026 - REENERGIZAR Renata Lu
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-50 text-center">
          <p className="text-[10px] text-slate-300 uppercase tracking-widest leading-loose max-w-2xl mx-auto italic">
            Prática complementar e não substitui acompanhamento médico, psicológico ou qualquer tratamento de saúde.
          </p>
        </div>
      </footer>

      {/* Fixed WhatsApp (Mobile) */}
      <a 
        href="https://wa.me/553191573115"
        className="fixed bottom-6 right-6 z-40 md:hidden bg-brand-green text-white p-4 rounded-full shadow-2xl animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
