import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import LocationMap from './LocationMap';

export default function Contact() {
  return (
    <div id="contact" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Have questions about our services? We're here to help.
          </p>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
            <div className="space-y-8">
              <ContactForm />
            </div>
            <div className="space-y-8">
              <ContactInfo />
              <LocationMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}