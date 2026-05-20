import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const QUESTIONS = [
  {
    id: 1,
    question: "PPS BETAKO Merpati Putih Pertama kali didirikan pada tahun...",
    options: ["1250-an", "1530-an", "1450-an", "1550-an", "1560-an"],
    answerIndex: 3,
    score: 10
  },
  {
    id: 2,
    question: "Pada Teknik Silat Kembali Kuda Kuda Tengah Sedang terdiri dari berapa gerakan ?",
    options: ["2 gerakan", "5 gerakan", "7 gerakan", "1 gerakan", "4 gerakan"],
    answerIndex: 4,
    score: 10
  },
  {
    id: 3,
    question: "Pada hitungan ke-1 Teknik Kiri-Kuda Kuda Depan leyek belakang condong kearah kanan, setelah itu kaki kiri dirapatkan kearah...",
    options: ["Kiri", "Kanan", "Atas", "Bawah", "Depan"],
    answerIndex: 1,
    score: 10
  },
  {
    id: 4,
    question: "Gambar dibawah termasuk Teknik Ganti Langkah pada hitungan...",
    image: "/img/ganti-langkah-hitungan-2.PNG",
    options: ["Ke dua", "Awalan", "Ke empat", "Ke satu", "Ke tiga"],
    answerIndex: 3,
    score: 10
  },
  {
    id: 5,
    question: "Gambar dibawah termasuk Teknik Mundur Silang pada hitungan...",
    image: "/img/mundur-silang-1.PNG",
    options: ["Ke satu", "Ke dua", "Ke tiga", "Awalan", "Ke empat"],
    answerIndex: 0,
    score: 10
  },
  {
    id: 6,
    question: "Gambar dibawah termasuk gerakan...",
    image: "/img/kuda-kuda-tengah.PNG",
    options: ["Kuda-Kuda Kiri", "Kuda-Kuda Kanan", "Kuda-Kuda Akhir", "Kuda-Kuda Atas", "Kuda-Kuda Tengah"],
    answerIndex: 4,
    score: 10
  },
  {
    id: 7,
    question: "Gambar dibawah merupakan gerakan...",
    image: "/img/kuda-kuda-depan.PNG",
    options: ["Kuda-Kuda Kiri", "Kuda-Kuda Kanan", "Kuda-Kuda Depan", "Kuda-Kuda Atas", "Kuda-Kuda Tengah"],
    answerIndex: 2,
    score: 10
  },
  {
    id: 8,
    question: "Tujuan PPS Betako Merpati Putih yaitu menempa kepribadian anggota-anggotanya agar berwatak dan berkepribadian luhur, berbudi, kuat, harmonis, dinamis serta...",
    options: ["Kritis", "Humoris", "Individualis", "Patriotis", "Pesimis"],
    answerIndex: 3,
    score: 10
  },
  {
    id: 9,
    question: "Teknik Geser Belakang diawali dengan gerakan...",
    options: ["Kuda-Kuda Kiri", "Kuda-Kuda Kanan", "Kuda-Kuda Depan", "Kuda-Kuda Atas", "Kuda-Kuda Tengah"],
    answerIndex: 2,
    score: 10
  },
  {
    id: 10,
    question: "Teknik Geser Depan terdiri dari berapa gerakan ?",
    options: ["2 Gerakan", "5 Gerakan", "7 Gerakan", "1 Gerakan", "4 Gerakan"],
    answerIndex: 0,
    score: 10
  }
];

export default function Evaluasi() {
  const [answers, setAnswers] = useState({});

  const handleSelect = (qId, optionIdx) => {
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let total = 0;
    QUESTIONS.forEach(q => {
      if (answers[q.id] === q.answerIndex) {
        total += q.score;
      }
    });
    return total;
  };

  const handleReset = () => {
    if(window.confirm('Reset semua jawaban?')) {
      setAnswers({});
      window.scrollTo(0,0);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto min-h-full pb-24">
      <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
        <h2 className="text-xl font-bold text-red-500 uppercase">Evaluasi Materi</h2>
        <button 
          onClick={handleReset}
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2 rounded-lg text-sm transition-colors border border-slate-600"
        >
          <RefreshCw size={16} /> Reset
        </button>
      </div>

      <div className="space-y-8">
        {QUESTIONS.map((q, i) => (
          <motion.div 
            key={q.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-5 rounded-2xl border border-slate-700 shadow-md"
          >
            <p className="text-slate-100 font-medium mb-4 leading-relaxed">
              <span className="text-red-500 font-bold mr-2">{i + 1}.</span> 
              {q.question}
            </p>
            {q.image && (
              <div className="mb-4 bg-slate-900 rounded-lg p-2 flex justify-center">
                <img src={q.image} alt="Soal" className="max-w-full h-auto rounded max-h-48 object-contain" />
              </div>
            )}
            <div className="space-y-2">
              {q.options.map((opt, optIdx) => (
                <label 
                  key={optIdx} 
                  className={`flex items-center p-3 rounded-xl border cursor-pointer transition-all ${
                    answers[q.id] === optIdx 
                    ? 'bg-red-900/30 border-red-500/50' 
                    : 'bg-slate-900/50 border-transparent hover:border-slate-600'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                    answers[q.id] === optIdx ? 'border-red-500' : 'border-slate-500'
                  }`}>
                    {answers[q.id] === optIdx && <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />}
                  </div>
                  <input 
                    type="radio" 
                    name={`q-${q.id}`} 
                    className="hidden"
                    onChange={() => handleSelect(q.id, optIdx)}
                    checked={answers[q.id] === optIdx}
                  />
                  <span className="text-slate-300 text-sm">{String.fromCharCode(97 + optIdx)}. {opt}</span>
                </label>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="fixed bottom-16 left-0 right-0 bg-slate-800/90 backdrop-blur-md border-t border-red-900/50 p-4 z-10 flex justify-between items-center shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.5)]">
        <span className="text-slate-400 font-medium uppercase tracking-widest text-xs">Total Score</span>
        <span className="text-3xl font-black text-red-500 drop-shadow-md">{calculateScore()}</span>
      </div>
    </div>
  );
}
