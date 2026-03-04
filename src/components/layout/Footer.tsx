import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-20 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-black tracking-tight text-white leading-none">APARNA STEEL</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-500 leading-none mt-1">Industries</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Global leaders in precision agricultural engineering. Specializing in high-efficiency processing solutions for tropical cash crops since 2002.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-8">Contact Information</h3>
            <div className="space-y-4">
              <a href="tel:+919341134374" className="flex items-center space-x-3 group cursor-pointer">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold">Sales Inquiry</span>
                  <span className="text-slate-200">+91 93411 34374</span>
                </div>
              </a>
              <a href="mailto:aparnasteel@gmail.com" className="flex items-center space-x-3 group cursor-pointer">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold">Email Support</span>
                  <span className="text-slate-200">aparnasteel@gmail.com</span>
                </div>
              </a>
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors mt-1">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold">Our Facility</span>
                  <span className="text-slate-200 leading-relaxed">
                    Shree Maatha Complex,<br />
                    Jayanagara, Sullia (D.K)<br />
                    Karnataka - 574239
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-8">Navigation</h3>
            <ul className="space-y-4">
              {['Products', 'About Us', 'Contact', 'Gallery'].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase().replace(' ', '')}`} 
                    className="text-slate-400 hover:text-white transition-all flex items-center group"
                  >
                    <div className="w-0 group-hover:w-4 h-[1px] bg-blue-500 transition-all mr-0 group-hover:mr-2" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-8">Digital Presence</h3>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/aparna_steel__industries/' },
                { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com' }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-xl hover:bg-blue-600 hover:-translate-y-1 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Aparna Steel Industries. Precision Engineered.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}