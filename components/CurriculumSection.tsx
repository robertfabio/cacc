"use client";

import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Info, ExternalLink, Search, BookOpen, Calendar, Check, AlertCircle, Lock } from 'lucide-react';

type Subject = {
  name: string;
  code: string;
  credits: number;
  workload: number;
  prerequisites?: string[];
  description?: string;
}

type Semester = {
  number: number;
  subjects: Subject[];
};

// Dados reais da grade curricular de Ciência da Computação da UFERSA
const realSemesters: Array<{number: number; subjects: Subject[]}> = [
  {
    number: 1,
    subjects: [
      { name: "Fundamentos de Cálculo", code: "FC", credits: 4, workload: 60 },
      { name: "Geometria Analítica", code: "GA", credits: 4, workload: 60 },
      { name: "Introdução a Lógica", code: "IL", credits: 4, workload: 60 },
      { name: "Introdução a Computação", code: "IC", credits: 4, workload: 60 },
      { name: "Computação e Sociedade", code: "CS", credits: 4, workload: 60 }
    ]
  },
  {
    number: 2,
    subjects: [
      { name: "Cálculo Diferencial e Integral", code: "CDI", credits: 4, workload: 60, prerequisites: ["FC"] },
      { name: "Álgebra Linear", code: "AL", credits: 4, workload: 60 },
      { name: "Circuitos Digitais", code: "CD", credits: 4, workload: 60 },
      { name: "Programação de Computadores", code: "PC", credits: 4, workload: 60 },
      { name: "Análise e Expressão Textual", code: "AET", credits: 4, workload: 60 }
    ]
  },
  {
    number: 3,
    subjects: [
      { name: "Estatística", code: "EST", credits: 4, workload: 60 },
      { name: "Banco de Dados", code: "BD", credits: 4, workload: 60 },
      { name: "Arquitetura e Organização de Computadores", code: "AOC", credits: 4, workload: 60, prerequisites: ["CD"] },
      { name: "Programação Orientada a Objetos", code: "POO", credits: 4, workload: 60, prerequisites: ["PC"] },
      { name: "Filosofia da Ciência e Metodologia Científica", code: "FCMC", credits: 4, workload: 60 }
    ]
  },
  {
    number: 4,
    subjects: [
      { name: "Matemática Discreta", code: "MD", credits: 4, workload: 60 },
      { name: "Cálculo Numérico", code: "CN", credits: 4, workload: 60, prerequisites: ["CDI"] },
      { name: "Estrutura de Dados I", code: "ED1", credits: 4, workload: 60, prerequisites: ["POO"] },
      { name: "Sistemas Operacionais", code: "SO", credits: 4, workload: 60, prerequisites: ["AOC"] },
      { name: "Análise e Projeto Orientado a Objetos", code: "APOO", credits: 4, workload: 60, prerequisites: ["POO"] }
    ]
  },
  {
    number: 5,
    subjects: [
      { name: "Linguagens Formais e Autômatos", code: "LFA", credits: 4, workload: 60, prerequisites: ["MD"] },
      { name: "Inteligência Artificial", code: "IA", credits: 4, workload: 60, prerequisites: ["ED1"] },
      { name: "Estrutura de Dados II", code: "ED2", credits: 4, workload: 60, prerequisites: ["ED1"] },
      { name: "Redes de Computadores", code: "RC", credits: 4, workload: 60, prerequisites: ["SO"] },
      { name: "Optativa I", code: "OPT1", credits: 4, workload: 60 }
    ]
  },
  {
    number: 6,
    subjects: [
      { name: "Engenharia de Software", code: "ES", credits: 4, workload: 60, prerequisites: ["APOO"] },
      { name: "Teoria da Computação", code: "TC", credits: 4, workload: 60, prerequisites: ["LFA"] },
      { name: "Teoria dos Grafos", code: "TG", credits: 4, workload: 60, prerequisites: ["MD"] },
      { name: "Análise de Algoritmos", code: "AA", credits: 4, workload: 60, prerequisites: ["ED2"] },
      { name: "Optativa II", code: "OPT2", credits: 4, workload: 60 }
    ]
  },
  {
    number: 7,
    subjects: [
      { name: "Sistemas Distribuídos", code: "SD", credits: 4, workload: 60, prerequisites: ["RC"] },
      { name: "Compiladores", code: "COMP", credits: 4, workload: 60, prerequisites: ["LFA"] },
      { name: "Computação Gráfica", code: "CG", credits: 4, workload: 60, prerequisites: ["ED2"] },
      { name: "Sistemas Multimídia", code: "SM", credits: 4, workload: 60 },
      { name: "Optativa III", code: "OPT3", credits: 4, workload: 60 },
      { name: "Optativa IV", code: "OPT4", credits: 4, workload: 60 }
    ]
  },
  {
    number: 8,
    subjects: [
      { name: "Empreendedorismo", code: "EMP", credits: 4, workload: 60 },
      { name: "Segurança Computacional", code: "SC", credits: 4, workload: 60, prerequisites: ["RC"] },
      { name: "Optativa V", code: "OPT5", credits: 4, workload: 60 },
      { name: "Optativa VI", code: "OPT6", credits: 4, workload: 60 },
      { name: "Optativa VII", code: "OPT7", credits: 4, workload: 60 },
      { name: "Optativa VIII", code: "OPT8", credits: 4, workload: 60 },
      { name: "Optativa IX", code: "OPT9", credits: 4, workload: 60 },
      { name: "Optativa X", code: "OPT10", credits: 4, workload: 60 }
    ]
  }
];

const optionalSubjects: Subject[] = [
  { name: "Processamento Digital de Imagens", code: "PDI", credits: 4, workload: 60 },
  { name: "Tópicos Especiais em Computação I", code: "TEC1", credits: 4, workload: 60 },
  { name: "Tópicos Especiais em Computação II", code: "TEC2", credits: 4, workload: 60 },
  { name: "Tópicos Especiais em Computação III", code: "TEC3", credits: 4, workload: 60 },
  { name: "Desenvolvimento Web", code: "DW", credits: 4, workload: 60 },
  { name: "Desenvolvimento para Dispositivos Móveis", code: "DDM", credits: 4, workload: 60 },
  { name: "Teste de Software", code: "TS", credits: 4, workload: 60 },
  { name: "Interação Humano-Computador", code: "IHC", credits: 4, workload: 60 },
  { name: "Sistemas Embarcados", code: "SE", credits: 4, workload: 60 },
  { name: "Computação em Nuvem", code: "CN", credits: 4, workload: 60 },
  { name: "Programação Paralela", code: "PP", credits: 4, workload: 60 },
  { name: "Aprendizado de Máquina", code: "AM", credits: 4, workload: 60 },
  { name: "Mineração de Dados", code: "MD", credits: 4, workload: 60 },
  { name: "Redes Neurais", code: "RN", credits: 4, workload: 60 },
  { name: "Visão Computacional", code: "VC", credits: 4, workload: 60 }
];

interface SubjectWithStatus extends Subject {
  status: 'available' | 'selected' | 'locked' | 'completed';
}

const CurriculumSection: FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showOptional, setShowOptional] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [planningMode, setPlanningMode] = useState<boolean>(false);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [completedSubjects, setCompletedSubjects] = useState<string[]>([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const filteredSubjects = searchTerm 
    ? realSemesters.flatMap(sem => sem.subjects).filter(subj => 
        subj.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        subj.code.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const displayedSubjects = searchTerm 
    ? filteredSubjects 
    : showOptional 
      ? optionalSubjects 
      : realSemesters.find(sem => sem.number === selectedSemester)?.subjects || [];

  const totalCredits = realSemesters.reduce((sum, semester) => {
    return sum + semester.subjects.reduce((semSum, subject) => semSum + subject.credits, 0);
  }, 0);

  const checkPrerequisites = (subject: Subject): boolean => {
    if (!subject.prerequisites) return true;
    return subject.prerequisites.every(prereq => 
      completedSubjects.includes(prereq) || selectedSubjects.includes(prereq)
    );
  };

  const getSubjectStatus = (subject: Subject): 'available' | 'selected' | 'locked' | 'completed' => {
    if (completedSubjects.includes(subject.code)) return 'completed';
    if (selectedSubjects.includes(subject.code)) return 'selected';
    if (!checkPrerequisites(subject)) return 'locked';
    return 'available';
  };

  const toggleSubjectSelection = (subject: Subject) => {
    if (!planningMode) return;
    
    const status = getSubjectStatus(subject);
    
    if (status === 'locked') {
      const missingPrereqs = subject.prerequisites?.filter(
        prereq => !completedSubjects.includes(prereq) && !selectedSubjects.includes(prereq)
      );
      const prereqNames = missingPrereqs?.map(code => 
        realSemesters.flatMap(s => s.subjects).find(s => s.code === code)?.name
      ).filter(Boolean);
      
      alert(`Você precisa completar ou selecionar os pré-requisitos primeiro: ${prereqNames?.join(', ')}`);
      return;
    }

    if (status === 'completed') {
      // Verificar se esta disciplina é pré-requisito de alguma selecionada ou concluída
      const isPrereqForOthers = [...selectedSubjects, ...completedSubjects].some(code => {
        const subject = realSemesters.flatMap(s => s.subjects)
          .find(s => s.code === code);
        return subject?.prerequisites?.includes(subject.code);
      });

      if (isPrereqForOthers) {
        alert('Esta disciplina é pré-requisito de outras disciplinas selecionadas ou concluídas. Remova-as primeiro.');
        return;
      }
      setCompletedSubjects(prev => prev.filter(code => code !== subject.code));
    } else if (status === 'selected') {
      // Verificar se esta disciplina é pré-requisito de alguma selecionada
      const isPrereqForSelected = selectedSubjects.some(selectedCode => {
        const selectedSubject = realSemesters.flatMap(s => s.subjects)
          .find(s => s.code === selectedCode);
        return selectedSubject?.prerequisites?.includes(subject.code);
      });

      if (isPrereqForSelected) {
        alert('Esta disciplina é pré-requisito de outras disciplinas selecionadas. Remova-as primeiro.');
        return;
      }
      setSelectedSubjects(prev => prev.filter(code => code !== subject.code));
    } else {
      setSelectedSubjects(prev => [...prev, subject.code]);
    }
  };

  const markAsCompleted = (subject: Subject) => {
    if (!planningMode) return;
    
    setCompletedSubjects(prev => {
      const isCompleted = prev.includes(subject.code);
      if (isCompleted) {
        // Verificar se esta disciplina é pré-requisito de alguma selecionada
        const isPrereqForSelected = selectedSubjects.some(selectedCode => {
          const selectedSubject = realSemesters.flatMap(s => s.subjects)
            .find(s => s.code === selectedCode);
          return selectedSubject?.prerequisites?.includes(subject.code);
        });

        if (isPrereqForSelected) {
          alert('Esta disciplina é pré-requisito de outras disciplinas selecionadas. Remova-as primeiro.');
          return prev;
        }
        return prev.filter(code => code !== subject.code);
      }
      return [...prev, subject.code];
    });
    
    // Remover da seleção se estiver selecionada
    if (selectedSubjects.includes(subject.code)) {
      setSelectedSubjects(prev => prev.filter(code => code !== subject.code));
    }
  };

  const getStatusColor = (status: 'available' | 'selected' | 'locked' | 'completed') => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'selected': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'locked': return 'bg-gray-100 text-gray-500 border-gray-200';
      default: return 'bg-white text-gray-900 border-gray-100';
    }
  };

  const getStatusIcon = (status: 'available' | 'selected' | 'locked' | 'completed') => {
    switch (status) {
      case 'completed': return <Check className="w-4 h-4 text-green-500" />;
      case 'selected': return <Check className="w-4 h-4 text-blue-500" />;
      case 'locked': return <Lock className="w-4 h-4 text-gray-400" />;
      default: return null;
    }
  };

  const selectedCredits = selectedSubjects.reduce((sum, code) => {
    const subject = realSemesters.flatMap(s => s.subjects).find(s => s.code === code);
    return sum + (subject?.credits || 0);
  }, 0);

  const completedCredits = completedSubjects.reduce((sum, code) => {
    const subject = realSemesters.flatMap(s => s.subjects).find(s => s.code === code);
    return sum + (subject?.credits || 0);
  }, 0);

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-primary mb-4"
          >
            Grade Curricular
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 mb-4"
          >
            Explore a estrutura curricular completa do curso de Ciência da Computação da UFERSA.
            Total de créditos: {totalCredits} (~{Math.round(totalCredits * 15)} horas).
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center bg-white border border-gray-200 rounded-full p-2 mb-8 max-w-xl mx-auto"
          >
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar disciplina ou código..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-transparent text-gray-800 focus:outline-none"
              />
            </div>
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="ml-1 text-gray-500 hover:text-gray-700 text-sm"
              >
                Limpar
              </button>
            )}
          </motion.div>

          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-700 flex items-center justify-center gap-2">
              <Info className="w-4 h-4" />
              Visualize a grade interativa em{" "}
              <a 
                href="https://grade.netlify.app/?curso=comp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium hover:underline flex items-center"
              >
                grade.netlify.app <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPlanningMode(!planningMode)}
                className={`px-4 py-2 rounded-lg font-medium transition-all
                  ${planningMode 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {planningMode ? 'Modo Planejamento Ativo' : 'Ativar Modo Planejamento'}
              </button>
            </div>
            {planningMode && (
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  Selecionadas: {selectedCredits} créditos
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  Concluídas: {completedCredits} créditos
                </span>
              </div>
            )}
          </div>
          
          {planningMode && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                <Info className="w-4 h-4" />
                Como usar o modo planejamento:
              </h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Clique uma vez para selecionar uma disciplina para cursar</li>
                <li>• Clique duas vezes para marcar como concluída</li>
                <li>• Disciplinas bloqueadas precisam ter seus pré-requisitos concluídos</li>
                <li>• Você pode filtrar e buscar disciplinas normalmente</li>
              </ul>
            </div>
          )}
        </div>

        {/* Semester Selection */}
        {!searchTerm && (
          <div className="mb-8">
            <div className="flex justify-center gap-1 sm:gap-2 flex-wrap mb-4">
              {realSemesters.map((sem) => (
                <motion.button
                  key={sem.number}
                  onClick={() => {setSelectedSemester(sem.number); setShowOptional(false);}}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base
                    ${selectedSemester === sem.number && !showOptional
                      ? 'bg-primary text-white shadow-md scale-105' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {sem.number}º Período
                </motion.button>
              ))}
              <motion.button
                onClick={() => {setShowOptional(true);}}
                className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base
                  ${showOptional
                    ? 'bg-primary text-white shadow-md scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Optativas
              </motion.button>
            </div>
          </div>
        )}

        {/* Subject info modal */}
        {selectedSubject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setSelectedSubject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{selectedSubject.name}</h3>
                <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-md">
                  {selectedSubject.code}
                </span>
              </div>
              
              <div className="grid gap-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <BookOpen className="w-4 h-4 mr-2 text-primary" />
                  <span>{selectedSubject.credits} créditos ({selectedSubject.workload} horas)</span>
                </div>
                
                {selectedSubject.prerequisites && selectedSubject.prerequisites.length > 0 && (
                  <div className="flex items-start text-gray-700">
                    <ArrowRight className="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <span className="font-medium">Pré-requisitos:</span>
                      <ul className="list-disc list-inside ml-2 text-sm">
                        {selectedSubject.prerequisites.map(code => {
                          const prereq = realSemesters.flatMap(s => s.subjects).find(s => s.code === code);
                          return (
                            <li key={code}>
                              {prereq ? prereq.name : code} ({code})
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
                
                {selectedSubject.description && (
                  <div className="text-gray-700">
                    <p className="font-medium mb-1">Ementa:</p>
                    <p className="text-sm">{selectedSubject.description}</p>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => setSelectedSubject(null)}
                className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Title for search results */}
        {searchTerm && (
          <div className="mb-4 text-center">
            <h3 className="text-lg font-medium text-gray-700">
              {filteredSubjects.length > 0 
                ? `Resultados da busca por "${searchTerm}" (${filteredSubjects.length})`
                : `Nenhuma disciplina encontrada para "${searchTerm}"`}
            </h3>
          </div>
        )}

        {/* Subjects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {displayedSubjects.map((subject) => {
            const status = getSubjectStatus(subject);
            return (
              <motion.div
                key={subject.code}
                variants={itemVariants}
                className={`rounded-lg shadow-sm p-5 cursor-pointer hover:shadow-md transition-all border
                  ${getStatusColor(status)}
                  ${planningMode ? 'hover:scale-102' : ''}`}
                onClick={() => planningMode ? toggleSubjectSelection(subject) : setSelectedSubject(subject)}
                onDoubleClick={() => planningMode && markAsCompleted(subject)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold">{subject.name}</h4>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(status)}
                    <span className={`px-2 py-1 bg-opacity-10 rounded-md text-xs
                      ${status === 'locked' ? 'bg-gray-100 text-gray-500' : 'bg-primary/10 text-primary'}`}>
                      {subject.code}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 opacity-60" />
                    <span>{subject.credits} créditos ({subject.workload} horas)</span>
                  </div>
                  {subject.prerequisites && subject.prerequisites.length > 0 && (
                    <div className="flex items-center text-sm">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-60" />
                      <span>
                        {subject.prerequisites.length === 1 
                          ? "1 pré-requisito" 
                          : `${subject.prerequisites.length} pré-requisitos`}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Fluxograma link */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <motion.a 
            href="https://cc.ufersa.edu.br/wp-content/uploads/sites/31/2018/09/PPC_2018.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Conferir PPC Completo (PDF)
          </motion.a>
          
          <div className="mt-8 p-4 bg-primary/5 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Suporte Acadêmico</h4>
            <p className="text-gray-600 text-sm">
              O CACC pode auxiliar os estudantes no planejamento acadêmico, 
              oferecendo orientação sobre a grade curricular, matrícula e 
              compartilhando experiências sobre as disciplinas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection; 