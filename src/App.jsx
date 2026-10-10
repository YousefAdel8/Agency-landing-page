import "./App.css";
import EggSection from "./Components/EggSection/EggSection";
import FooterSection from "./Components/FooterSection/FooterSection";
import FourPicturesSection from "./Components/FourPicturesSection/FourPicturesSection";
import GraphicSection from "./Components/GraphicSection/GraphicSection";
import HeroSection from "./Components/HeroSection/HeroSection";
import StandoutSection from "./Components/StandoutSection/StandoutSection";
import TestimonialsSection from "./Components/TestimonialsSection/TestimonialsSection";

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
