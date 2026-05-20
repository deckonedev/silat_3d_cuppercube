import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TEKNIK_DATA = {
  '1-kiri-kuda-depan': { title: 'Kiri Kuda Depan', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'kiri-kuda-depan-h1.ccbz', name: 'Hitungan 1'}, {id: 'h2', file: 'kiri-kuda-depan-h2.ccbz', name: 'Hitungan 2'}, {id: 'h3', file: 'kiri-kuda-depan-h3.ccbz', name: 'Hitungan 3'}] },
  '2-kembali-kuda-tengah': { title: 'Kembali Kuda Tengah Sedang', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'kembali-kuda-tengah-sedang-h1.ccbz', name: 'Hitungan 1'}, {id: 'h2', file: 'kembali-kuda-tengah-sedang-h2.ccbz', name: 'Hitungan 2'}, {id: 'h3', file: 'kembali-kuda-tengah-sedang-h3.ccbz', name: 'Hitungan 3'}] },
  '3-melangkah-maju': { title: 'Melangkah Maju', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'melangkah-maju-h1.ccbz', name: 'Hitungan 1'}, {id: 'h2', file: 'melangkah-maju-h2.ccbz', name: 'Hitungan 2'}, {id: 'h3', file: 'melangkah-maju-h3.ccbz', name: 'Hitungan 3'}] },
  '4-melangkah-mundur': { title: 'Melangkah Mundur', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'melangkah-mundur-h1.ccbz', name: 'Hitungan 1'}, {id: 'h2', file: 'melangkah-mundur-h2.ccbz', name: 'Hitungan 2'}, {id: 'h3', file: 'melangkah-mundur-h3.ccbz', name: 'Hitungan 3'}] },
  '5-maju-kesamping': { title: 'Maju Kesamping', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'maju-kesamping-h1.ccbz', name: 'Hitungan 1'}, {id: 'h2', file: 'maju-kesamping-h2.ccbz', name: 'Hitungan 2'}] },
  '6-mundur-kesamping': { title: 'Mundur Kesamping', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'mundur-kesamping-h1.ccbz', name: 'Hitungan 1'}, {id: 'h2', file: 'mundur-kesamping-h2.ccbz', name: 'Hitungan 2'}] },
  '7-ganti-langkah': { title: 'Ganti Langkah', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'ganti-langkah-h1.ccbz', name: 'Hitungan 1'}, {id: 'h2', file: 'ganti-langkah-h2.ccbz', name: 'Hitungan 2'}, {id: 'h3', file: 'ganti-langkah-h3.ccbz', name: 'Hitungan 3'}] },
  '8-balik-hadap': { title: 'Balik Hadap', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'balik-hadap-h1.ccbz', name: 'Hitungan 1'}, {id: 'h2', file: 'balik-hadap-h2.ccbz', name: 'Hitungan 2'}, {id: 'h3', file: 'balik-hadap-h3.ccbz', name: 'Hitungan 3'}] },
  '9-hadap-kanan': { title: 'Hadap Kanan', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'hadap-kanan-h1.ccbz', name: 'Hitungan 1'}, {id: 'h2', file: 'hadap-kanan-h2.ccbz', name: 'Hitungan 2'}, {id: 'h3', file: 'hadap-kanan-h3.ccbz', name: 'Hitungan 3'}] },
  '10-hadap-kiri': { title: 'Hadap Kiri', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'hadap-kiri-h1.ccbz', name: 'Hitungan 1'}, {id: 'h2', file: 'hadap-kiri-h2.ccbz', name: 'Hitungan 2'}, {id: 'h3', file: 'hadap-kiri-h3.ccbz', name: 'Hitungan 3'}] },
  '11-maju-simpir': { title: 'Maju Simpir', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'maju-simpir.ccbz', name: 'Hitungan 1'}] },
  '12-mundur-simpir': { title: 'Mundur Simpir', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'mundur-simpir.ccbz', name: 'Hitungan 1'}] },
  '13-srimpet': { title: 'Srimpet', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'srimpet.ccbz', name: 'Hitungan 1'}] },
  '14-maju-silang': { title: 'Maju Silang', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'maju-silang.ccbz', name: 'Hitungan 1'}] },
  '15-mundur-silang': { title: 'Mundur Silang', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'mundur-silang.ccbz', name: 'Hitungan 1'}] },
  '16-potong-langkah': { title: 'Potong Langkah', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'potong-langkah-h1.ccbz', name: 'Hitungan 1'}, {id: 'h2', file: 'potong-langkah-h2.ccbz', name: 'Hitungan 2'}, {id: 'h3', file: 'potong-langkah-h3.ccbz', name: 'Hitungan 3'}] },
  '17-geser-depan': { title: 'Geser Depan', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'geser-depan.ccbz', name: 'Hitungan 1'}] },
  '18-geser-belakang': { title: 'Geser Belakang', stages: [{id: 'awalan', file: 'awalan.ccbz', name: 'Awalan'}, {id: 'h1', file: 'geser-belakang.ccbz', name: 'Hitungan 1'}] },
};

export default function Viewer3D() {
  const { id } = useParams();
  const navigate = useNavigate();
  const teknikInfo = TEKNIK_DATA[id];
  const stages = teknikInfo?.stages || [];
  const [activeStage, setActiveStage] = useState(0);

  if (!teknikInfo) return <div className="p-4 text-white">Teknik tidak ditemukan</div>;

  const currentFile = stages[activeStage]?.file;

  return (
    <div className="flex flex-col h-full bg-slate-900">
      <div className="bg-slate-800/80 backdrop-blur-md flex items-center p-3 shadow-md border-b border-slate-700/50 relative z-10">
        <button onClick={() => navigate(-1)} className="text-red-500 p-2 hover:bg-slate-700 rounded-xl shadow-sm transition-all active:scale-95">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-lg font-bold text-slate-100 ml-4 flex-1 tracking-wide">{teknikInfo.title}</h2>
      </div>

      <div className="flex-1 relative flex flex-col">
        <div className="w-full flex-1 flex items-center justify-center bg-black overflow-hidden relative shadow-inner">
          {/* Menggunakan iframe untuk ISOLASI TOTAL Engine 3D. Mencegah crash memori/WebGL */}
          <iframe 
            key={`${id}-${activeStage}`}
            src={`/3d-viewer.html?file=${currentFile}`} 
            className="w-full h-full border-none touch-none"
            title="3D Viewer"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 pointer-events-none shadow-lg border border-slate-700/50">
            {stages[activeStage].name}
          </div>
        </div>
        
        <div className="bg-slate-900 p-4 pb-8 border-t border-slate-800 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.3)] z-10 relative">
          <h3 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-widest text-center">Tahapan Gerakan</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {stages.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeStage === idx 
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-900/50 scale-105 border-transparent' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200 border border-slate-700'
                }`}
              >
                {stage.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
