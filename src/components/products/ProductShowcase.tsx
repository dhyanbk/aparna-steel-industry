import { motion } from 'framer-motion';
import { products } from '../../data/products';
import ProductCard from './ProductCard';

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 uppercase">Industrial Machinery</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Engineered for high-volume agricultural output, our specialized systems provide 
            unrivaled precision in crop de-husking and processing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}