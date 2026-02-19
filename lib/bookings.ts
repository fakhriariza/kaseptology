import { db } from './firebase';
import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';

export interface Booking {
  id?: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Timestamp;
}

const BOOKINGS_COLLECTION = 'bookings';

export async function createBooking(booking: Omit<Booking, 'id' | 'status' | 'createdAt'>): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, BOOKINGS_COLLECTION), {
      ...booking,
      status: 'pending',
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw new Error('Gagal membuat booking. Silakan coba lagi.');
  }
}

export async function getBookingsForDate(date: string): Promise<Booking[]> {
  try {
    const q = query(collection(db, BOOKINGS_COLLECTION), where('date', '==', date), where('status', '!=', 'cancelled'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Booking));
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return [];
  }
}

export async function getAvailableSlots(date: string): Promise<string[]> {
  const allSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00',
  ];
  try {
    const bookings = await getBookingsForDate(date);
    const bookedSlots = bookings.map((b) => b.time);
    return allSlots.filter((slot) => !bookedSlots.includes(slot));
  } catch {
    return allSlots;
  }
}

export const services = [
  {
    id: 'haircut',
    name: 'Potong Rambut Premium',
    description: 'Potongan presisi dengan konsultasi, cuci, dan styling',
    price: 'Rp 120.000',
    duration: '45 menit',
    icon: 'scissors',
  },
  {
    id: 'shave',
    name: 'Cukur Klasik',
    description: 'Cukur tradisional dengan handuk panas dan produk premium',
    price: 'Rp 80.000',
    duration: '30 menit',
    icon: 'knife',
  },
  {
    id: 'haircut-shave',
    name: 'Potong & Cukur',
    description: 'Paket lengkap — potongan presisi ditambah cukur klasik',
    price: 'Rp 180.000',
    duration: '75 menit',
    icon: 'crown',
  },
  {
    id: 'beard-trim',
    name: 'Trim Jenggot',
    description: 'Pembentukan, trim, dan perawatan jenggot oleh ahli',
    price: 'Rp 70.000',
    duration: '30 menit',
    icon: 'brush',
  },
  {
    id: 'hair-color',
    name: 'Pewarnaan Rambut',
    description: 'Pewarnaan profesional dengan cat premium dan treatment',
    price: 'Rp 250.000',
    duration: '90 menit',
    icon: 'palette',
  },
  {
    id: 'kids',
    name: 'Potong Rambut Anak',
    description: 'Potongan lembut untuk anak dalam suasana nyaman',
    price: 'Rp 80.000',
    duration: '30 menit',
    icon: 'star',
  },
];
