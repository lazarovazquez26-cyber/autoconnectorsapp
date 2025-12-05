import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CarCard({ car }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className='card'>
      <img src={car.images?.[0] || '/placeholder.jpg'} className='w-full h-40 object-cover rounded' />
      <h3 className='font-bold mt-2'>{car.year} {car.make} {car.model}</h3>
      <p className='text-sm text-gray-300'>{car.miles} miles</p>
      <p className='text-lg font-extrabold mt-1'>${car.price}</p>
      <Link href={`/car/${car.id}`} className='btn block mt-3 text-center'>View & Share</Link>
    </motion.div>
  );
}
