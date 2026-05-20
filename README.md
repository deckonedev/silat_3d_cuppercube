# 🥋 PPS Betako Merpati Putih - 3D Interactive Web App

Sebuah aplikasi edukasi interaktif berbasis web dan mobile untuk mempelajari teknik-teknik silat **PPS Betako Merpati Putih** secara 3D. Aplikasi ini merupakan hasil *modernisasi (remaster)* dari versi lawas yang sebelumnya dibangun menggunakan jQuery Mobile, kini dibangun ulang sepenuhnya dengan arsitektur **Modern Single Page Application (SPA)** menggunakan React.js.

## ✨ Fitur Utama

- 🏠 **Home & Sejarah:** Pengenalan dan sejarah singkat perguruan PPS Betako Merpati Putih.
- ⚔️ **Teknik Silat (3D Viewer):** Mempelajari 18 Teknik Dasar (seperti Kuda-kuda Depan, Ganti Langkah, Maju Simpir, dll) secara visual. Menggunakan *Engine 3D (CopperLicht)* di mana pengguna dapat menggeser, memutar, dan melakukan *zoom* pada karakter 3D. Setiap teknik memiliki tahapan/hitungan gerakan yang dapat diputar secara dinamis.
- 📋 **Kuis Evaluasi:** Modul kuis interaktif dengan sistem skoring *real-time* untuk menguji pemahaman anggota terhadap teknik dan sejarah.
- 📱 **Cross-Platform & Responsive:** Desain responsif menggunakan Tailwind CSS yang dioptimalkan untuk perangkat *Mobile* maupun PC/Laptop.

## 🚀 Teknologi & Framework yang Digunakan

Aplikasi ini memadukan teknologi WebGL lawas dengan *framework Frontend* paling modern untuk menghasilkan aplikasi yang sangat ringan (anti-lag) dan bebas *memory leak*.

1. **[React.js 18](https://react.dev/) (via Vite):** Core framework untuk membangun komponen antarmuka, state management, dan logika kuis.
2. **[Tailwind CSS v4](https://tailwindcss.com/):** Framework CSS modern bergaya *utility-first* untuk desain UI (menerapkan *Glassmorphism* dan tata letak yang indah).
3. **[Framer Motion](https://www.framer.com/motion/):** Pustaka khusus untuk animasi komponen React (transisi mulus, pop-up icon, dll).
4. **[Lucide React](https://lucide.dev/):** Kumpulan ikon vektor (SVG) modern beresolusi tinggi.
5. **[React Router DOM](https://reactrouter.com/):** Mengatur perpindahan antar halaman (*routing*) tanpa me-*reload* halaman browser.
6. **CopperLicht (WebGL Engine):** *Engine* 3D lawas (format `.ccbz`) peninggalan versi sebelumnya. Di versi modern ini, CopperLicht **diisolasi di dalam `<iframe>`** (`public/3d-viewer.html`) untuk mencegah konflik memori dan *WebGL crash context*.

---

## 🛠️ Panduan Instalasi (Development)

Untuk menjalankan kode sumber aplikasi ini secara lokal di komputer Anda, ikuti langkah-langkah berikut:

### Prasyarat
Pastikan Anda sudah menginstal **[Node.js](https://nodejs.org/en/)** (Versi 18 atau lebih baru disarankan) di komputer Anda.

### 1. Kloning Repository
Clone repository ini ke dalam komputer Anda, lalu masuk ke dalam folder proyek:
```bash
git clone https://github.com/username-anda/android-mp.git
cd android-mp
```

### 2. Instalasi Dependensi (Package)
Instal semua modul yang dibutuhkan (React, Tailwind, Vite, dll) menggunakan perintah NPM:
```bash
npm install
```

### 3. Menjalankan Server Lokal (Development)
Ada dua cara untuk menjalankan aplikasi ini:
**Cara A (Menggunakan Terminal):**
```bash
npm run dev
```
**Cara B (Menggunakan Batch Script khusus Windows):**
Cukup klik ganda (*double-click*) pada file **`run_silat.bat`** yang ada di folder proyek.

Setelah server berjalan, buka browser Anda dan akses alamat:
👉 **`http://localhost:5173`**

---

## 📦 Build untuk Produksi (Siap Rilis)

Jika Anda ingin menghasilkan file statis yang siap di-hosting ke server sungguhan (seperti Vercel, Netlify, atau GitHub Pages), jalankan perintah:

```bash
npm run build
```
File hasil rakitan (HTML/CSS/JS yang sudah dikompresi) akan muncul di dalam folder `dist/`.

*(Opsi Tambahan: Jika Anda berencana mengubah web ini menjadi aplikasi Android / APK murni, Anda dapat menggunakan [Capacitor JS](https://capacitorjs.com/) pada folder proyek ini).*

---

## 👨‍💻 Profil Pengembang
Awalnya dikembangkan oleh: **Recxy Yuda Utama** (Informatika - Angkatan 2013).
Diperbarui dan dimodernisasi menggunakan React & TailwindCSS untuk kompatibilitas perangkat keras masa kini. 

---
*Dibuat untuk melestarikan dan mendukung kemajuan pencak silat PPS Betako Merpati Putih Indonesia.*
