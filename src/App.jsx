import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Solutions />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
