import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TEKNIK_LIST = [
  { id: '1-kiri-kuda-depan', name: 'Kiri Kuda Depan', img: '/img/1.jpg' },
  { id: '2-kembali-kuda-tengah', name: 'Kuda Tengah Sedang', img: '/img/2.jpg' },
  { id: '3-melangkah-maju', name: 'Melangkah Maju', img: '/img/3.jpg' },
  { id: '4-melangkah-mundur', name: 'Melangkah Mundur', img: '/img/4.jpg' },
  { id: '5-maju-kesamping', name: 'Maju Kesamping', img: '/img/5.jpg' },
  { id: '6-mundur-kesamping', name: 'Mundur Kesamping', img: '/img/6.jpg' },
  { id: '7-ganti-langkah', name: 'Ganti Langkah', img: '/img/7.jpg' },
  { id: '8-balik-hadap', name: 'Balik Hadap', img: '/img/8.jpg' },
  { id: '9-hadap-kanan', name: 'Hadap Kanan', img: '/img/9.jpg' },
  { id: '10-hadap-kiri', name: 'Hadap Kiri', img: '/img/10.jpg' },
  { id: '11-maju-simpir', name: 'Maju Simpir', img: '/img/11.jpg' },
  { id: '12-mundur-simpir', name: 'Mundur Simpir', img: '/img/12.jpg' },
  { id: '13-srimpet', name: 'Srimpet', img: '/img/13.jpg' },
  { id: '14-maju-silang', name: 'Maju Silang', img: '/img/14.jpg' },
  { id: '15-mundur-silang', name: 'Mundur Silang', img: '/img/15.jpg' },
  { id: '16-potong-langkah', name: 'Potong Langkah', img: '/img/16.jpg' },
  { id: '17-geser-depan', name: 'Geser Depan', img: '/img/17.jpg' },
  { id: '18-geser-belakang', name: 'Geser Belakang', img: '/img/18.jpg' },
];

export default function Teknik() {
  return (
    <div className="p-4 min-h-full">
      <h2 className="text-xl font-bold text-center text-white mb-6 uppercase tracking-wider">Pilih Teknik Silat</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {TEKNIK_LIST.map((teknik, index) => (
          <motion.div
            key={teknik.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link 
              to={`/teknik/${teknik.id}`}
              className="block bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:border-red-500 transition-all hover:-translate-y-1 group"
            >
              <div className="aspect-square w-full bg-slate-900 overflow-hidden p-2">
                <img 
                  src={teknik.img} 
                  alt={teknik.name} 
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <span className="text-sm font-medium text-slate-200">{teknik.name}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
