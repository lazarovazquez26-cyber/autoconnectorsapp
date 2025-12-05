'use client';
import { useEffect, useState } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import CarCard from '@/components/CarCard';

export default function Dashboard() {
  const [cars, setCars] = useState([]);

  useEffect(()=> {
    const load = async()=> {
      const snap = await getDocs(collection(db, 'cars'));
      setCars(snap.docs.map(d=>({id:d.id, ...d.data()})));
    };
    load();
  },[]);

  return (
    <div>
      <h1 className='text-3xl font-bold mb-6'>Available Cars</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {cars.map(c=> <CarCard car={c} key={c.id} />)}
      </div>
    </div>
  );
}
