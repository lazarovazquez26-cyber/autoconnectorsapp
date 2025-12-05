'use client';
import { useState } from 'react';
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Signup() {
  const router = useRouter();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const signup = async () => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', user.user.uid), {
      name, email, sales:0, leads:0, tier:'Starter', createdAt: Date.now()
    });
    router.push('/dashboard');
  };

  return (
    <motion.div initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} className='max-w-md mx-auto bg-white/5 p-6 rounded-xl'>
      <h2 className='text-2xl font-bold mb-4'>Create your account</h2>
      <input className='input w-full' placeholder='Full name' onChange={e=>setName(e.target.value)} />
      <input className='input w-full mt-2' placeholder='Email' onChange={e=>setEmail(e.target.value)} />
      <input className='input w-full mt-2' type='password' placeholder='Password' onChange={e=>setPassword(e.target.value)} />
      <button className='btn w-full mt-4' onClick={signup}>Create Account</button>
    </motion.div>
  );
}
