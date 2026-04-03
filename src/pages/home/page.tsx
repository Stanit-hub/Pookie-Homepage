import Navbar from './components/Navbar';
import HeroNew from './components/HeroNew';
import BrandSection from './components/BrandSection';
import ValueSection from './components/ValueSection';
import PartnershipSection from './components/PartnershipSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="hero">
        <HeroNew />
      </div>
      <BrandSection />
      <ValueSection />
      <PartnershipSection />
      <Footer />
    </div>
  );
}
