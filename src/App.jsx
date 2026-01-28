import { useEffect, useState } from 'react'
import Booking from './components/Booking'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MapSection from './components/MapSection'
import Services from './components/Services'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="app">
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <Services />
      <Booking />
      <MapSection />
      <Footer />
    </div>
  )
}

export default App
