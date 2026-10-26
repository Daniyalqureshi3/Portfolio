import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import MagicRings from './components/MagicRings'
import Navbar from './components/Navbar'
import Technology from './components/Technology'

function App() {
  return (
    <>
      <div className="magic-background">
        <MagicRings
          color="#A855F7"
          colorTwo="#6366F1"
          motion="pulse"
          ringCount={6}
          speed={1}
          lineThickness={2}
          glow={1}
          hoverScale={1.2}
          clickBurst
          baseRadius={0.35}
          radiusStep={0.1}
          expansion={0.1}
          taper={1.5}
          rotation={0}
          spin={0}
          tilt={0}
          dispersion={0}
          grain={0}
          opacity={1}
          followMouse={false}
          mouseInfluence={0.2}
          hoverIntensity={1}
          parallax={0.05}
          intro
        />
      </div>
<Navbar/>
      <main className="portfolio-content">
        <Hero/>
        <About/>
        <Technology/>
      </main>

    </>
  )
}

export default App
