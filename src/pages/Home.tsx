import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero />
      <Features />
      
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Premium Products</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 tracking-tight">Featured Products</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Discover our range of high-quality industrial machinery, designed to meet your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.slice(0, 6).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <a
              href="/products"
              className="inline-flex items-center space-x-3 bg-[#0b1120] hover:bg-[#1a2333] text-white px-10 py-5 rounded-[2rem] text-xl font-bold transition-all shadow-xl shadow-slate-900/10 uppercase tracking-widest"
            >
              <span>View Full Catalog</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Fabrication Section Based on User Request */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Custom Designs</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 tracking-tight">
                Aparna Steel Industries <br />
                <span className="text-blue-600">Precision in Iron & Steel Fabrication!</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Looking for top-quality iron and steel fabrication at reasonable prices? We've got you covered with custom designs and precision engineering.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Custom Steel Fabrications",
                  "Industrial & Agricultural Equipment",
                  "Durable & Precision-Engineered",
                  "Affordable & Reliable Solutions"
                ].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <div className="p-1 bg-green-500/10 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-wide uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              {[
                { title: "Custom Steel Fabrications", list: ["Custom metal fabrication", "Structural steel work", "Precision welding", "Metal cutting and forming", "Industrial equipment"] },
                { title: "Professional Roofing Solutions", list: ["Premium quality materials", "Custom design", "Industrial and residential", "Maintenance and repairs", "Weather-resistant"] }
              ].map((service) => (
                <div key={service.title} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                  <h3 className="text-xl font-black mb-6 text-slate-900 uppercase tracking-tight leading-none">{service.title}</h3>
                  <ul className="space-y-4">
                    {service.list.map((li) => (
                      <li key={li} className="text-slate-500 text-sm font-medium flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
