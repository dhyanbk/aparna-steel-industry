import { Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  whatsappUrl?: string;
}

export default function ProductCard({ name, image, description, whatsappUrl }: Readonly<ProductCardProps>) {
  const whatsappLink = whatsappUrl || `https://wa.me/919341134374?text=I'm interested in ${encodeURIComponent(name)}`;
  
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 transition-all duration-500 h-full flex flex-col"
    >
      <div className="relative h-72 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500 z-10" />
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm z-20 border border-blue-100">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Premium Grade</span>
        </div>
      </div>
      <div className="p-8 sm:p-10 flex flex-col flex-grow">
        <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300 uppercase line-clamp-2">{name}</h3>
        <p className="text-slate-500 mb-8 text-sm sm:text-base leading-relaxed line-clamp-3 flex-grow">{description}</p>
        
        <div className="space-y-3 mt-auto">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full bg-slate-50 hover:bg-green-50 text-slate-700 hover:text-green-700 p-4 rounded-2xl transition-all duration-300 border border-slate-100 font-bold group/btn"
          >
            <span className="flex items-center space-x-3">
              <MessageCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm uppercase tracking-wider">Inquire on WhatsApp</span>
            </span>
            <div className="h-2 w-2 bg-green-500 rounded-full animate-subtle-pulse" />
          </a>
          
          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:+919341134374"
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              <Phone className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Call Us</span>
            </a>
            <a
              href="mailto:aparnasteel@gmail.com"
              className="flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-2xl transition-all duration-200"
            >
              <Mail className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Email</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}