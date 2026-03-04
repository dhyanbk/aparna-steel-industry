import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Legacy of Excellence</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Manufacturing Success <br/><span className="text-blue-600 underline decoration-4 underline-offset-8">Since 2002</span></h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100/50 rounded-3xl -z-10 transform rotate-3" />
                <img
                  src="/assets/shop-photo.jpg"
                  alt="Aparna Steel Industries Facility"
                  className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Empowering Modern Agriculture</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Located in Sullia, Karnataka, Aparna Steel Industries has dedicated over two decades to 
                  revolutionizing agricultural processing. Our facility combines traditional engineering 
                  craftsmanship with modern technological advancements.
                </p>
                <p>
                  We specialize in high-performance machinery for Areca Nut, Pepper, and Coconut processing, 
                  trusted by thousands of farmers and industrial processors across the region.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="text-3xl font-black text-slate-900">20+</p>
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Years Experience</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="text-3xl font-black text-slate-900">5000+</p>
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px]" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  To engineer the world's most efficient agricultural processing systems, 
                  minimizing waste and maximizing farmer profitability through sustainable 
                  technological innovation.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Core Values</h2>
                <ul className="space-y-4">
                  {[
                    "Uncompromising Quality Control",
                    "Farmer-First Innovation",
                    "Rapid After-Sales Service",
                    "Ethical Engineering",
                    "Eco-Friendly Solutions"
                  ].map((value) => (
                    <li key={value} className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-blue-500 rounded-full" />
                      <span className="text-slate-200 font-medium">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}