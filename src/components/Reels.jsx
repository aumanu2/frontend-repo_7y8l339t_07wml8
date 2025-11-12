function Reels() {
  const reels = [
    { id: 1, title: 'Auto Ad — High Octane', url: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
    { id: 2, title: 'Studio Reel — Architecture', url: 'https://www.youtube.com/embed/aqz-KE-bpKQ' },
  ]

  return (
    <section id="reels" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-black mb-8">Reels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reels.map((r) => (
            <div key={r.id} className="rounded-2xl border-2 border-black overflow-hidden bg-white">
              <div className="aspect-video w-full">
                <iframe className="w-full h-full" src={r.url} title={r.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="border-t-2 border-black px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider">Featured</span>
                <span className="text-sm font-semibold">{r.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reels
