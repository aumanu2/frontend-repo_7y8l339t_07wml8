import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks — we will get back within 24h.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Try again or email us directly.')
    }
  }

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="rounded-2xl border-2 border-black p-6 bg-white">
          <h2 className="text-3xl md:text-5xl font-black">Contact</h2>
          <p className="mt-2 font-medium">Bookings, campaigns, or just say hi.</p>
          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input name="name" placeholder="Name" className="rounded-xl border-2 border-black px-4 py-3 outline-none" required />
            <input name="email" type="email" placeholder="Email" className="rounded-xl border-2 border-black px-4 py-3 outline-none" required />
            <textarea name="message" placeholder="Tell us about your project" rows="5" className="md:col-span-2 rounded-xl border-2 border-black px-4 py-3 outline-none" required />
            <div className="md:col-span-2 flex items-center justify-between">
              <button className="inline-flex items-center rounded-full border-2 border-black bg-black px-6 py-2.5 text-white font-semibold hover:bg-white hover:text-black transition-colors">Send</button>
              <div className="text-sm font-semibold">{status}</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
