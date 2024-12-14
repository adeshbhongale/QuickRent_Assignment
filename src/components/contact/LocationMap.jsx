import { motion } from 'framer-motion';

export default function LocationMap() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden shadow-md"
    >
      <div className="w-full h-full flex items-center justify-center bg-gray-200">
        <p className="text-gray-500 text-sm">Map placeholder - Integration with map service required</p>
      </div>
    </motion.div>
  );
}