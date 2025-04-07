"use client";

import { FC } from 'react';
import { Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="py-12 bg-primary text-white">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Localização</h3>
            <p className="mb-2">Ciência da Computação</p>
            <p className="mb-2">Bloco LCC - UFERSA</p>
            <p>Campus Mossoró - RN</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://cc.ufersa.edu.br" className="hover:underline">
                  Site do Curso
                </Link>
              </li>
              <li>
                <Link href="https://cc.ufersa.edu.br/wp-content/uploads/sites/31/2018/09/PPC_2018.pdf" className="hover:underline">
                  PPC do Curso
                </Link>
              </li>
              <li>
                <Link href="https://ufersa.edu.br" className="hover:underline">
                  UFERSA
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/cacc.ufersa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:caccufersa@gmail.com"
                className="hover:text-secondary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 text-center border-t border-white/20">
          <p>&copy; {new Date().getFullYear()} CACC UFERSA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 