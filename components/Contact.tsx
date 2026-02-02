import React from 'react'
import Link from 'next/link'

export const Contact = () => {
  return (
    <section id="kontak" className="py-32">
      <div className="container mx-auto px-6">
        <div className="glass-card max-w-5xl mx-auto overflow-hidden grid lg:grid-cols-2 shadow-2xl">
          <div className="p-12 bg-gradient-to-r from-primary-gold to-primary-blue bg-clip-text text-transparent">
            <div>
              <h2 className="text-4xl font-black mb-6">Let&apos;s Build <br />Something Great</h2>
              <p className="text-black/70 font-medium mb-12">
                Open for collaborations, freelance opportunities, or just a coffee chat.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                    <i className="ri-mail-line text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold opacity-50">Email</p>
                    <p className="font-bold">sendy.lazada@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                    <i className="ri-map-pin-line text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold opacity-50">Location</p>
                    <p className="font-bold">Banten, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {["linkedin", "github", "instagram", "twitter"].map(social => (
                <Link key={social} href="#" className="w-10 h-10 bg-black/10 hover:bg-black/20 rounded-lg flex items-center justify-center transition-colors">
                  <i className={`ri-${social}-line text-xl`} />
                </Link>
              ))}
            </div>
          </div>

          <form className="p-12 space-y-6 bg-gradient-to-r from-primary-gold to-primary-blue bg-clip-text text-transparent" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-gold transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                
                <label className="text-xs font-bold uppercase text-gray-400">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-gold transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-400">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-gold transition-colors resize-none" placeholder="How can I help you?" />
            </div>
            <button className="w-full py-4 bg-primary-gold hover:bg-primary-gold-light bg-gradient-to-r from-primary-gold to-primary-blue bg-clip-text text-transparent font-bold rounded-xl hover:shadow-lg hover:shadow-primary-blue/50 transition-all duration-300 border-white/10 border">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
