import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, CheckCircle2, Box, Home as HomeIcon } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-24 text-center"
        >
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Industrial Solutions</span>
          <h1 className="text-5xl md:text-7xl font-black mb-10 text-slate-900 uppercase tracking-tight leading-none">Product Catalog</h1>
          
          <div className="relative max-w-3xl mx-auto group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-slate-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search by machine name or keyword..."
                className="w-full pl-16 pr-8 py-7 bg-white border-2 border-slate-100 rounded-[2rem] shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 text-xl transition-all placeholder:text-slate-400 text-slate-900 font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-16 border-b border-slate-200 pb-8">
              <div className="flex items-center space-x-3">
                <Filter className="h-5 w-5 text-blue-600" />
                <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">Our Premium Products ({filteredProducts.length})</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-32 bg-white rounded-[4rem] border-4 border-dashed border-slate-100 shadow-2xl shadow-slate-200/50 mb-32">
            <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search className="h-10 w-10 text-slate-300" />
            </div>
            <p className="text-slate-900 text-3xl font-black uppercase tracking-tight mb-4">No results found</p>
            <p className="text-slate-400 text-lg max-w-md mx-auto">We couldn't find any results for "{searchTerm}". Please try a different search term.</p>
          </div>
        )}

        {/* Fabrication & Roofing Section (New Content) */}
        <section className="bg-[#0b1120] rounded-[3rem] overflow-hidden shadow-2xl text-white">
          <div className="p-10 md:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">Aparna Steel Industries</span>
                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                  Precision in Iron & <br />
                  <span className="text-blue-500 text-shadow-glow">Steel Fabrication!</span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl">
                  Looking for top-quality iron and steel fabrication at reasonable prices? We've got you covered with custom designs and precision engineering.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Custom Steel Fabrications",
                    "Industrial & Agricultural Equipment",
                    "Durable & Precision-Engineered",
                    "Affordable & Reliable Solutions"
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <CheckCircle2 className="h-5 w-5 text-blue-500" />
                      <span className="text-sm font-bold uppercase tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {/* Custom Steel Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center space-x-4 mb-6 text-blue-500">
                    <Box className="h-8 w-8" />
                    <h3 className="text-2xl font-black uppercase tracking-tight">Custom Steel Fabrications</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Custom metal fabrication for specific needs",
                      "Structural steel work for buildings",
                      "Precision welding services",
                      "Metal cutting and forming",
                      "Industrial equipment fabrication"
                    ].map((li) => (
                      <li key={li} className="text-slate-400 text-sm flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Professional Roofing Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center space-x-4 mb-6 text-blue-500">
                    <HomeIcon className="h-8 w-8" />
                    <h3 className="text-2xl font-black uppercase tracking-tight">Professional Roofing Solutions</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Premium quality roofing materials",
                      "Custom design and installation",
                      "Industrial and residential roofing",
                      "Maintenance and repairs",
                      "Weather-resistant solutions"
                    ].map((li) => (
                      <li key={li} className="text-slate-400 text-sm flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Roofing Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mb-20">
          {[
            {
              title: "Curved Roofing Project",
              tag: "Roofing Installation",
              image: "https://raw.githubusercontent.com/dhyanbk/web-assets/main/croofing.jpeg",
              desc: "Elegant curved roofing design featuring alternating blue and white panels."
            },
            {
              title: "Traditional Roofing Project",
              tag: "Traditional Style",
              image: "https://raw.githubusercontent.com/dhyanbk/web-assets/main/troofing.jpg",
              desc: "Premium traditional roofing installation showcasing classic designs."
            }
          ].map((project) => (
            <motion.div 
              key={project.title}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 group"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {project.tag}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-3 text-slate-900 uppercase tracking-tight">{project.title}</h3>
                <p className="text-slate-500">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
