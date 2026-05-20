@echo off
echo ========================================================
echo Memulai React Modern Server untuk PPS BETAKO Merpati Putih
echo ========================================================
echo.
echo Menjalankan Vite Development Server...
echo Silakan buka browser di http://localhost:5173 jika tidak terbuka otomatis.
echo Biarkan jendela ini tetap terbuka selama menggunakan aplikasi.
echo.
cd /d "%~dp0"
call npm run dev -- --open
pause
