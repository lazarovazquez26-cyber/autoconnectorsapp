'use client';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useParams, useSearchParams } from 'next/navigation';

export default function LeadForm() {
  const { id } = useParams();
  const search = useSearchParams();
  const ref = search.get('ref');

  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');

  const submit = async()=> {
    await addDoc(collection(db, 'leads'), {
      carId: id,
      connectorId: ref,
      clientName: name,
      clientPhone: phone,
      status: 'new',
      createdAt: Date.now()
    });
    alert('Thanks — we received your request!');
  };

  return (
    <div className='max-w-md mx-auto bg-white/5 p-6 rounded-xl'>
      <h2 className='text-2xl font-bold mb-4'>Interested? Leave your info</h2>
      <input className='input w-full' placeholder='Your name' onChange={e=>setName(e.target.value)} />
      <input className='input w-full mt-2' placeholder='Phone' onChange={e=>setPhone(e.target.value)} />
      <button className='btn w-full mt-4' onClick={submit}>Submit</button>
    </div>
  );
}
