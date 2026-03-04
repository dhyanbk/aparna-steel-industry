import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  whatsappUrl?: string;
}

export default function ProductCard({ name, image, description, whatsappUrl }: ProductCardProps) {
  const whatsappLink = whatsappUrl || `https://wa.me/919341134374?text=I'm interested in ${encodeURIComponent(name)}`;
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-lg">
          Premium Grade
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-slate-900">{name}</h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
        <div className="grid grid-cols-1 gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Inquire on WhatsApp</span>
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:+919341134374"
              className="flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-lg transition-colors border border-slate-200"
            >
              <Phone className="h-4 w-4" />
              <span>Call Us</span>
            </a>
            <a
              href="mailto:aparnasteel@gmail.com"
              className="flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-lg transition-colors border border-slate-200"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}