import Navbar from './Navbar'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import Reels from './components/Reels'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <main>
        <WorkGrid />
        <Reels />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="border-t-2 border-black bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm font-semibold">© {new Date().getFullYear()} Flames Studio — All rights reserved</div>
          <div className="flex items-center gap-3 text-sm font-semibold">
            <a href="#work" className="underline underline-offset-4">Work</a>
            <a href="#reels" className="underline underline-offset-4">Reels</a>
            <a href="#about" className="underline underline-offset-4">About</a>
            <a href="#services" className="underline underline-offset-4">Services</a>
            <a href="#contact" className="underline underline-offset-4">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
