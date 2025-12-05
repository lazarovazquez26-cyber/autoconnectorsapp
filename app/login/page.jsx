'use client';
import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Login() {
  const router = useRouter();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const login = async()=> {
    await signInWithEmailAndPassword(auth, email, password);
    router.push('/dashboard');
  };

  return (
    <motion.div initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} className='max-w-md mx-auto bg-white/5 p-6 rounded-xl'>
      <h2 className='text-2xl font-bold mb-4'>Welcome back</h2>
      <input className='input w-full' placeholder='Email' onChange={e=>setEmail(e.target.value)} />
      <input className='input w-full mt-2' type='password' placeholder='Password' onChange={e=>setPassword(e.target.value)} />
      <button className='btn w-full mt-4' onClick={login}>Sign in</button>
    </motion.div>
  );
}
