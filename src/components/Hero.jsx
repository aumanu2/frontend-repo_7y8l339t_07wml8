import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl items-end px-6 pb-10">
          <div className="w-full">
            <div className="inline-block rounded-2xl border-2 border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider">
              Automotive • Architecture • Ad Films
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95]">
              Brutalist visuals for fast brands
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg font-medium">
              We craft high-energy photography and reels for automobiles, motorsport and bold architectural stories.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center rounded-full border-2 border-black bg-black px-5 py-2.5 text-white font-semibold hover:bg-white hover:text-black transition-colors">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border-2 border-black px-5 py-2.5 font-semibold hover:bg-black hover:text-white transition-colors">
                Book a Shoot
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero
