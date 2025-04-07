"use client";

import { FC } from 'react';
import { CalendarIcon, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  link?: string;
};

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Início das Aulas 2025.1",
    description: "Início do semestre letivo 2025.1 para os cursos de graduação da Universidade Federal Rural do Semi-Árido (UFERSA).",
    date: "03 Março, 2025",
    time: "07:00 - 22:00",
    location: "Campus Mossoró - UFERSA",
    image: "https://placehold.co/800x450/003366/ffffff.png?text=Início+das+Aulas",
    link: "#",
  }
];

const EventsSection: FC = () => {
  return (
    <section id="events" className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="mb-12 text-4xl font-bold text-center text-primary">Eventos</h2>
        
        {/* Upcoming Events */}
        <div>
          <h3 className="mb-8 text-2xl font-bold">Próximos Eventos</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="overflow-hidden bg-white rounded-lg shadow-md">
                {event.image && (
                  <div className="h-48 overflow-hidden relative">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <div className="p-6">
                  <h4 className="mb-2 text-xl font-bold text-primary">{event.title}</h4>
                  <p className="mb-4 text-gray-600">{event.description}</p>
                  
                  <div className="flex items-center mb-2 text-gray-500">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center mb-2 text-gray-500">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-gray-500">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  
                  {event.link && (
                    <a
                      href={event.link}
                      className="inline-block px-4 py-2 mt-2 text-white rounded-md bg-primary hover:bg-primary-dark"
                    >
                      Saber mais
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection; 