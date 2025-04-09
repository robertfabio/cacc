"use client";

import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';
// Vercel Analytics será adicionado via script

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const sections = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'news', label: 'News & Events' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'resources', label: 'Resources' },
  { id: 'academic-info', label: 'Academic Info' },
  { id: 'faq', label: 'FAQ' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' }
];

const StickyNav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <ul className="flex justify-center space-x-4 p-4">
        {sections.map(section => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeSection === section.id ? 'text-primary' : 'text-gray-700'
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Vercel Analytics */}
        <script defer src="/_vercel/insights/script.js"></script>
      </head>
      <body>
        <StickyNav />
        {children}
      </body>
    </html>
  );
} 