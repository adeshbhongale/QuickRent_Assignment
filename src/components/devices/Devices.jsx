import { motion } from 'framer-motion';
import DeviceCategory from './DeviceCategory';
import { devices } from '../../data/devices';

export default function Devices() {
  return (
    <div id="devices" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Available Devices
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose from our wide selection of premium gadgets
          </p>
        </motion.div>

        {Object.entries(devices).map(([key, { category, items }]) => (
          <DeviceCategory
            key={key}
            category={category}
            devices={items}
          />
        ))}
      </div>
    </div>
  );
}