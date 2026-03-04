import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ZoomIn } from 'lucide-react';

const images = [
  "https://raw.githubusercontent.com/dhyanbk/web-assets/main/photo1.jpg",
  "https://raw.githubusercontent.com/dhyanbk/web-assets/main/photo2.jpg",
  "https://raw.githubusercontent.com/dhyanbk/web-assets/main/photo3.jpg",
  "https://raw.githubusercontent.com/dhyanbk/web-assets/main/photo4.jpg",
  "https://raw.githubusercontent.com/dhyanbk/web-assets/main/photo5.jpg",
  "https://raw.githubusercontent.com/dhyanbk/web-assets/main/photo6.jpg",
  "https://raw.githubusercontent.com/dhyanbk/web-assets/main/photo7.jpg",
  "https://raw.githubusercontent.com/dhyanbk/web-assets/main/photo8.jpg"
];

const videos = [
  { url: "https://raw.githubusercontent.com/dhyanbk/web-assets/main/video1.mp4", label: "Corporate Identity" },
  { url: "https://raw.githubusercontent.com/dhyanbk/web-assets/main/video2.mp4", label: "Operation Demo 1" },
  { url: "https://raw.githubusercontent.com/dhyanbk/web-assets/main/video3.mp4", label: "Operation Demo 2" },
  { url: "https://raw.githubusercontent.com/dhyanbk/web-assets/main/video4.mp4", label: "Operation Demo 3" },
  { url: "https://raw.githubusercontent.com/dhyanbk/web-assets/main/video5.mp4", label: "Operation Demo 4" },
  { url: "https://raw.githubusercontent.com/dhyanbk/web-assets/main/video6.mp4", label: "Operation Demo 5" }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: 30,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="py-24 bg-white min-h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-6 block"
          >
            Visual Tour
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-black mb-8 text-slate-900 tracking-tight leading-none"
          >
            Our Facility & Machinery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            A glimpse into our manufacturing floor and the advanced agricultural equipment we deliver.
          </motion.p>
        </motion.div>
        
        {/* Factory Floor Section */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 pr-6">Factory Floor & Showcase</h2>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-slate-200 to-transparent" />
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {images.map((src) => (
              <motion.div
                key={src}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedImage(src)}
                className="group relative h-72 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 bg-white cursor-pointer"
              >
                <img
                  src={src}
                  alt="Aparna Steel Industry Gallery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="flex items-center space-x-2 text-white font-bold uppercase tracking-widest text-sm"
                  >
                    <ZoomIn className="h-5 w-5" />
                    <span>View Full Size</span>
                  </motion.div>
                </div>
                {/* Corner Indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                  <ZoomIn className="h-5 w-5 text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Demonstration Videos Section */}
        <section className="pb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 pr-6">Demonstration Videos</h2>
            <div className="flex-grow h-[1px] bg-gradient-to-r from-slate-200 to-transparent" />
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {videos.map((video, idx) => (
              <motion.div
                key={video.url}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#0b1120] aspect-video flex items-center justify-center border border-slate-100"
              >
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  poster={images[idx % images.length]}
                  muted
                  playsInline
                >
                  <source src={video.url} type="video/mp4" />
                </video>
                
                {/* Video Play Overlay */}
                <motion.div 
                  className="relative z-20 flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:shadow-blue-500/70 transition-all duration-300">
                    <Play className="h-7 w-7 text-white fill-current ml-1" />
                  </div>
                </motion.div>

                {/* Video Tag */}
                <motion.div 
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-lg z-30"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.1em] text-white/90">{video.label}</span>
                </motion.div>
                
                {/* Control Overlay for Native Controls on Click */}
                <video
                  controls
                  className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 z-40 transition-opacity duration-300"
                  muted
                >
                  <source src={video.url} type="video/mp4" />
                  <track kind="captions" />
                </video>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center cursor-default"
            >
              <motion.img
                src={selectedImage}
                alt="Gallery Full View"
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-3xl shadow-2xl shadow-black/50"
              />
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 md:top-6 md:right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-black/50 hover:bg-red-500 hover:text-white transition-colors duration-300 z-10"
              >
                <X className="h-7 w-7" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
