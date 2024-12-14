import { motion } from 'framer-motion';

export default function DeviceCard({ device, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-lg overflow-hidden shadow-lg bg-white"
    >
      <div className="relative h-48">
        <img
          className="w-full h-full object-cover"
          src={device.image}
          alt={device.name}
        />
        {device.isNew && (
          <span className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            New
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">{device.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{device.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-primary-600 font-medium">
            From ${device.pricePerDay}/day
          </span>
          <a
            href="#rent"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-primary-50 hover:bg-primary-100"
          >
            Rent Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}