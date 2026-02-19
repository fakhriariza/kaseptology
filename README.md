# Kaseptology Barbershop — Website

Website barbershop premium yang dibangun dengan **Next.js 14**, **Tailwind CSS**, **Framer Motion**, dan **Firebase**.

---

## Fitur

- **Tema Gelap Premium** — Identitas brand emas & hitam sesuai logo Kaseptology
- **Desain Responsif** — Optimal di mobile, tablet, dan desktop
- **Animasi Halus** — Framer Motion scroll reveal dan transisi halaman
- **Sistem Booking** — Form booking multi-langkah dengan integrasi Firebase Firestore
- **Ketersediaan Real-Time** — Cek slot yang sudah dibooking dan tampilkan yang tersedia
- **Galeri** — Grid gambar dengan filter dan lightbox
- **SEO Optimal** — Meta tag, Open Graph, dan Twitter Card
- **Navigasi Sticky** — Dengan tracking section aktif dan drawer mobile
- **Bahasa Indonesia** — Seluruh teks dalam Bahasa Indonesia

---

## Tech Stack

| Teknologi     | Fungsi              |
| ------------- | ------------------- |
| Next.js 14    | React framework     |
| Tailwind CSS  | Styling             |
| Framer Motion | Animasi             |
| Firebase      | Backend (Firestore) |
| TypeScript    | Type safety         |

---

## Cara Mulai

### Prasyarat

- Node.js 18+ terinstall
- Project Firebase (tier gratis bisa)

### 1. Install Dependencies

```bash
npm install
```

### 2. Konfigurasi Firebase

1. Buka [Firebase Console](https://console.firebase.google.com)
2. Buat project baru (atau pakai yang sudah ada)
3. Aktifkan **Firestore Database** (mulai dalam test mode)
4. Project Settings > General > Your apps > Add web app
5. Copy nilai config Firebase

Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=api_key_kamu
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=project_kamu.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=project_id_kamu
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=project_kamu.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=sender_id_kamu
NEXT_PUBLIC_FIREBASE_APP_ID=app_id_kamu
```

### 3. Setup Firestore

Collection `bookings` akan otomatis terbuat saat booking pertama masuk. Struktur dokumen:

```json
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "service": "string",
  "date": "string (YYYY-MM-DD)",
  "time": "string (HH:MM)",
  "status": "pending | confirmed | cancelled",
  "createdAt": "Timestamp"
}
```

**Firestore Rules yang disarankan** (untuk production):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{bookingId} {
      allow create: if true;
      allow read: if true;
      allow update, delete: if false;
    }
  }
}
```

### 4. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

---

## Deploy ke Vercel

### Via Vercel CLI

```bash
npm i -g vercel
vercel
```

### Via GitHub

1. Push code ke GitHub
2. Buka [vercel.com](https://vercel.com) dan import repository
3. Tambahkan environment variables di settings project Vercel
4. Deploy

---

## Struktur Project

```
kaseptology/
├── app/
│   ├── globals.css       # Style global, Tailwind, komponen custom
│   ├── layout.tsx        # Root layout dengan metadata & font
│   └── page.tsx          # Halaman utama
├── components/
│   ├── Navigation.tsx    # Nav sticky dengan drawer mobile
│   ├── Hero.tsx          # Section hero dengan CTA
│   ├── About.tsx         # Section cerita brand
│   ├── Services.tsx      # Grid layanan dengan harga
│   ├── Gallery.tsx       # Galeri gambar dengan filter
│   ├── Booking.tsx       # Form booking multi-langkah
│   ├── Testimonials.tsx  # Review pelanggan
│   ├── Footer.tsx        # Footer dengan kontak & sosial
│   └── ScrollReveal.tsx  # Wrapper animasi scroll
├── lib/
│   ├── firebase.ts       # Config & inisialisasi Firebase
│   └── bookings.ts       # Utilitas booking & data layanan
├── public/
│   └── images/
│       └── logo.png      # Logo brand
├── .env.local.example    # Template environment variables
├── tailwind.config.js    # Tailwind dengan warna brand
├── next.config.js        # Konfigurasi Next.js
├── tsconfig.json         # Konfigurasi TypeScript
└── package.json
```

---

## Kustomisasi

### Menambah Foto Asli

Ganti placeholder gradient di Gallery dengan foto asli:

1. Tambah gambar ke `public/images/gallery/`
2. Update array `galleryImages` di `components/Gallery.tsx`
3. Gunakan komponen `<Image>` dari `next/image`

### Update Layanan & Harga

Edit array `services` di `lib/bookings.ts`.

### Ganti Info Kontak

Update nomor HP, email, dan link WhatsApp di `components/Footer.tsx`.

### Ubah Warna

Modifikasi warna brand di `tailwind.config.js` bagian `theme.extend.colors.brand`.

---

## Lisensi

Dibuat untuk Kaseptology Barbershop. Seluruh hak cipta dilindungi.
