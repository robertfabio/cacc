"use client";

import { FC } from 'react';

const AboutSection: FC = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold text-primary">Sobre o CACC</h2>
          <p className="mb-6 text-lg">
            O Centro Acadêmico de Ciência da Computação (CACC) é a entidade representativa dos estudantes 
            de Ciência da Computação da UFERSA. Nossa missão é representar os interesses dos alunos,
            promover eventos acadêmicos, culturais e sociais, além de contribuir para a melhoria
            do curso e da universidade.
          </p>
          <div className="mb-8 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-700">
              Nota: Este é um site demonstrativo para ilustrar como um futuro CACC 
              poderia atuar e beneficiar os estudantes de Computação da UFERSA.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Representação</h3>
              <p className="text-gray-600">
                Atuação junto à coordenação, departamento e demais instâncias da universidade 
                para defender os interesses dos estudantes.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Integração</h3>
              <p className="text-gray-600">
                Promoção de eventos e atividades que fortalecem a comunidade acadêmica 
                e criam oportunidades de networking.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary">Desenvolvimento</h3>
              <p className="text-gray-600">
                Suporte ao desenvolvimento acadêmico e profissional dos estudantes 
                através de iniciativas e parcerias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 