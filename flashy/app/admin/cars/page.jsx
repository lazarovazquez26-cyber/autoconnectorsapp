'use client';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function AdminCars() {
  const [cars, setCars] = useState([]);
  const [form,setForm]=useState({make:'',model:'',year:'',miles:'',price:'',image:'',description:''});

  useEffect(()=> {
    const load = async()=> {
      const snap = await getDocs(collection(db, 'cars'));
      setCars(snap.docs.map(d=>({id:d.id, ...d.data()})));
    };
    load();
  },[]);

  const add = async()=> {
    await addDoc(collection(db, 'cars'), {...form, images:[form.image], createdAt: Date.now()});
    alert('Car added!');
  };

  return (
    <div>
      <h1 className='text-3xl font-bold mb-4'>Manage Cars</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {cars.map(c=> (
          <div key={c.id} className='card'>
            <img src={c.images?.[0]||'/placeholder.jpg'} className='w-full h-36 object-cover rounded' />
            <h3 className='font-bold mt-2'>{c.year} {c.make} {c.model}</h3>
            <p className='text-gray-300'>${c.price}</p>
          </div>
        ))}
      </div>

      <div className='mt-6 bg-white/5 p-4 rounded'>
        <h2 className='font-bold mb-2'>Add new car</h2>
        {['make','model','year','miles','price','image','description'].map(k=>(
          <input key={k} className='input w-full mt-2' placeholder={k} onChange={e=>setForm({...form,[k]:e.target.value})} />
        ))}
        <button className='btn mt-3' onClick={add}>Add Car</button>
      </div>
    </div>
  );
}
