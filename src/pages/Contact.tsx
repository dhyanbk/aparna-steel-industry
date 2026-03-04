import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulating an API call for an industry-standard feedback loop
    // In a real scenario, you would use a service like Formspree, Netlify Forms, or a custom backend
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Connect with Us</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Specialist Consultation</h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Our engineering team is ready to assist you with technical specifications, custom solutions, and distribution inquiries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-xl font-bold mb-8 text-slate-900 uppercase tracking-wider">Direct Channels</h2>
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start space-x-4 group cursor-pointer"
                  >
                    <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Sales Hotline</p>
                      <a href="tel:+919341134374" className="text-slate-900 font-bold hover:text-blue-600 transition-colors block">+91 93411 34374</a>
                      <a href="tel:+919945703674" className="text-slate-900 font-bold hover:text-blue-600 transition-colors block">+91 99457 03674</a>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start space-x-4 group cursor-pointer"
                  >
                    <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Protocol</p>
                      <a href="mailto:aparnasteel@gmail.com" className="text-slate-900 font-bold break-all hover:text-blue-600 transition-colors">aparnasteel@gmail.com</a>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start space-x-4 group cursor-pointer"
                  >
                    <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Industrial Hub</p>
                      <p className="text-slate-900 font-bold leading-snug">Near Gajanana Bajana Mandir, Jayanagar, Sullia – 574239, Karnataka</p>
                    </div>
                  </motion.div>
                </div>

                {/* Google Maps Link */}
                <motion.a
                  href="https://maps.app.goo.gl/BbwnifMRmwkVbPBz9"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-6 w-6 text-blue-400" />
                  <h2 className="text-xl font-bold uppercase tracking-wider text-blue-400">Operations</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4 text-sm">
                    <span className="text-slate-400 uppercase font-bold tracking-widest">Monday - Saturday</span>
                    <span className="font-bold text-white">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400 uppercase font-bold tracking-widest">Sunday</span>
                    <span className="text-red-400 font-bold uppercase tracking-widest">Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100"
            >
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <div className="w-10 h-10 bg-green-500 rounded-full animate-ping absolute opacity-20" />
                    <Mail className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-slate-900">TRANSMISSION SUCCESSFUL</h3>
                  <p className="text-slate-500 text-lg mb-8 text-center max-w-md">Our technical team has received your inquiry. We will respond within 24 business hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-slate-800 transition-all"
                  >
                    New Consultation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Corporate Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@company.com"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Subject of Inquiry</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="e.g. Machinery Specification Inquiry"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Requirement Details</label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Please describe your technical requirements or business inquiry..."
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl transition-all ${
                      status === 'submitting' 
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/30'
                    }`}
                  >
                    {status === 'submitting' ? 'Transmitting...' : 'Submit Consultation Request'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}