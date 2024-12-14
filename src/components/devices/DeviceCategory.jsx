import { motion } from 'framer-motion';
import DeviceCard from './DeviceCard';

export default function DeviceCategory({ category, devices }) {
  return (
    <div className="mt-12 first:mt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{category}</h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {devices.map((device, index) => (
            <DeviceCard key={device.id} device={device} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}