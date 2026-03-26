import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MuammoSection } from './components/MuammoSection';
import { YechimSection } from './components/YechimSection';
import { NegaBizSection } from './components/NegaBizSection';
import { TexnologiyaSection } from './components/TexnologiyaSection';
import { RejaSection } from './components/RejaSection';
import { DemoSection } from './components/DemoSection';
import { JamoaSection } from './components/JamoaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        fontFamily: 'var(--font-body)',
        background: 'var(--bg-primary)'
      }}
    >
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <MuammoSection />
        <YechimSection />
        <NegaBizSection />
        <TexnologiyaSection />
        <RejaSection />
        <DemoSection />
        <JamoaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
