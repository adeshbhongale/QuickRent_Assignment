import { motion } from 'framer-motion';

const devices = [
  {
    name: 'Latest Smartphones',
    description: 'iPhone 14 Pro, Samsung S23 Ultra, and more',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Professional Cameras',
    description: 'Sony A7III, Canon R5, and more',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Premium Laptops',
    description: 'MacBook Pro, Dell XPS, and more',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
];

export default function Devices() {
  return (
    <div id="devices" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Available Devices
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose from our wide selection of premium gadgets
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {devices.map((device, index) => (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    className="w-full h-full object-cover"
                    src={device.image}
                    alt={device.name}
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-medium text-gray-900">{device.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{device.description}</p>
                  <div className="mt-4">
                    <a
                      href="#rent"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-primary-50 hover:bg-primary-100"
                    >
                      View Options
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}