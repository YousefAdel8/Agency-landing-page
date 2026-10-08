import './App.css'
import EggSection from './Components/EggSection/EggSection'
import GraphicSection from './Components/GraphicSection/GraphicSection'
import Herosection from './Components/HeroSection/Herosection'
import StandoutSection from './Components/StandoutSection/StandoutSection'
import TestimonialsSection from './Components/TestimonialsSection/TestimonialsSection'

export default function App() {

  return (
    <>
      <Herosection/>
      <EggSection/>
      <StandoutSection/>
      <GraphicSection/>
      <TestimonialsSection/>
    </>
  )
}