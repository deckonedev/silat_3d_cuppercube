import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Home, Swords, ClipboardList, Menu, Volume2, VolumeX, User, Info, Activity } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import HomePage from './pages/Home';
import TeknikPage from './pages/Teknik';
import Viewer3D from './pages/Viewer3D';
import EvaluasiPage from './pages/Evaluasi';
import PetunjukPage from './pages/Petunjuk';
import AboutPage from './pages/About';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const audioRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log('Autoplay prevented', e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleAudio = () => setIsPlaying(!isPlaying);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  // Close drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-slate-100 overflow-hidden font-sans">
      <audio ref={audioRef} src="/sound/sound-1.mp3" loop />
      
      {/* Modern Header (Glassmorphism) */}
      <header className="bg-red-700/90 backdrop-blur-md text-white flex items-center justify-between px-4 py-3 shadow-lg z-20 absolute top-0 left-0 right-0 border-b border-red-500/30">
        <button onClick={toggleDrawer} className="p-2 hover:bg-red-800 rounded-xl transition-all shadow-sm active:scale-95">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-black tracking-widest drop-shadow-md flex items-center gap-2">
          <Activity size={20} className="text-red-200" /> PPS BETAKO
        </h1>
        <button onClick={toggleAudio} className="p-2 hover:bg-red-800 rounded-xl transition-all shadow-sm active:scale-95 text-yellow-300">
          {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </button>
      </header>

      {/* Side Drawer */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleDrawer}>
        <div className={`fixed top-0 left-0 bottom-0 w-72 bg-slate-900/95 shadow-2xl border-r border-slate-700/50 transition-transform duration-300 ease-out flex flex-col ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={e => e.stopPropagation()}>
          <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center border-b border-slate-700 shadow-inner">
             <div className="relative p-2 bg-slate-900 rounded-2xl shadow-xl mb-4 border border-slate-700">
               <img src="/img/mp_logo.png" alt="MP Logo" className="w-24 h-24 object-contain filter drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
             </div>
             <h2 className="font-bold text-lg text-slate-100 tracking-wider">MERPATI PUTIH</h2>
          </div>
          <div className="p-4 flex-1">
            <h3 className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-4 ml-2">Main Menu</h3>
            <nav className="flex flex-col gap-2">
              <NavLink to="/petunjuk" className={({isActive}) => `flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-900/50 scale-105' : 'text-slate-300 hover:bg-slate-800 hover:text-white hover:scale-105'}`}>
                <Info size={22} /> Panduan Penggunaan
              </NavLink>
              <NavLink to="/about" className={({isActive}) => `flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-900/50 scale-105' : 'text-slate-300 hover:bg-slate-800 hover:text-white hover:scale-105'}`}>
                <User size={22} /> Profil Pengembang
              </NavLink>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-900 pb-28 pt-16">
        <div className="h-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teknik" element={<TeknikPage />} />
            <Route path="/teknik/:id" element={<Viewer3D />} />
            <Route path="/evaluasi" element={<EvaluasiPage />} />
            <Route path="/petunjuk" element={<PetunjukPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </main>

      {/* Modern Floating Bottom Navigation */}
      <div className="fixed bottom-6 left-0 right-0 px-6 z-40 pointer-events-none flex justify-center">
        <nav className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 flex justify-around items-center h-16 w-full max-w-sm rounded-2xl shadow-2xl shadow-black/60 pointer-events-auto px-2">
          
          <NavLink to="/" className="w-full">
            {({ isActive }) => (
              <div className={`relative flex flex-col items-center justify-center w-full h-16 transition-all duration-300 ${isActive ? 'text-red-500 -translate-y-3' : 'text-slate-400 hover:text-slate-200 hover:-translate-y-1'}`}>
                <div className={`relative p-3 rounded-full transition-all duration-300 ${isActive ? 'bg-slate-800 shadow-lg border border-slate-700/50' : ''}`}>
                  <Home size={24} className={isActive ? 'drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]' : ''} />
                </div>
                <span className={`text-[10px] font-bold transition-all duration-300 ${isActive ? 'opacity-100 scale-100 absolute -bottom-1' : 'opacity-0 scale-75 absolute -bottom-4'}`}>Home</span>
              </div>
            )}
          </NavLink>

          <NavLink to="/teknik" className="w-full">
            {({ isActive }) => (
              <div className={`relative flex flex-col items-center justify-center w-full h-16 transition-all duration-300 ${isActive ? 'text-red-500 -translate-y-3' : 'text-slate-400 hover:text-slate-200 hover:-translate-y-1'}`}>
                <div className={`relative p-3 rounded-full transition-all duration-300 ${isActive ? 'bg-slate-800 shadow-lg border border-slate-700/50' : ''}`}>
                  <Swords size={24} className={isActive ? 'drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]' : ''} />
                </div>
                <span className={`text-[10px] font-bold transition-all duration-300 ${isActive ? 'opacity-100 scale-100 absolute -bottom-1' : 'opacity-0 scale-75 absolute -bottom-4'}`}>Teknik</span>
              </div>
            )}
          </NavLink>

          <NavLink to="/evaluasi" className="w-full">
            {({ isActive }) => (
              <div className={`relative flex flex-col items-center justify-center w-full h-16 transition-all duration-300 ${isActive ? 'text-red-500 -translate-y-3' : 'text-slate-400 hover:text-slate-200 hover:-translate-y-1'}`}>
                <div className={`relative p-3 rounded-full transition-all duration-300 ${isActive ? 'bg-slate-800 shadow-lg border border-slate-700/50' : ''}`}>
                  <ClipboardList size={24} className={isActive ? 'drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]' : ''} />
                </div>
                <span className={`text-[10px] font-bold transition-all duration-300 ${isActive ? 'opacity-100 scale-100 absolute -bottom-1' : 'opacity-0 scale-75 absolute -bottom-4'}`}>Evaluasi</span>
              </div>
            )}
          </NavLink>

        </nav>
      </div>

    </div>
  );
}

export default App;
