function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-black p-6 bg-white">
            <h2 className="text-3xl md:text-5xl font-black">About</h2>
            <p className="mt-4 text-base md:text-lg font-medium">
              I’m a photographer and director focused on automobiles and architecture. My style blends brutalist design with high-energy motion — built for ads, launches and campaigns.
            </p>
            <ul className="mt-6 space-y-2 text-sm md:text-base font-semibold">
              <li>• Automotive campaigns</li>
              <li>• Architecture shoots</li>
              <li>• Social-first vertical reels</li>
              <li>• End-to-end production</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-black p-6 bg-white">
              <div className="text-xs font-black uppercase tracking-wider">Clients</div>
              <div className="mt-2 text-2xl font-black">Porsche, Audi, Nike, Zaha Studio</div>
            </div>
            <div className="rounded-2xl border-2 border-black p-6 bg-white">
              <div className="text-xs font-black uppercase tracking-wider">Awards</div>
              <div className="mt-2 text-2xl font-black">Cannes Lions, AICP, One Show</div>
            </div>
            <div className="rounded-2xl border-2 border-black p-6 bg-white">
              <div className="text-xs font-black uppercase tracking-wider">Based</div>
              <div className="mt-2 text-2xl font-black">LA • Dubai • Remote</div>
            </div>
            <div className="rounded-2xl border-2 border-black p-6 bg-white">
              <div className="text-xs font-black uppercase tracking-wider">Availability</div>
              <div className="mt-2 text-2xl font-black">Q1-Q4 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
