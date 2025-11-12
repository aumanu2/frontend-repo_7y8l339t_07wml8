function WorkGrid() {
  const items = [
    { id: 1, tag: 'Automobile', title: 'Track Day — Porsche GT3 RS', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, tag: 'Automobile', title: 'Night Run — Nissan GTR', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, tag: 'Architecture', title: 'Concrete Forms — Minimal Villa', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, tag: 'Architecture', title: 'Stark Lines — Museum Exterior', img: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600&auto=format&fit=crop' },
    { id: 5, tag: 'Automobile', title: 'Desert Chase — Rally Prep', img: 'https://images.unsplash.com/photo-1511910849309-0dffb6f8a9d8?q=80&w=1600&auto=format&fit=crop' },
    { id: 6, tag: 'Architecture', title: 'Atrium Light — Concept Office', img: 'https://images.unsplash.com/photo-1501183007986-d0d080b147f9?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section id="work" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-5xl font-black">Selected Work</h2>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full border-2 border-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition-colors">Book</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((item) => (
            <a key={item.id} href="#" className="group relative overflow-hidden rounded-2xl border-2 border-black bg-white">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between border-t-2 border-black px-4 py-3">
                <span className="text-xs font-black uppercase tracking-wider">{item.tag}</span>
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkGrid
