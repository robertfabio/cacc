"use client";

import { FC } from 'react';
import { BookOpen, GraduationCap, Laptop, Library, Calendar, HelpCircle, FileText, School } from 'lucide-react';
import Link from 'next/link';

const StudentResourcesSection: FC = () => {
  return (
    <section id="resources" className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Central de Recursos</h2>
          <p className="text-lg text-gray-600">
            Um CACC pode centralizar informações importantes e recursos úteis, facilitando 
            a vida acadêmica dos estudantes de Computação da UFERSA.
          </p>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-700">
              Nota: Esta é uma versão demonstrativa de como um CACC poderia organizar 
              e facilitar o acesso aos recursos acadêmicos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Essential Academic Links */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-bold">Links Essenciais</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="https://sigaa.ufersa.edu.br" 
                  className="flex items-center text-gray-700 hover:text-primary"
                  target="_blank"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  SIGAA
                </Link>
              </li>
              <li>
                <Link 
                  href="https://cc.ufersa.edu.br/calendario-academico/" 
                  className="flex items-center text-gray-700 hover:text-primary"
                  target="_blank"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Calendário Acadêmico
                </Link>
              </li>
              <li>
                <Link 
                  href="https://bibliotecas.ufersa.edu.br/" 
                  className="flex items-center text-gray-700 hover:text-primary"
                  target="_blank"
                >
                  <Library className="w-4 h-4 mr-2" />
                  Sistema de Bibliotecas
                </Link>
              </li>
              <li>
                <Link 
                  href="https://cc.ufersa.edu.br" 
                  className="flex items-center text-gray-700 hover:text-primary"
                  target="_blank"
                >
                  <School className="w-4 h-4 mr-2" />
                  Coordenação do Curso
                </Link>
              </li>
            </ul>
          </div>

          {/* Curated Learning Resources */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-bold">Recursos Selecionados</h3>
            </div>
            <div className="mb-3 p-2 bg-yellow-50 border border-yellow-100 rounded text-sm text-yellow-700">
              Exemplos de recursos úteis que um CACC poderia recomendar:
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="https://www.overleaf.com" 
                  className="flex items-center text-gray-700 hover:text-primary"
                  target="_blank"
                >
                  <Laptop className="w-4 h-4 mr-2" />
                  Overleaf (Editor LaTeX Online)
                </Link>
              </li>
              <li>
                <Link 
                  href="https://git-scm.com/book/pt-br/v2" 
                  className="flex items-center text-gray-700 hover:text-primary"
                  target="_blank"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Git Book (PT-BR)
                </Link>
              </li>
              <li>
                <Link 
                  href="https://roadmap.sh/computer-science" 
                  className="flex items-center text-gray-700 hover:text-primary"
                  target="_blank"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Roadmap de Computação
                </Link>
              </li>
            </ul>
          </div>

          {/* University Services */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <HelpCircle className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-bold">Serviços Universitários</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="https://prograd.ufersa.edu.br" 
                  className="flex items-center text-gray-700 hover:text-primary"
                  target="_blank"
                >
                  <School className="w-4 h-4 mr-2" />
                  PROGRAD - Pró-Reitoria de Graduação
                </Link>
              </li>
              <li>
                <Link 
                  href="https://proae.ufersa.edu.br" 
                  className="flex items-center text-gray-700 hover:text-primary"
                  target="_blank"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  PROAE - Assistência Estudantil
                </Link>
              </li>
              <li>
                <Link 
                  href="https://suporte.ufersa.edu.br" 
                  className="flex items-center text-gray-700 hover:text-primary"
                  target="_blank"
                >
                  <Laptop className="w-4 h-4 mr-2" />
                  Suporte de TI
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="p-4 bg-primary/5 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Proposta de Valor</h4>
            <p className="text-gray-600">
              Um CACC ativo poderia manter esta central de recursos sempre atualizada, 
              economizando tempo dos estudantes e garantindo que todos saibam onde encontrar 
              informações cruciais para sua vida acadêmica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentResourcesSection; 