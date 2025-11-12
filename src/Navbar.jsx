import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#reels', label: 'Reels' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 mb-4 rounded-2xl border-2 border-black bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="text-xl md:text-2xl font-black tracking-tight">FLAMES STUDIO</a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="hover:underline underline-offset-4">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-full border-2 border-black px-4 py-1.5 bg-black text-white hover:bg-white hover:text-black transition-colors">
                Book Now
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md border-2 border-black p-2">
              <span className="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6.75a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 6a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t-2 border-black px-4 py-4">
              <div className="flex flex-col gap-3 text-base font-semibold">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full border-2 border-black px-4 py-2 bg-black text-white">
                  Book Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
