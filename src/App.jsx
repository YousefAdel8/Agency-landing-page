import "./App.css";
import EggSection from "./components/EggSection/EggSection";
import FooterSection from "./components/FooterSection/FooterSection";
import FourPicturesSection from "./components/FourPicturesSection/FourPicturesSection";
import GraphicSection from "./components/GraphicSection/GraphicSection";
import HeroSection from "./components/HeroSection/HeroSection";
import StandoutSection from "./components/StandoutSection/StandoutSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";

export default function App() {
  return (
    <>
      <main>
        <HeroSection />
        <EggSection />
        <StandoutSection />
        <GraphicSection />
        <TestimonialsSection />
        <FourPicturesSection />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
