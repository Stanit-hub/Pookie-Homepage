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
      <h1 className="sr-only">Pookie, 팬덤을 위한 NFC 포토카드 솔루션</h1>
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
