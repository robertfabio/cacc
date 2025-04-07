import { FC } from 'react';
import { FaBriefcase, FaFlask, FaLaptopCode } from 'react-icons/fa';

type Opportunity = {
  title: string;
  type: 'internship' | 'research' | 'job';
  company: string;
  location: string;
  deadline: string;
  requirements: string[];
  description: string;
};

const opportunities: Opportunity[] = [
  {
    title: "Desenvolvedor Web Full Stack",
    type: "internship",
    company: "TechSolutions Mossoró",
    location: "Híbrido - Mossoró, RN",
    deadline: "30/11/2024",
    requirements: [
      "Cursando a partir do 5º período",
      "Conhecimento em HTML, CSS e JavaScript",
      "Familiaridade com React ou Angular",
      "Noções de banco de dados"
    ],
    description: "Oportunidade de estágio para atuar no desenvolvimento de aplicações web, participando de projetos reais com mentoria de desenvolvedores seniores."
  },
  {
    title: "Iniciação Científica: Laboratório de IA",
    type: "research",
    company: "Laboratório de Inteligência Artificial - UFERSA",
    location: "Presencial - UFERSA Mossoró",
    deadline: "15/12/2024",
    requirements: [
      "Cursando a partir do 3º período",
      "Interesse em Machine Learning",
      "Conhecimento básico de Python",
      "Boa base em matemática"
    ],
    description: "Projeto de pesquisa focado no desenvolvimento de algoritmos de aprendizado de máquina para análise de dados agrícolas. Bolsa PIBIC disponível."
  },
  {
    title: "Desenvolvedor(a) Backend Junior",
    type: "job",
    company: "InnovaTech Solutions",
    location: "Remoto",
    deadline: "Contínuo",
    requirements: [
      "Graduando(a) ou recém-formado(a)",
      "Experiência com Node.js",
      "Conhecimento em APIs RESTful",
      "Inglês intermediário"
    ],
    description: "Oportunidade para desenvolvedor(a) junior trabalhar com tecnologias modernas em projetos internacionais. Ambiente flexível e focado em aprendizado contínuo."
  }
];

const OpportunitiesSection: FC = () => {
  const getIcon = (type: Opportunity['type']) => {
    switch (type) {
      case 'internship':
        return <FaLaptopCode className="w-6 h-6" />;
      case 'research':
        return <FaFlask className="w-6 h-6" />;
      case 'job':
        return <FaBriefcase className="w-6 h-6" />;
    }
  };

  const getTypeLabel = (type: Opportunity['type']) => {
    switch (type) {
      case 'internship':
        return 'Estágio';
      case 'research':
        return 'Pesquisa';
      case 'job':
        return 'Emprego';
    }
  };

  return (
    <section id="opportunities" className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Oportunidades</h2>
          <p className="text-lg text-gray-600 mb-6">
            O CACC atuaria ativamente na busca e divulgação de oportunidades relevantes
            para os estudantes de Computação, facilitando a conexão com empresas,
            laboratórios de pesquisa e projetos acadêmicos.
          </p>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-700">
              Nota: As oportunidades abaixo são exemplos demonstrativos. Em um CACC
              ativo, este espaço seria atualizado regularmente com vagas reais e
              oportunidades verificadas.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary">
                    {getIcon(opportunity.type)}
                  </span>
                  <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                    {getTypeLabel(opportunity.type)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {opportunity.title}
                </h3>
                <p className="text-gray-600 font-medium mb-2">
                  {opportunity.company}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  {opportunity.location}
                </p>
                <p className="text-gray-600 mb-4">
                  {opportunity.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requisitos:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {opportunity.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    Prazo: {opportunity.deadline}
                  </span>
                  <button className="text-primary hover:text-primary/80 text-sm font-medium">
                    Ver detalhes →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Valor para os Estudantes
          </h3>
          <p className="text-lg text-gray-600">
            Uma seção de Oportunidades gerenciada pelo CACC ajudaria significativamente
            os estudantes a se conectarem com estágios, projetos de pesquisa e vagas
            de emprego relevantes para sua formação. Através de parcerias com empresas
            locais e acompanhamento das oportunidades acadêmicas, o CACC pode ser um
            facilitador importante no desenvolvimento profissional dos alunos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection; 