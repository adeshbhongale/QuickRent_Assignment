import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPaperAirplane } from 'react-icons/hi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (name) => {
    setFocused(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleBlur = (name) => {
    setFocused(prev => ({
      ...prev,
      [name]: false
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="w-full bg-white rounded-xl shadow-lg p-8 border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label 
            htmlFor="name" 
            className={`block text-sm font-medium transition-colors duration-200 ${
              focused.name ? 'text-primary-600' : 'text-gray-700'
            }`}
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus('name')}
            onBlur={() => handleBlur('name')}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm 
                     focus:border-primary-500 focus:ring focus:ring-primary-200 
                     focus:ring-opacity-50 transition-all duration-200"
            placeholder="Your full name"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label 
            htmlFor="email" 
            className={`block text-sm font-medium transition-colors duration-200 ${
              focused.email ? 'text-primary-600' : 'text-gray-700'
            }`}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm 
                     focus:border-primary-500 focus:ring focus:ring-primary-200 
                     focus:ring-opacity-50 transition-all duration-200"
            placeholder="your.email@example.com"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label 
            htmlFor="subject" 
            className={`block text-sm font-medium transition-colors duration-200 ${
              focused.subject ? 'text-primary-600' : 'text-gray-700'
            }`}
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            onFocus={() => handleFocus('subject')}
            onBlur={() => handleBlur('subject')}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm 
                     focus:border-primary-500 focus:ring focus:ring-primary-200 
                     focus:ring-opacity-50 transition-all duration-200"
            placeholder="What's this about?"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label 
            htmlFor="message" 
            className={`block text-sm font-medium transition-colors duration-200 ${
              focused.message ? 'text-primary-600' : 'text-gray-700'
            }`}
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            onFocus={() => handleFocus('message')}
            onBlur={() => handleBlur('message')}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm 
                     focus:border-primary-500 focus:ring focus:ring-primary-200 
                     focus:ring-opacity-50 transition-all duration-200 resize-none"
            placeholder="Tell us how we can help you..."
          />
        </motion.div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex justify-center items-center gap-2 py-3 px-4 
                   border border-transparent rounded-lg shadow-sm text-sm font-medium 
                   text-white bg-primary-600 hover:bg-primary-700 
                   focus:outline-none focus:ring-2 focus:ring-offset-2 
                   focus:ring-primary-500 transition-all duration-200"
        >
          <span>Send Message</span>
          <HiPaperAirplane className="h-4 w-4 rotate-90" />
        </motion.button>
      </div>
    </motion.form>
  );
}