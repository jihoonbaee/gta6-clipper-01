# Laporan Build — gta6-clipper-01

**Bounty:** Clip GTA 6 for the most YouTube views (`gta6-clipper-01`) — GRATIS,
hadiah total $500 USDC (1st $100, 2nd $70, 3rd $50, 4–10 $20, 11–20 $14).
**Deadline:** 23 Nov 2026, 08:00 WIB (2026-11-23T01:00:00Z).
**Status build:** KLIP SELESAI + TERVERIFIKASI LOKAL. Upload + submit menunggu parent/user.

## File hasil

| File | Isi |
|---|---|
| `gta6-clipper-01-short.mp4` | **Klip final** — 1080x1920 vertikal, 30 fps, 24,9 detik, H.264 + AAC stereo, 9,5 MB |
| `main.ts` | Program entry (Node 22): validasi + salin `VIDEO.json` ke `/output` |
| `VIDEO.json` | **Masih placeholder** — ganti dengan URL YouTube setelah upload |
| `README.md` | Deskripsi entri + instruksi upload |
| `LICENSE` | MIT |
| `work/render.sh` | Skrip render lengkap (semua perintah ffmpeg, bisa diulang) |
| `work/source/` | Footage sumber resmi + segmen + frame verifikasi (JANGAN di-commit) |

## Momen yang dipilih + alasan

Sumber: **Launch Trailer resmi Rockstar** (`GTAVI_Launch_Trailer.mp4`, 4K,
89 detik), diunduh dari halaman media resmi Rockstar
`rockstargames.com/VI/media/videos` — bukan klip orang lain, bukan re-upload.
Game-nya baru rilis 19 Nov 2026 (kemarin), jadi trailer peluncuran adalah
footage paling aktual dan paling dicari saat ini.

Alur klip (montage cepat + kartu pitch):

1. **Hook 0,0–2,8 dtk — Lucia & Jason di convertible merah**, teks
   "GTA 6 IS OUT NOW". Alasan: wajah kedua protagonis + mobil + menara Vice
   City = langsung dikenali sebagai GTA 6 dalam 1 detik pertama; kata "OUT NOW"
   memanfaatkan momen peluncuran (game baru rilis kemarin).
2. **"OUT NOW" di atas skyline Vice City senja** — teks resmi trailer,
   posisinya di tengah sehingga selamat dari crop vertikal.
3. **Montage cepat:** kru di convertible hijau, iguana di jalan (energi
   "Florida-man" yang viral), mobil sport merah, aerial marina Leonida Keys,
   dua wanita bertopeng, Lucia di rooftop saat sunset, pelukan sunset,
   sniper, Lucia dengan senapan + ledakan. Alasan: tiap shot 0,8–2 detik —
   ritme Shorts; campuran aksi, karakter, dan humor khas GTA.
4. **Kartu pitch 14,9–24,9 dtk (10 detik):** "Make clips like this with AI
   and earn money on make.fun" + `make.fun/bounty/gta6-clipper-01`, di atas
   latar marina yang digelapkan + blur. Alasan: pitch wajib ada di dalam klip
   (teks di layar); 10 detik cukup lama untuk dibaca, musik trailer terus
   mengalun di bawahnya.

Yang dicoba lalu dibuang: Trailer 2 dari YouTube hanya bisa diunduh 360p
(YouTube membatasi format untuk sesi ini — SABR/bot-check), terlalu buram
untuk crop vertikal; klip-klip situs Rockstar ternyata stiker kartun
dekorasi, bukan gameplay; shot Jason memoles mobil berakhir close-up tangan
yang membingungkan; shot DJ ternyata potongan 3 scene gelap yang berbeda.

## Langkah render

Semua di `work/render.sh` (ffmpeg 8.1.2, font DejaVu Sans Bold):

- Tiap segmen: potong dari trailer 4K → crop vertikal 1215x2160 (tengah,
  kecuali hook digeser kiri agar wajah Lucia utuh, dan shot dua wanita
  bertopeng digeser kiri agar keduanya masuk frame) → scale 1080x1920.
- Kartu pitch: satu frame marina → gelapkan + blur → 4 baris drawtext.
- Gabung (concat) + audio trailer yang sama (26,6–51,5 dtk, kontinu, tanpa
  lompatan) + fade-out 1,5 detik terakhir.
- Finishing: buang track timecode (tmcd) bawaan trailer, simpan video +
  audio saja.

Tiga iterasi: v1 (teks "ROCKSTAR GAMES PRESENTS" terpotong crop; kartu pitch
bertabrakan dengan teks trailer), v2 (teks kartu masih tembus; batas segmen
melenceng ~0,5 dtk), v3 (final — semua diperbaiki, dicek frame per frame).

## Hasil verifikasi lokal

| Cek | Hasil |
|---|---|
| Bisa diputar (ffprobe + frame extraction seluruh timeline) | ✅ |
| Vertikal 1080x1920, 30 fps | ✅ |
| Durasi 24,9 detik (< 60 detik = Short) | ✅ |
| Pitch make.fun terbaca di layar (teks + URL, 10 detik) | ✅, dicek di frame 18,0 & 22,0 |
| Hook + tiap shot montage teridentifikasi di frame | ✅ (strip 4 fps, 4,0–10,0 dtk) |
| Audio: musik trailer sepanjang klip, termasuk kartu pitch | ✅ mean −15,2 dB, maks −2,2 dB |
| Ukuran 9,5 MB, H.264 + AAC, tanpa track data | ✅ |
| `main.ts` jalan lokal (`MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`) | ✅ `out/VIDEO.json` identik dengan `VIDEO.json` |
| `VIDEO.json` placeholder | ⚠️ MENUNGGU URL asli sesudah upload |

## Yang masih dibutuhkan dari user / parent

1. **Repo GitHub** (parent): buat repo kosong `gta6-clipper-01` sesudah
   20 Nov 2026 08:00 WIB (sudah lewat). Isi repo: `main.ts`, `VIDEO.json`,
   `README.md`, `LICENSE`, `LAPORAN-BUILD.md` (+ `.makefun/owner.json` bila
   perlu). **JANGAN commit `work/`** (±1 GB footage sumber + segmen) dan
   **JANGAN commit `gta6-clipper-01-short.mp4`** (house membaca video dari
   YouTube, bukan dari repo).
2. **Upload YouTube** (user — butuh channel-nya): lihat "Instruksi upload"
   di bawah. Video harus **publik**, terbit di antara 20 Nov 08:00 WIB dan
   23 Nov 08:00 WIB.
3. **Play code** (parent): ambil dari
   `GET /api/competitions/gta6-clipper-01/play-code` sesudah registrasi,
   lalu masukkan ke deskripsi video.
4. **Update `VIDEO.json`** dengan URL Shorts asli, lalu parent bundle +
   check + submit (bukan tugas builder ini).

## Instruksi upload (langkah-demi-langkah untuk user)

1. Buka YouTube Studio → Create → Upload videos → pilih file
   `gta6-clipper-01-short.mp4`.
2. Judul (saran, boleh diubah — judul tidak dicek):
   `GTA 6 IS OUT NOW 🔥 Lucia & Jason are BACK`
3. Description — tempel persis ini (baris pertama wajib kata-per-kata,
   lalu play code di baris sendiri):

   ```
   Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
   makefun-<tiga-kata>
   ```

   Ganti `makefun-<tiga-kata>` dengan play code asli dari parent.
   (Alternatif: play code boleh ditaruh di deskripsi channel, bukan video.)
4. Audience: "No, it's not made for kids". Visibility: **Public**.
5. Publish. Salin URL dari tombol Share video itu
   (bentuk `https://www.youtube.com/shorts/<id>`) dan kirim ke parent agar
   `VIDEO.json` diperbarui.
6. Biarkan video **publik** sampai hasil diumumkan (lewat 23 Nov).

## Catatan

- Tidak ada voice-over: tidak ada tool TTS di mesin; RULES mengizinkan pitch
  berupa teks di layar saja ("as text on screen, a voice or both").
- Tidak ada view yang dibeli / bot — peringkat murni dari views organik.
- Klip memakai footage resmi Rockstar sebagai bahan sumber, dipotong dan
  di-crop sendiri di sesi ini (bukan mengunduh klip jadi orang lain).
