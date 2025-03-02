import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-md rounded p-4"
    >
      <Image src={image} alt={title} width={500} height={300} className="mb-4 rounded" />
      <h2 className="text-xl md:text-2xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
}