"use client";

import { FC } from 'react';
import { BookOpen, Award, Clock, Calendar, Users, FileText } from 'lucide-react';

const AcademicInfoSection: FC = () => {
  return (
    <section id="academic-info" className="py-24 bg-background">
      <div className="container">
        <h2 className="mb-12 text-4xl font-bold text-center text-primary">Sua Jornada em Ciência da Computação</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="mb-6 text-lg text-center">
            Prepare-se para uma carreira promissora em tecnologia. Nossa estrutura curricular foi 
            cuidadosamente planejada para formar profissionais completos, com forte base teórica 
            e experiência prática. O CACC está aqui para apoiar você em cada etapa dessa jornada.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://cc.ufersa.edu.br/wp-content/uploads/sites/31/2018/09/PPC_2018.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-white rounded-md bg-primary hover:bg-primary-dark"
            >
              <FileText className="w-4 h-4 mr-2" />
              Conheça o Projeto Pedagógico Completo
            </a>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 mr-3 text-primary" />
              <h3 className="text-xl font-bold">Formação Completa</h3>
            </div>
            <p className="mb-4 text-gray-700">
              Nossa estrutura curricular de 3.540 horas oferece:
            </p>
            <ul className="pl-5 mb-4 space-y-2 list-disc text-gray-700">
              <li><strong>Teoria + Prática:</strong> Disciplinas que combinam fundamentos sólidos com aplicação real</li>
              <li><strong>Flexibilidade:</strong> 360h em optativas para você personalizar sua formação</li>
              <li><strong>Experiência Real:</strong> 180h de estágio em empresas parceiras</li>
              <li><strong>Desenvolvimento Pessoal:</strong> Atividades complementares para seu crescimento</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              O CACC auxilia na escolha de optativas e busca de oportunidades de estágio
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 mr-3 text-primary" />
              <h3 className="text-xl font-bold">Oportunidades de Carreira</h3>
            </div>
            <p className="mb-4 text-gray-700">
              Nossos egressos estão preparados para:
            </p>
            <ul className="pl-5 mb-4 space-y-2 list-disc text-gray-700">
              <li><strong>Mercado Tech:</strong> Desenvolvimento, análise e gestão de projetos</li>
              <li><strong>Inovação:</strong> Startups e empreendedorismo digital</li>
              <li><strong>Pesquisa:</strong> Mestrado e doutorado em instituições renomadas</li>
              <li><strong>Especialização:</strong> IA, dados, cloud, segurança e mais</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              O CACC promove encontros com ex-alunos e profissionais do mercado
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 mr-3 text-primary" />
              <h3 className="text-xl font-bold">Suporte Acadêmico</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Acompanhamento Contínuo</h4>
                <ul className="pl-5 space-y-1 list-disc">
                  <li>Monitoria em disciplinas-chave</li>
                  <li>Grupos de estudo organizados</li>
                  <li>Orientação para matrícula</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Recursos Disponíveis</h4>
                <ul className="pl-5 space-y-1 list-disc">
                  <li>Laboratórios equipados</li>
                  <li>Biblioteca especializada</li>
                  <li>Projetos de extensão</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600 italic mt-4">
                O CACC trabalha junto à coordenação para melhorar continuamente a infraestrutura
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicInfoSection; 