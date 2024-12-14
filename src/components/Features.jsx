import { HiOutlineClock, HiOutlineShieldCheck, HiOutlineTruck } from 'react-icons/hi';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Quick Delivery',
    description: 'Get your rented devices delivered to your doorstep within 24 hours.',
    icon: HiOutlineTruck,
  },
  {
    name: 'Flexible Duration',
    description: 'Rent for a day, week, or month. Extend or return anytime.',
    icon: HiOutlineClock,
  },
  {
    name: 'Damage Protection',
    description: 'All rentals include basic damage protection for peace of mind.',
    icon: HiOutlineShieldCheck,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose QuickRent?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience hassle-free gadget rentals with our premium service features.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}