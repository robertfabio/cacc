"use client";

import { FC } from 'react';
import { BookOpen, UserPlus, MessagesSquare, GraduationCap, Book, Layout } from 'lucide-react';

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
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="mb-4 text-4xl font-bold text-center text-primary">Como Podemos Ajudar</h2>
        <p className="max-w-3xl mx-auto mb-16 text-lg text-center text-gray-700">
          O CACC existe para tornar sua jornada acadêmica mais produtiva e agradável. 
          Conheça nossos serviços e como eles podem beneficiar você:
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">{service.title}</h3>
              <p className="mb-4 text-gray-700">{service.description}</p>
              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="mb-2 text-sm font-semibold text-gray-600">Exemplos práticos:</p>
                <ul className="pl-4 text-sm list-disc text-gray-600">
                  {service.examples.map((example, i) => (
                    <li key={i} className="mb-1">{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 