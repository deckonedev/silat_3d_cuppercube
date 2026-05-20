import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-full">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-sm bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-700"
      >
        <h2 className="text-xl font-bold text-red-500 mb-8 uppercase tracking-wider">Profil Pengembang</h2>
        
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500 via-blue-500 to-green-500 rounded-full animate-spin blur-md opacity-70"></div>
          <img 
            src="/img/gua.png" 
            alt="Profil" 
            className="relative w-40 h-40 object-cover rounded-full border-4 border-slate-900 shadow-xl"
          />
        </div>
        
        <div className="space-y-2 text-slate-200">
          <p className="text-xl font-bold tracking-wide">RECXY YUDA UTAMA</p>
          <p className="text-red-400 font-medium">Informatika</p>
          <p className="text-slate-400 font-mono bg-slate-900 py-1 px-3 rounded-md inline-block">13312340</p>
          <p className="text-slate-500 text-sm mt-4">Angkatan 2013</p>
        </div>
      </motion.div>
    </div>
  );
}
