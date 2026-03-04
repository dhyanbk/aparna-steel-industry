import { motion } from 'framer-motion';
import { Shield, Headphones, Wrench, Award, ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Quality Assured',
    description: 'All our agricultural machinery undergoes rigorous quality testing and certification.',
    icon: Award,
    color: 'bg-blue-500/10 text-blue-500',
    hoverColor: 'group-hover:bg-blue-500 group-hover:text-white',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support for all our farming equipment.',
    icon: Headphones,
    color: 'bg-indigo-500/10 text-indigo-500',
    hoverColor: 'group-hover:bg-indigo-500 group-hover:text-white',
  },
  {
    title: 'Expert Installation',
    description: 'Professional installation and training by experienced agricultural technicians.',
    icon: Wrench,
    color: 'bg-emerald-500/10 text-emerald-500',
    hoverColor: 'group-hover:bg-emerald-500 group-hover:text-white',
  },
  {
    title: 'Industry Leading',
    description: 'Recognized leader in agricultural machinery and processing equipment.',
    icon: Shield,
    color: 'bg-amber-500/10 text-amber-500',
    hoverColor: 'group-hover:bg-amber-500 group-hover:text-white',
  }
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Reliability & Innovation
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black mb-8 text-slate-900 tracking-tight"
          >
            Why Partner with Aparna Steel
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            We deliver more than just machinery. We provide end-to-end industrial solutions built with high-grade materials and precision engineering.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group p-10 bg-white rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50 hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`w-14 h-14 ${feature.color} ${feature.hoverColor} flex items-center justify-center rounded-2xl mb-8 transition-all duration-300`}
              >
                <feature.icon className="h-7 w-7" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              <motion.a 
                href="/contact" 
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-xs font-bold text-blue-600 uppercase tracking-widest"
              >
                Learn More 
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="h-4 w-4 ml-1" />
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
