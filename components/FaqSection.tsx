"use client";

import { FC, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type FaqItem = {
  question: string;
  answer: string;
  benefits?: string[];
};

const faqItems: FaqItem[] = [
  {
    question: "Como o CACC pode me ajudar no dia a dia do curso?",
    answer: "O CACC é seu parceiro durante toda a graduação! Atuamos como ponte entre alunos e coordenação, oferecemos suporte acadêmico e criamos oportunidades de desenvolvimento profissional.",
    benefits: [
      "Resolução rápida de problemas com disciplinas e professores",
      "Acesso a materiais de estudo e monitoria",
      "Networking com empresas e profissionais da área",
      "Representação em reuniões importantes do curso"
    ]
  },
  {
    question: "Quais são os benefícios de participar ativamente do CACC?",
    answer: "Participar do CACC é uma oportunidade única de desenvolvimento pessoal e profissional! Você desenvolve habilidades essenciais para o mercado enquanto contribui para a comunidade acadêmica.",
    benefits: [
      "Desenvolvimento de soft skills (liderança, comunicação, trabalho em equipe)",
      "Experiência em gestão de projetos e eventos",
      "Networking com alunos de diferentes períodos",
      "Certificados para atividades complementares"
    ]
  },
  {
    question: "Como o CACC me ajuda a me preparar para o mercado de trabalho?",
    answer: "Facilitamos sua entrada no mercado através de diversas iniciativas que conectam você a oportunidades reais e desenvolvimento profissional.",
    benefits: [
      "Divulgação exclusiva de vagas de estágio e trainee",
      "Workshops com profissionais da área",
      "Visitas técnicas a empresas",
      "Preparação para processos seletivos"
    ]
  },
  {
    question: "Que tipo de apoio acadêmico o CACC oferece?",
    answer: "Oferecemos uma rede de suporte completa para ajudar você a ter sucesso nas disciplinas e no desenvolvimento de projetos acadêmicos.",
    benefits: [
      "Grupos de estudo para disciplinas difíceis",
      "Banco de provas e materiais anteriores",
      "Mentoria de alunos veteranos",
      "Workshops de tecnologias relevantes"
    ]
  },
  {
    question: "Como o CACC ajuda na integração dos calouros?",
    answer: "Temos um programa especial de acolhimento para garantir que você se sinta em casa desde o primeiro dia de aula!",
    benefits: [
      "Semana de recepção com atividades especiais",
      "Sistema de padrinhos/madrinhas",
      "Tour pelo campus e instalações",
      "Guia do calouro com dicas práticas"
    ]
  },
  {
    question: "Como o CACC contribui para a qualidade do curso?",
    answer: "Trabalhamos em parceria com a coordenação e departamento para garantir a excelência do curso e atender às necessidades dos estudantes.",
    benefits: [
      "Participação ativa nas decisões do colegiado",
      "Avaliação contínua da infraestrutura",
      "Sugestões de melhorias curriculares",
      "Feedback dos alunos para coordenação"
    ]
  }
];

const FaqSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // Variantes de animação para o FAQ com transições mais fluidas
  const faqVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        height: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4, ease: "easeIn" }
      } 
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2, ease: "easeOut" }
      } 
    }
  };
  
  // Variantes para o ícone de seta com animação mais suave
  const iconVariants = {
    open: { 
      rotate: 180, 
      scale: 1.1, 
      color: "#1a56db",
      transition: { type: "spring", stiffness: 400, damping: 15 }
    },
    closed: { 
      rotate: 0, 
      scale: 1, 
      color: "#6b7280",
      transition: { type: "spring", stiffness: 400, damping: 15 }
    }
  };
  
  // Variantes para o container da questão
  const questionContainerVariants = {
    active: {
      backgroundColor: "rgba(241, 245, 249, 0.8)",
      borderRadius: "0.5rem",
      transition: { duration: 0.2 }
    },
    inactive: {
      backgroundColor: "transparent",
      borderRadius: "0rem",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="faq" className="py-24 bg-background">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="mb-4 text-4xl font-bold text-center text-primary"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dúvidas Frequentes
        </motion.h2>
        <motion.p 
          className="max-w-3xl mx-auto mb-16 text-lg text-center text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Descubra como o CACC pode tornar sua experiência acadêmica mais rica e produtiva. 
          Aqui estão as respostas para as principais dúvidas dos alunos:
        </motion.p>
        
        <motion.div 
          className="max-w-3xl mx-auto divide-y divide-gray-200"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="py-5"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }
                }
              }}
            >
              <motion.button
                onClick={() => toggleQuestion(index)}
                className="flex items-center justify-between w-full text-left focus:outline-none p-3 rounded-md"
                initial={false}
                animate={openIndex === index ? "active" : "inactive"}
                variants={questionContainerVariants}
                whileHover={{ backgroundColor: "rgba(241, 245, 249, 0.5)", scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-xl font-medium text-gray-900">{item.question}</h3>
                <motion.span 
                  className="flex-shrink-0 ml-4"
                  animate={openIndex === index ? "open" : "closed"}
                  variants={iconVariants}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="overflow-hidden"
                    key={`faq-${index}`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={faqVariants}
                  >
                    <div className="mt-3 px-3">
                      <motion.p 
                        className="mb-4 text-base text-gray-700"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {item.answer}
                      </motion.p>
                      {item.benefits && (
                        <motion.div 
                          className="p-4 bg-gray-50 rounded-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <p className="mb-2 text-sm font-semibold text-primary">Benefícios principais:</p>
                          <ul className="pl-5 space-y-2 list-disc text-sm text-gray-600">
                            {item.benefits.map((benefit, i) => (
                              <motion.li 
                                key={i}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: 0.3 + (i * 0.1) }}
                                whileHover={{ x: 3, color: "#1a56db", transition: { duration: 0.2 } }}
                              >
                                {benefit}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FaqSection;