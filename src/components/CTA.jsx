export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-200/60 bg-white/80 backdrop-blur p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">Ready to strengthen your defenses?</h3>
            <p className="mt-2 text-gray-600">Get a personalized demo and security assessment from our experts.</p>
          </div>
          <form className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input type="email" required placeholder="Work email" className="flex-1 min-w-[220px] rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="px-5 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-black">Request Demo</button>
          </form>
        </div>
      </div>
    </section>
  )
}
