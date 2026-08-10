import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WhyUs from './components/WhyUs';
import SectionDivider from './components/SectionDivider';
import TableBadge from './components/TableBadge';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FlourParticles from './components/FlourParticles';
import GrainOverlay from './components/GrainOverlay';
import CustomCursor from './components/CustomCursor';
import { getTableNumberFromUrl } from './utils/table';

const tableNumber = getTableNumberFromUrl();

export default function App() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <CustomCursor />
      <GrainOverlay />
      <FlourParticles />
      <div className="page-content">
        <TableBadge tableNumber={tableNumber} />
        <Header />
        <main>
          <Hero onMenuClick={scrollToMenu} />
          <SectionDivider color="#3D2817" />
          <Marquee />
          <WhyUs />
          <SectionDivider color="#F7EFE1" flip />
          <Gallery />
          <Menu />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
