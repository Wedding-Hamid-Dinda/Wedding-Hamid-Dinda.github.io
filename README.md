# Wedding Invitation — Modern Editorial

Website undangan pernikahan responsif menggunakan HTML, CSS, dan JavaScript biasa.

## Cara menjalankan di VS Code

1. Ekstrak folder `wedding-invitation`.
2. Buka VS Code → File → Open Folder → pilih folder `wedding-invitation`.
3. Buka `index.html`.
4. Jika sudah memasang ekstensi **Live Server**, klik kanan `index.html` → **Open with Live Server**.
5. Website akan terbuka di browser.

## Bagian yang wajib diganti

Cari dan ubah teks contoh berikut di `index.html`:
- Alex & Olivia
- Alexandra Putra dan Olivia Maharani
- Nama orang tua
- Tanggal, jam, dan tempat acara
- Alamat lokasi

## Pengaturan JavaScript

Buka `js/script.js`, lalu ubah:
- `weddingDate` ke tanggal dan jam acara sebenarnya.
- `whatsappNumber` ke nomor WhatsApp penerima RSVP, format 62xxxxxxxxxx tanpa tanda +.

## Foto dan musik

Saat ini beberapa foto contoh diambil dari Unsplash melalui internet agar tampilan demo langsung terlihat. Untuk menggunakan foto sendiri:
- Salin foto sampul ke `assets/images/cover.jpg`.
- Salin foto pasangan ke `assets/images/couple-1.jpg` dan `assets/images/couple-2.jpg`.
- Simpan foto galeri di `assets/images/gallery/`.
- Simpan musik milik sendiri atau yang berlisensi sesuai penggunaan di `assets/music/wedding.mp3`.

Lalu ubah atribut `src` gambar di `index.html` menjadi path lokal, misalnya:
`assets/images/couple-1.jpg`

Untuk gambar sampul paling atas, ubah URL background `.opening-image` di `css/style.css` menjadi:
`url("../assets/images/cover.jpg")`

Untuk musik, nama file harus `wedding.mp3` atau ubah `src` elemen audio di `index.html`.

## Catatan penting

- RSVP versi awal membuka WhatsApp; belum menyimpan data ke database.
- Musik tidak otomatis diputar sebelum pengunjung menekan tombol karena aturan browser.
- Foto contoh dan Google Fonts memerlukan internet.
- Sebelum dipublikasikan, cek ulang semua nama, tanggal, lokasi, nomor WhatsApp, dan izin penggunaan foto/musik.
