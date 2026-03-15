import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative bg-[#0b1120] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src="https://raw.githubusercontent.com/dhyanbk/web-assets/main/shop-photo.jpeg"
          alt="Aparna Steel Industry Shop"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/80 to-transparent" />
      </motion.div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-subtle-pulse" />
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
                Excellence in Engineering
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Leading <br />
              <span className="text-blue-500">Agricultural</span> <br />
              Machinery Solutions
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              We specialize in manufacturing high-precision agricultural and industrial machinery. Delivering reliability and innovation for over two decades.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                href="/products"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <span>Explore Catalog</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 px-8 py-4 rounded-xl text-lg font-bold transition-all"
              >
                <span>Request a Quote</span>
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-12 pt-8 border-t border-white/10">
              {[
                { value: "20+", label: "Years Exp" },
                { value: "1000+", label: "Happy Clients" },
                { value: "ISO", label: "Quality Certified" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  variants={statVariants}
                  custom={index}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 relative"
          >
            <motion.div 
              whileHover={{ scale: 1.01, y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl p-2 bg-gradient-to-br from-white/10 to-transparent"
            >
              <img
                src="https://raw.githubusercontent.com/dhyanbk/web-assets/main/areca-dehusker.jpg"
                alt="Adithya Areca Dehusker"
                className="w-full aspect-[4/3] object-cover rounded-[2rem]"
              />
              <motion.div 
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-6 left-6 right-6 bg-[#0b1120]/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl"
              >
                <h3 className="text-white font-bold text-xl mb-1">Adithya Areca Dehusker</h3>
                <p className="text-slate-400 text-sm">Our flagship high-performance industrial equipment.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
