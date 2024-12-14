import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Devices from './components/devices/Devices';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Devices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;