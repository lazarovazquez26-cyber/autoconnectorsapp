'use client';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => setUser(u));
    return unsubscribe;
  }, []);
  return (
    <motion.nav initial={{ y:-30 }} animate={{ y:0 }} className='w-full py-4 border-b border-white/10'>
      <div className='container flex justify-between items-center'>
        <Link href='/' className='font-bold text-xl'>AutoConnectors</Link>
        <div className='flex gap-4 items-center'>
          <Link href='/dashboard' className='text-sm'>Dashboard</Link>
          <Link href='/admin' className='text-sm'>Admin</Link>
          {user ? <button onClick={() => signOut(auth)} className='btn'>Logout</button> : <Link href='/login' className='btn'>Login</Link>}
        </div>
      </div>
    </motion.nav>
  );
}
