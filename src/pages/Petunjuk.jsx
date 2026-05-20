export default function Petunjuk() {
  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6">
      <h2 className="text-xl font-bold text-center text-white mb-6 uppercase tracking-wider border-b border-slate-700 pb-4">Petunjuk Aplikasi</h2>
      
      <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
        <div className="bg-slate-700/50 p-3 font-semibold text-slate-200">Panduan Viewer 3D</div>
        <div className="p-4 space-y-6">
          
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <img src="/help/1.gif" alt="Geser Atas Bawah" className="w-48 h-auto rounded-lg border border-slate-700" />
            <div>
              <h4 className="font-bold text-red-500 mb-2">Geser Atas Bawah</h4>
              <p className="text-sm text-slate-300">Objek 3D dapat digerakan keatas dan juga kebawah yaitu dengan mengusap layar keatas untuk melihat objek dari bawah, kemudian usap layar kebawah untuk melihat objek dari atas.</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <img src="/help/2.gif" alt="Geser Kanan" className="w-48 h-auto rounded-lg border border-slate-700" />
            <div>
              <h4 className="font-bold text-red-500 mb-2">Geser Kanan</h4>
              <p className="text-sm text-slate-300">Objek 3D dapat digerakan ke kanan yaitu dengan mengusap objek pada layar ke kanan.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <img src="/help/4.gif" alt="Geser Kiri" className="w-48 h-auto rounded-lg border border-slate-700" />
            <div>
              <h4 className="font-bold text-red-500 mb-2">Geser Kiri</h4>
              <p className="text-sm text-slate-300">Objek 3D dapat digerakan ke kiri yaitu dengan mengusap objek pada layar ke kiri.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <img src="/help/3.gif" alt="Perbesar" className="w-48 h-auto rounded-lg border border-slate-700" />
            <div>
              <h4 className="font-bold text-red-500 mb-2">Perbesar (Zoom In)</h4>
              <p className="text-sm text-slate-300">Objek 3D dapat diperbesar yaitu dengan cara mencubit layar kedalam.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <img src="/help/zoom-out.gif" alt="Perkecil" className="w-48 h-auto rounded-lg border border-slate-700" />
            <div>
              <h4 className="font-bold text-red-500 mb-2">Perkecil (Zoom Out)</h4>
              <p className="text-sm text-slate-300">Objek 3D dapat diperkecil yaitu dengan cara mencubit layar keluar.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
