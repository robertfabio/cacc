"use client";

import { FC } from 'react';
import { BookOpen, UserPlus, MessagesSquare, GraduationCap, Book, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <UserPlus className="w-10 h-10 text-secondary" />,
    title: "Representação Estudantil",
    description: "Sua voz nas decisões importantes! Participamos ativamente do Conselho de Curso, garantindo que mudanças curriculares, infraestrutura e políticas acadêmicas reflitam as necessidades dos estudantes.",
    examples: ["Aprovação de novas optativas", "Melhorias nos laboratórios", "Flexibilização de pré-requisitos"]
  },
  {
    icon: <MessagesSquare className="w-10 h-10 text-secondary" />,
    title: "Comunicação e Apoio",
    description: "Canal direto com coordenação e professores! Facilitamos a resolução de problemas acadêmicos e mantemos você informado sobre oportunidades e deadlines importantes.",
    examples: ["Grupo no WhatsApp", "Instagram @cacc.ufersa", "Plantão de dúvidas semanal"]
  },
  {
    icon: <BookOpen className="w-10 h-10 text-secondary" />,
    title: "Eventos Acadêmicos",
    description: "Conexão com o mercado e academia! Organizamos eventos que complementam sua formação e expandem sua rede de contatos profissionais.",
    examples: ["Semana de Computação", "Hackathons", "Workshops técnicos"]
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-secondary" />,
    title: "Apoio Acadêmico",
    description: "Suporte para seu sucesso! Oferecemos recursos e iniciativas para ajudar em disciplinas desafiadoras e no desenvolvimento de projetos.",
    examples: ["Monitoria em Cálculo e Programação", "Grupos de estudo", "Preparação para maratona de programação"]
  },
  {
    icon: <Book className="w-10 h-10 text-secondary" />,
    title: "Biblioteca do CACC",
    description: "Acesso a conhecimento! Mantemos um acervo atualizado de recursos para consulta, incluindo materiais exclusivos desenvolvidos por alunos e professores.",
    examples: ["Livros técnicos", "TCCs exemplares", "Materiais de estudo"]
  },
  {
    icon: <Layout className="w-10 h-10 text-secondary" />,
    title: "Oportunidades Profissionais",
    description: "Início de carreira facilitado! Conectamos alunos a oportunidades de estágio, pesquisa e emprego através de nossa rede de parceiros e ex-alunos.",
    examples: ["Vagas de estágio", "Projetos de pesquisa", "Programas trainee"]
  }
];

const ServicesSection: FC = () => {
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
  
  const textVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };
  
  const listItemVariants = {
    hidden: { opacity: 0, x: -3, y: 2 },
    visible: (custom: number) => ({
      opacity: 1, 
      x: 0,
      y: 0, 
      transition: { 
        delay: 0.02 * custom,
        duration: 0.15,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      id="services"
      className="py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, type: "spring", stiffness: 400, damping: 30 }}
            className="mb-4 text-4xl font-bold text-center text-primary"
          >
            Como Podemos Ajudar
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="max-w-3xl mx-auto text-lg text-gray-700"
          >
            O CACC existe para tornar sua jornada acadêmica mais produtiva e agradável. 
            Conheça nossos serviços e como eles podem beneficiar você:
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              className="p-6 bg-white rounded-lg shadow-md transition-all duration-200"
            >
              <motion.div 
                className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10"
                variants={iconVariants}
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                {service.icon}
              </motion.div>
              <motion.h3 
                variants={textVariants}
                className="mb-3 text-xl font-bold text-primary"
              >
                {service.title}
              </motion.h3>
              <motion.p 
                variants={textVariants}
                className="mb-4 text-gray-700"
              >
                {service.description}
              </motion.p>
              <motion.div 
                variants={textVariants}
                className="pt-4 mt-4 border-t border-gray-100"
              >
                <p className="mb-2 text-sm font-semibold text-gray-600">Exemplos práticos:</p>
                <ul className="pl-4 text-sm list-disc text-gray-600">
                  {service.examples.map((example, i) => (
                    <motion.li 
                      key={i} 
                      className="mb-1"
                      variants={listItemVariants}
                      custom={i}
                    >
                      {example}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection; 