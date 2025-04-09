"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';

const AboutSection: FC = () => {
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
        staggerChildren: 0.05,
        delayChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  const titleVariants = {
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

  const descriptionVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.25,
        ease: "easeOut",
        delay: 0.05
      } 
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 3 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      id="about"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 text-4xl font-bold text-primary"
          >
            Sobre o CACC
          </motion.h2>
          
          <motion.p 
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            className="mb-6 text-lg"
          >
            O Centro Acadêmico de Ciência da Computação (CACC) é a entidade representativa dos estudantes 
            de Ciência da Computação da UFERSA. Nossa missão é representar os interesses dos alunos,
            promover eventos acadêmicos, culturais e sociais, além de contribuir para a melhoria
            do curso e da universidade.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.2, 
              type: "spring",
              stiffness: 400,
              damping: 20
            }}
            className="mb-8 p-3 bg-blue-50 border border-blue-200 rounded-md"
          >
            <p className="text-sm text-blue-700">
              Nota: Este é um site demonstrativo para ilustrar como um futuro CACC 
              poderia atuar e beneficiar os estudantes de Computação da UFERSA.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-6 text-left"
          >
            <motion.div
              variants={cardVariants}
              custom={0}
              whileHover="hover"
              className="p-6 bg-white rounded-lg shadow-md transition-all duration-200"
            >
              <motion.h3 
                variants={contentVariants}
                className="text-xl font-bold mb-3 text-primary"
              >
                Representação
              </motion.h3>
              <motion.p 
                variants={contentVariants}
                className="text-gray-600"
              >
                Atuação junto à coordenação, departamento e demais instâncias da universidade 
                para defender os interesses dos estudantes.
              </motion.p>
            </motion.div>
            
            <motion.div
              variants={cardVariants}
              custom={1}
              whileHover="hover"
              className="p-6 bg-white rounded-lg shadow-md transition-all duration-200"
            >
              <motion.h3 
                variants={contentVariants}
                className="text-xl font-bold mb-3 text-primary"
              >
                Integração
              </motion.h3>
              <motion.p 
                variants={contentVariants}
                className="text-gray-600"
              >
                Promoção de eventos e atividades que fortalecem a comunidade acadêmica 
                e criam oportunidades de networking.
              </motion.p>
            </motion.div>
            
            <motion.div
              variants={cardVariants}
              custom={2}
              whileHover="hover"
              className="p-6 bg-white rounded-lg shadow-md transition-all duration-200"
            >
              <motion.h3 
                variants={contentVariants}
                className="text-xl font-bold mb-3 text-primary"
              >
                Desenvolvimento
              </motion.h3>
              <motion.p 
                variants={contentVariants}
                className="text-gray-600"
              >
                Suporte ao desenvolvimento acadêmico e profissional dos estudantes 
                através de iniciativas e parcerias.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection; 