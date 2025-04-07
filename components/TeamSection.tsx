"use client";

import { FC } from 'react';
import Image from 'next/image';

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Fábio Roberto",
    role: "Idealizador",
    imageUrl: "https://placehold.co/400x400/003366/ffffff.png?text=Fábio+Roberto"
  }
];

const TeamSection: FC = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Idealizador</h2>
          <p className="text-lg text-gray-600">
            Este projeto foi idealizado como parte do trabalho de conclusão de curso,
            visando demonstrar como um CACC poderia beneficiar os estudantes de 
            Computação da UFERSA.
          </p>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-700">
              Nota: Este é um projeto demonstrativo. O CACC, quando formado, 
              será gerido por uma diretoria eleita pelos estudantes.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full max-w-sm p-6 text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 