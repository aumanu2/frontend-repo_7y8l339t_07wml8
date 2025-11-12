function Services() {
  const services = [
    { title: 'Automobile Photography', desc: 'Launch campaigns, track coverage, lifestyle sets, press kits.' },
    { title: 'Architecture Photography', desc: 'Exteriors, interiors, editorial and minimalist sets.' },
    { title: 'Vertical Reels', desc: 'Social-first cuts, 9:16, high-energy grades and motion.' },
    { title: 'Full Production', desc: 'Pre-pro to delivery: crew, permits, gear, location and post.' },
  ]

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-black mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border-2 border-black p-6 bg-white">
              <div className="text-xl md:text-2xl font-black">{s.title}</div>
              <p className="mt-2 text-sm md:text-base font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
