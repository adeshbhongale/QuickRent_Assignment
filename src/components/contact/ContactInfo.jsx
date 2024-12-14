import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { motion } from 'framer-motion';

const contactDetails = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'contact@quickrent.com',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    icon: HiLocationMarker,
    label: 'Address',
    value: '123 Tech Street, Silicon Valley, CA 94025',
  },
];

export default function ContactInfo() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 w-full"
    >
      <h3 className="text-lg font-medium text-gray-900 mb-4">Get in Touch</h3>
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={detail.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start space-x-3"
          >
            <detail.icon className="h-6 w-6 text-primary-600 mt-1" />
            <div>
              <h4 className="text-sm font-medium text-gray-900">{detail.label}</h4>
              <p className="text-sm text-gray-600">{detail.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}