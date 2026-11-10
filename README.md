# KAII. — Personal Portfolio

Portfolio pribadi Muhammad Yozza Alkhafie Putra Setiyobudi (Kaii). HTML, CSS, dan JavaScript vanilla — tanpa backend, siap untuk GitHub Pages.

## Struktur
```
portfolio-kaii/
├── index.html
├── README.md
├── assets/
│   ├── images/ (profile.svg, favicon.svg)
│   └── icons/
├── css/style.css
└── js/script.js
```

## Menjalankan di komputer
Buka `index.html` di browser (butuh internet untuk Google Fonts dan Lucide Icons).

## Mengganti foto profil
1. Simpan fotomu di `assets/images/profile.png` (rasio sekitar 5:6, ukuran < 300 KB).
2. Di `index.html`, ganti `profile.svg` menjadi `profile.png` (2 tempat di bagian Hero & About, serta `og:image`).

## Menambah prestasi
Salin satu `<article class="glass card" data-c="futsal">` di bagian `#ach`. Nilai `data-c`: `org`, `futsal`, `esport`. Tambahkan class `gold` untuk Juara 1.

## Upload ke GitHub
1. Buat akun di github.com, klik **New repository**, beri nama `portfolio-kaii`, pilih **Public**, klik **Create repository**.
2. Klik **uploading an existing file**, seret SEMUA isi folder `portfolio-kaii` (index.html, css, js, assets, README.md) — pastikan `index.html` berada di root repo.
3. Klik **Commit changes**.

## Aktifkan GitHub Pages
1. Buka repo → **Settings → Pages**.
2. Di **Build and deployment**, Source: **Deploy from a branch**; Branch: **main**, folder **/ (root)** → **Save**.
3. Tunggu 1–3 menit. Situs tersedia di `https://USERNAME.github.io/portfolio-kaii/`.
   (Jika repo bernama `USERNAME.github.io`, URL-nya `https://USERNAME.github.io/`.)
