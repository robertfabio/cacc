"use client";

import { FC, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaLightbulb, FaUsers, FaComments, FaChevronDown } from 'react-icons/fa';
import {
  fadeUpVariant,
  staggerContainer,
  scaleUpVariant,
  hoverVariant,
  infiniteBounceVariant,
  patternVariant,
  smoothScroll
} from '../utils/animations';

import Header from '../components/Header';
import TeamSection from '../components/TeamSection';
import EventsSection from '../components/EventsSection';
import Footer from '../components/Footer';
import AcademicInfoSection from '../components/AcademicInfoSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import AboutSection from '../components/AboutSection';
import StudentResourcesSection from '../components/StudentResourcesSection';
import NewsAndEventsSection from '../components/NewsAndEventsSection';

import CurriculumSection from '../components/CurriculumSection';

const Home: FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const [formStatus, setFormStatus] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: ''
  });

  const hideNotification = () => {
    setFormStatus(prev => ({ ...prev, show: false }));
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary">
          {/* Background Pattern */}
          <motion.div 
            className="absolute inset-0 z-0"
            variants={patternVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a56db_1px,transparent_1px),linear-gradient(to_bottom,#1a56db_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          </motion.div>

          <motion.div 
            className="container relative z-10 text-white"
            style={{ opacity, y }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="text-center lg:text-left"
              >
                <motion.div
                  variants={fadeUpVariant}
                  custom={0}
                  className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
                >
                  <span className="text-sm font-medium">Proposta de Criação</span>
                </motion.div>

                <motion.h1 
                  variants={fadeUpVariant}
                  custom={1}
                  className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                >
                  Centro Acadêmico de{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">Ciência da Computação</span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="absolute bottom-2 left-0 h-3 bg-blue-400/30 -z-10"
                    />
                  </span>
                </motion.h1>

                <motion.p 
                  variants={fadeUpVariant}
                  custom={2}
                  className="mb-8 text-lg sm:text-xl text-white/90 max-w-xl mx-auto lg:mx-0"
                >
                  Uma iniciativa para fortalecer a representação estudantil e criar 
                  uma comunidade mais unida na UFERSA.
                </motion.p>

                <motion.div 
                  variants={fadeUpVariant}
                  custom={3}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <motion.button 
                    onClick={() => smoothScroll('about')}
                    className="px-8 py-3 text-lg font-semibold rounded-lg bg-white text-primary hover:bg-white/90 transition-colors flex items-center gap-2"
                    variants={hoverVariant}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Saiba mais
                    <FaArrowRight size={16} />
                  </motion.button>
                  <motion.button 
                    onClick={() => smoothScroll('contact')}
                    className="px-8 py-3 text-lg font-semibold rounded-lg border-2 border-white/70 hover:bg-white/10 transition-colors"
                    variants={hoverVariant}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Participe
                  </motion.button>
                </motion.div>
              </motion.div>

              <motion.div
                variants={scaleUpVariant}
                initial="hidden"
                animate="visible"
                custom={4}
                className="hidden lg:block"
              >
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative p-8 bg-white/10 rounded-lg border border-white/20">
                    <motion.div 
                      className="grid grid-cols-2 gap-4"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {[
                        { title: "Representação", desc: "Voz ativa nas decisões do curso" },
                        { title: "Eventos", desc: "Workshops e encontros" },
                        { title: "Recursos", desc: "Material de estudo" },
                        { title: "Comunidade", desc: "Integração estudantil" }
                      ].map((item, index) => (
                        <motion.div
                          key={item.title}
                          variants={fadeUpVariant}
                          custom={index}
                          className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-white/80">{item.desc}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={infiniteBounceVariant}
            animate="animate"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80"
          >
            <FaChevronDown size={24} />
          </motion.div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* News and Events Section */}
        <NewsAndEventsSection />

        {/* Curriculum Section */}
        <CurriculumSection />

        {/* Student Resources Section */}
        <StudentResourcesSection />

        {/* Academic Info Section */}
        <AcademicInfoSection />
        
        {/* FAQ Section */}
        <FaqSection />

        {/* Team Section */}
        <TeamSection />

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 bg-primary text-white">
          <div className="container max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Sobre Esta Proposta</h2>
              <p className="text-base sm:text-lg max-w-3xl mx-auto">
                Este site é uma demonstração do potencial de um Centro Acadêmico ativo 
                para o curso de Ciência da Computação da UFERSA. O projeto ilustra como 
                um CACC pode centralizar informações, oportunidades e recursos para 
                beneficiar toda a comunidade acadêmica.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 mb-12 sm:mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6">Por que um CACC?</h3>
                <div className="space-y-6">
                  <motion.div 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="flex-shrink-0">
                      <FaUsers size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Representação Estudantil</h4>
                      <p className="text-white/80 text-sm sm:text-base">
                        Um CACC fornece uma voz organizada e oficial para os estudantes, 
                        facilitando o diálogo com a coordenação e demais instâncias da universidade.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="flex-shrink-0">
                      <FaLightbulb size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Centralização de Recursos</h4>
                      <p className="text-white/80 text-sm sm:text-base">
                        Como demonstrado neste site, um CACC pode reunir informações, 
                        oportunidades e recursos atualmente dispersos em diferentes canais.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="flex-shrink-0">
                      <FaComments size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Comunidade Acadêmica</h4>
                      <p className="text-white/80 text-sm sm:text-base">
                        O CACC pode fortalecer a comunidade acadêmica através de eventos, 
                        grupos de estudo e iniciativas que aproximem os estudantes.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6">Feedback e Sugestões</h3>
                {formStatus.show && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-4 p-4 rounded-lg ${
                      formStatus.type === 'success' 
                        ? 'bg-green-500/20 border border-green-500/30' 
                        : 'bg-red-500/20 border border-red-500/30'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-sm">{formStatus.message}</p>
                      <button 
                        onClick={hideNotification} 
                        className="text-white/80 hover:text-white"
                      >
                        ×
                      </button>
                    </div>
                  </motion.div>
                )}
                <form
                  action="https://formspree.io/f/xeoaprpd"
                  method="POST"
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);
                    
                    setFormStatus({
                      show: true,
                      type: 'success',
                      message: 'Enviando mensagem...'
                    });
                    
                    fetch('https://formspree.io/f/xeoaprpd', {
                      method: 'POST',
                      body: formData,
                      headers: {
                        'Accept': 'application/json'
                      }
                    })
                    .then(response => {
                      if (response.ok) {
                        setFormStatus({
                          show: true,
                          type: 'success',
                          message: 'Mensagem enviada com sucesso! Obrigado pelo seu feedback.'
                        });
                        form.reset();
                        
                        // Esconder a notificação após 5 segundos
                        setTimeout(() => {
                          setFormStatus(prev => ({ ...prev, show: false }));
                        }, 5000);
                      } else {
                        response.json().then(data => {
                          if (Object.hasOwn(data, 'errors')) {
                            const errorMessage = data.errors.map((error: any) => error.message).join(", ");
                            setFormStatus({
                              show: true,
                              type: 'error',
                              message: `Erro: ${errorMessage}`
                            });
                          } else {
                            setFormStatus({
                              show: true,
                              type: 'error',
                              message: 'Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.'
                            });
                          }
                        });
                      }
                    })
                    .catch(error => {
                      console.error('Error:', error);
                      setFormStatus({
                        show: true,
                        type: 'error',
                        message: 'Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.'
                      });
                    });
                  }}
                >
                  <input type="hidden" name="_subject" value="Novo feedback do site CACC" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="text" name="_gotcha" style={{ display: 'none' }} aria-hidden="true" />
                  
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm sm:text-base">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm sm:text-base">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block mb-2 text-sm sm:text-base">Tipo de Feedback</label>
                    <div className="relative">
                      <select
                        id="type"
                        name="type"
                        required
                        className="w-full px-4 py-2 rounded appearance-none bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-sm sm:text-base text-white pr-10"
                      >
                        <option value="suggestion" className="bg-primary text-white">Sugestão</option>
                        <option value="interest" className="bg-primary text-white">Interesse em Participar</option>
                        <option value="question" className="bg-primary text-white">Dúvida</option>
                        <option value="other" className="bg-primary text-white">Outro</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm sm:text-base">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-sm sm:text-base"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-6 bg-white text-primary font-semibold rounded hover:bg-white/90 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enviar Feedback
                    <FaArrowRight size={16} />
                  </motion.button>
                </form>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Próximos Passos</h3>
              <div className="prose prose-lg prose-invert mx-auto px-4">
                <ol className="text-left space-y-4 list-decimal list-inside text-sm sm:text-base">
                  <li>Apresentação da proposta à Coordenação do curso</li>
                  <li>Coleta de feedback e sugestões da comunidade acadêmica</li>
                  <li>Identificação de estudantes interessados em formar a primeira gestão</li>
                  <li>Elaboração do estatuto e documentação necessária</li>
                  <li>Assembleia de fundação e eleição da primeira diretoria</li>
                </ol>
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-lg mx-4">
                <p className="text-sm">
                  Este é um projeto desenvolvido por Fábio Roberto, aluno do primeiro 
                  semestre de Ciência da Computação na UFERSA. Para mais informações 
                  ou contato direto: <a href="mailto:fabio.filho25453@alunos.ufersa.edu.br" className="underline hover:text-white/80">fabio.filho25453@alunos.ufersa.edu.br</a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;