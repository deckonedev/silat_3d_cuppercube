import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-full">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full max-w-lg bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700"
      >
        <h2 className="text-2xl font-bold text-red-500 mb-6 tracking-wide">PPS BETAKO MERPATI PUTIH</h2>
        
        <motion.img 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          src="/img/mp_logo.png" 
          alt="Merpati Putih Logo" 
          className="w-48 h-48 mx-auto object-contain mb-8 filter drop-shadow-lg"
        />
        
        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
          <p className="text-sm text-slate-300 leading-relaxed text-justify">
            PPS Betako Merpati Putih (MP) merupakan salah satu perguruan pencak silat bela diri Tangan Kosong (PPS Betako) dan merupakan salah satu aset budaya bangsa. Mulai terbentuk aliran jenis beladiri ini pada sekitar tahun 1550-an dan perlu dilestarikan serta dikembangkan selaras dengan perkembangan dan kemajuan ilmu pengetahuan serta teknologi dewasa ini. 
            <br/><br/>
            Tujuan PPS Betako Merpati Putih yaitu menempa kepribadian anggota-anggotanya agar berwatak dan berkepribadian luhur, berbudi, kuat, harmonis, dinamis serta patriotis, sesuai filsafat Indonesia. Seni beladiri adalah seperti pisau bermata dua, dapat digunakan untuk menolong maupun melukai, untuk itulah suatu seni beladiri harus memiliki dasar-dasar filosofi yang kuat di dalam pengajarannya agar tidak salah dan tidak disalahgunakan.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
