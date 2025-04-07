"use client";

import { FC } from 'react';
import { Calendar, Clock, MapPin, Bell, Tag, ExternalLink } from 'lucide-react';
import Link from 'next/link';

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
  type: string;
};

const newsItems: NewsItem[] = [
  {
    title: "CACC propõe criação de grupos de estudo para disciplinas fundamentais",
    date: "10 Out 2024",
    summary: "Iniciativa visa formar grupos de estudo para Cálculo, Algoritmos e Estruturas de Dados, com monitoria de alunos veteranos.",
    source: "cacc",
    tag: "Iniciativa Acadêmica"
  },
  {
    title: "Sucesso no Workshop de Git e GitHub para Iniciantes",
    date: "05 Out 2024",
    summary: "Mais de 40 alunos participaram do workshop prático sobre controle de versão, ministrado por alunos do 7º período.",
    source: "cacc",
    tag: "Evento Realizado"
  },
  {
    title: "Prazo para solicitação de colação de grau 2024.2 se aproxima",
    date: "01 Out 2024",
    summary: "Formandos devem submeter documentação até 30/10. CACC disponibiliza guia passo a passo do processo.",
    source: "department",
    tag: "Deadline Importante"
  }
];

const upcomingEvents: EventItem[] = [
  {
    title: "Hackathon: Inovação em Tecnologia Sustentável",
    date: "25 Out 2024",
    time: "09:00 - 21:00",
    location: "Laboratórios de Computação",
    type: "Competição"
  },
  {
    title: "Semana da Computação UFERSA 2024",
    date: "11-15 Nov 2024",
    time: "14:00 - 22:00",
    location: "Auditório Central e Labs",
    type: "Evento Especial"
  },
  {
    title: "Workshop: IA e Machine Learning na Prática",
    date: "28 Nov 2024",
    time: "15:00 - 18:00",
    location: "Lab 03 - Bloco de Computação",
    type: "Workshop Técnico"
  }
];

const NewsAndEventsSection: FC = () => {
  return (
    <section id="news" className="py-16 sm:py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Notícias e Eventos</h2>
          <p className="text-lg text-gray-600">
            Mantenha-se informado sobre as atividades do curso, oportunidades e eventos relevantes 
            para sua formação em Ciência da Computação.
          </p>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-700">
              Demonstração de como um CACC poderia centralizar informações do departamento, 
              universidade e atividades próprias.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* News Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Últimas Notícias</h3>
              <Bell className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-6">
              {newsItems.map((news, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{news.date}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium
                      ${news.source === 'cacc' ? 'bg-primary/10 text-primary' :
                        news.source === 'department' ? 'bg-secondary/10 text-secondary' :
                        'bg-gray-100 text-gray-600'}`}>
                      {news.source === 'cacc' ? 'CACC' :
                       news.source === 'department' ? 'Departamento' : 'UFERSA'}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{news.title}</h4>
                  <p className="text-gray-600 mb-3">{news.summary}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Tag className="w-4 h-4 mr-1" />
                    {news.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Próximos Eventos</h3>
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {event.type}
                    </span>
                    <Link 
                      href="#"
                      className="text-sm text-primary hover:underline flex items-center"
                    >
                      Mais detalhes
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{event.title}</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="p-4 bg-primary/5 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Proposta de Valor</h4>
            <p className="text-gray-600">
              Um CACC ativo manteria este espaço constantemente atualizado com notícias relevantes, 
              prazos importantes e eventos enriquecedores para a comunidade acadêmica. Seria o ponto 
              central de informações para os estudantes de Computação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndEventsSection; 