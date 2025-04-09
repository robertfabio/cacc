"use client";

import { FC } from 'react';
import { Calendar, Clock, MapPin, Bell, Tag, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

type NewsItem = {
  title: string;
  date: string;
  summary: string;
  source: 'cacc' | 'department' | 'university';
  tag: string;
};

type EventItem = {
  title: string;
  date: string;
  time: string;
  location: string;
  type?: string;
  image?: string;
  link?: string;
  description?: string;
};

const newsItems: NewsItem[] = [
  {
    title: "CACC lança programa de mentoria para disciplinas desafiadoras",
    date: "15 Mar 2025",
    summary: "Nova iniciativa conecta estudantes veteranos com calouros para fornecer apoio em Cálculo, Algoritmos, Estruturas de Dados e Programação. Mentores receberão certificação de horas complementares.",
    source: "cacc",
    tag: "Programa Acadêmico"
  },
  {
    title: "Sucesso no Hackathon de Inteligência Artificial & Web3",
    date: "26 Fev 2025",
    summary: "Equipes desenvolveram soluções inovadoras em 48h de imersão. A equipe vencedora 'CodeCrafters' criou uma plataforma de previsão climática usando técnicas avançadas de deep learning, garantindo vaga na final nacional.",
    source: "cacc",
    tag: "Evento Realizado"
  },
  {
    title: "Novas regras para TCC entram em vigor no semestre 2025.1",
    date: "10 Fev 2025",
    summary: "Coordenação aprova mudanças importantes: possibilidade de TCCs em formato de artigo, entregas incrementais e novos critérios de avaliação. CACC disponibilizou guia completo com modelo Latex atualizado no repositório oficial.",
    source: "department",
    tag: "Deadline Importante"
  },
  {
    title: "CACC firma parceria com empresas de tecnologia para estágios exclusivos",
    date: "05 Fev 2025",
    summary: "Acordo garante 15 vagas semestrais em empresas como Oracle, IBM e startups locais. Programa inclui mentoria profissional e possibilidade de contratação após formatura.",
    source: "cacc",
    tag: "Oportunidade Profissional"
  },
  {
    title: "Laboratório de IA inaugura novos equipamentos com GPUs de última geração",
    date: "20 Jan 2025",
    summary: "Investimento de R$500 mil permite pesquisas avançadas em deep learning e computação de alto desempenho. Estudantes já podem agendar horários para projetos através do portal do CACC.",
    source: "university",
    tag: "Infraestrutura"
  }
];

const upcomingEvents: EventItem[] = [
  {
    title: "Hackathon: Soluções Sustentáveis com IoT",
    date: "12-14 Abr 2025",
    time: "48 horas (início: 18:00)",
    location: "Laboratórios de Computação & Online",
    type: "Competição",
    description: "Desenvolva protótipos de soluções para desafios ambientais utilizando Internet das Coisas. Premiação total de R$10.000 e possibilidade de incubação no parque tecnológico."
  },
  {
    title: "Semana de Ciência da Computação UFERSA 2025",
    date: "05-09 Mai 2025",
    time: "14:00 - 22:00 (diariamente)",
    location: "Auditório Central e Laboratórios",
    type: "Evento Principal",
    description: "O maior evento do curso com palestrantes nacionais e internacionais, minicursos práticos, feira de recrutamento e apresentação de projetos de pesquisa e extensão."
  },
  {
    title: "Workshop: IA Generativa e Prompting Avançado",
    date: "20 Mar 2025",
    time: "15:00 - 19:00",
    location: "Lab 03 - Bloco de Computação",
    type: "Workshop Técnico",
    description: "Aprenda técnicas avançadas para interagir com modelos de linguagem e criar aplicações inovadoras com ChatGPT, Claude e outras IAs. Vagas limitadas a 40 participantes."
  },
  {
    title: "Visita Técnica: Centro de Operações Google São Paulo",
    date: "15 Jun 2025",
    time: "Dia inteiro (saída: 06:00)",
    location: "São Paulo, SP (transporte incluído)",
    type: "Visita Técnica",
    description: "Oportunidade exclusiva para conhecer a infraestrutura e operações do Google Brasil. Inscrições até 30/05, com 30 vagas disponíveis. Prioridade para membros do CACC."
  }
];

const consolidatedEvents = [
  ...upcomingEvents.map(event => ({ ...event, type: event.type || 'Evento' })),
  {
    id: 1,
    title: "Cerimônia de Recepção dos Calouros 2025.2",
    description: "Evento oficial de boas-vindas aos novos estudantes de Ciência da Computação, com apresentação do curso, corpo docente, oportunidades acadêmicas e integração com veteranos. Programação inclui tour pelos laboratórios e coffee break.",
    date: "05 Ago 2025",
    time: "14:00 - 18:00",
    location: "Auditório Central - UFERSA Campus Mossoró",
    image: "https://placehold.co/800x450/003366/ffffff.png?text=Recepção+Calouros+2025",
    link: "#",
    type: 'Evento Institucional'
  }
];

const NewsAndEventsSection: FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.25,
        when: "beforeChildren" 
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 25,
        duration: 0.2
      } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.02 * custom,
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }),
    hover: {
      y: -6,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.15, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 20, 
        duration: 0.2
      } 
    }
  };

  return (
    <motion.section 
      id="news" 
      className="py-16 sm:py-24 bg-white"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={headerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, type: "spring", stiffness: 400, damping: 30 }}
          >
            Notícias e Eventos
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.05 }}
          >
            Mantenha-se informado sobre as atividades do curso, oportunidades e eventos relevantes 
            para sua formação em Ciência da Computação.
          </motion.p>
          <motion.div 
            className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.2, 
              delay: 0.1,
              type: "spring",
              stiffness: 400,
              damping: 20
            }}
          >
            <p className="text-sm text-blue-700">
              Demonstração de como um CACC poderia centralizar informações do departamento, 
              universidade e atividades próprias.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* News Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center justify-between mb-6">
              <motion.h3 
                className="text-2xl font-bold text-gray-900"
                variants={headerVariants}
              >
                Últimas Notícias
              </motion.h3>
              <motion.div
                variants={iconVariants}
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <Bell className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
            <div className="space-y-6">
              {newsItems.map((news, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md p-6 overflow-hidden"
                  variants={cardVariants}
                  custom={index}
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <motion.span 
                      className="text-sm text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                    >
                      {news.date}
                    </motion.span>
                    <motion.span 
                      className={`px-3 py-1 rounded-full text-xs font-medium
                        ${news.source === 'cacc' ? 'bg-primary/10 text-primary' :
                          news.source === 'department' ? 'bg-secondary/10 text-secondary' :
                          'bg-gray-100 text-gray-600'}`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.2 }}
                    >
                      {news.source === 'cacc' ? 'CACC' :
                       news.source === 'department' ? 'Departamento' : 'UFERSA'}
                    </motion.span>
                  </div>
                  <motion.h4 
                    className="text-lg font-semibold mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.25 }}
                  >
                    {news.title}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-600 mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.25 }}
                  >
                    {news.summary}
                  </motion.p>
                  <motion.div 
                    className="flex items-center text-sm text-gray-500"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.2 }}
                  >
                    <Tag className="w-4 h-4 mr-1" />
                    {news.tag}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Consolidated Events Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center justify-between mb-6">
              <motion.h3 
                className="text-2xl font-bold text-gray-900"
                variants={headerVariants}
              >
                Próximos Eventos
              </motion.h3>
              <motion.div
                variants={iconVariants}
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <Calendar className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
            <div className="space-y-6">
              {consolidatedEvents.map((event, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md p-6 overflow-hidden"
                  variants={cardVariants}
                  custom={index}
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >
                  {event.image && (
                    <motion.div 
                      className="h-48 overflow-hidden relative mb-4 rounded-md"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        unoptimized
                      />
                    </motion.div>
                  )}
                  <div className="flex items-center justify-between mb-3">
                    <motion.span 
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                    >
                      {event.type ? event.type : 'Evento'}
                    </motion.span>
                    {event.link && (
                      <motion.div
                        initial={{ opacity: 0, x: 5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15, duration: 0.2 }}
                      >
                        <Link 
                          href={event.link}
                          className="text-sm text-primary hover:underline flex items-center group"
                        >
                          <span>Mais detalhes</span>
                          <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" />
                        </Link>
                      </motion.div>
                    )}
                  </div>
                  <motion.h4 
                    className="text-lg font-semibold mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.25 }}
                  >
                    {event.title}
                  </motion.h4>
                  <motion.div 
                    className="space-y-2 text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.25 }}
                  >
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-primary/70" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-primary/70" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-primary/70" />
                      <span>{event.location}</span>
                    </div>
                    {event.description && (
                      <motion.div 
                        className="mt-3 pt-3 border-t border-gray-100 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.25 }}
                      >
                        <p className="text-gray-700 leading-relaxed">{event.description}</p>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.3, 
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
        >
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors duration-300">
            <h4 className="font-semibold text-primary mb-2">Proposta de Valor</h4>
            <p className="text-gray-600">
              Um CACC ativo manteria este espaço constantemente atualizado com notícias relevantes, 
              prazos importantes e eventos enriquecedores para a comunidade acadêmica. Seria o ponto 
              central de informações para os estudantes de Computação.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewsAndEventsSection; 