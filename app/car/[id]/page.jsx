'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';

export default function CarPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [refLink, setRefLink] = useState('');

  useEffect(()=> {
    const load = async()=> {
      const snap = await getDoc(doc(db, 'cars', id));
      if (snap.exists()) setCar(snap.data());
    };
    load();
  }, [id]);

  const gen = ()=> {
    const uid = auth.currentUser?.uid;
    setRefLink(`${process.env.NEXT_PUBLIC_URL}/lead/${id}?ref=${uid}`);
  };

  if(!car) return <p>Loading...</p>;

  return (
    <div className='max-w-3xl mx-auto'>
      <img src={car.images?.[0] || '/placeholder.jpg'} className='w-full h-64 object-cover rounded' />
      <h1 className='text-3xl font-bold mt-4'>{car.year} {car.make} {car.model}</h1>
      <p className='text-gray-300 mt-2'>{car.description}</p>

      <div className='mt-6'>
        <button className='btn' onClick={gen}>Generate Referral Link</button>
        {refLink && <div className='mt-3 bg-white/5 p-3 rounded'><code className='text-sm'>{refLink}</code></div>}
      </div>
    </div>
  );
}
