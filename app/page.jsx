import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className='text-center'>
      <motion.h1 initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} className='text-5xl font-extrabold'>
        Auto <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300'>Connectors</span>
      </motion.h1>
      <p className='mt-4 text-gray-300'>Sell cars from home. Earn commissions that grow with you.</p>

      <div className='mt-8 flex justify-center gap-4'>
        <Link href='/signup'><button className='btn'>Get Started</button></Link>
        <Link href='/login'><button className='btn bg-white/10'>Sign in</button></Link>
      </div>

      <section className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='card'>
          <h3 className='font-bold text-lg'>Post Inventory</h3>
          <p className='mt-2 text-sm text-gray-300'>Admin posts cars with photos and details.</p>
        </div>
        <div className='card'>
          <h3 className='font-bold text-lg'>Share Referral Links</h3>
          <p className='mt-2 text-sm text-gray-300'>Connectors share links and submit leads.</p>
        </div>
        <div className='card'>
          <h3 className='font-bold text-lg'>Earn Commissions</h3>
          <p className='mt-2 text-sm text-gray-300'>Commissions grow as you hit sales goals.</p>
        </div>
      </section>
    </div>
  );
}
