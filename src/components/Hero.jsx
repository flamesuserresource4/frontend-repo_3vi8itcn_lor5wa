import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 text-blue-700 px-3 py-1 w-fit text-xs font-medium mb-4">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Enterprise Cyber Defense
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            Secure your business with confidence
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-prose">
            Modern threat detection, real-time monitoring, and intelligent response designed for growing teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-black">Request Demo</a>
            <a href="#solutions" className="px-5 py-3 rounded-md border border-gray-300 text-gray-800 font-medium hover:bg-gray-50">Explore Platform</a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-semibold text-gray-900">99.99%</div>
              <div className="text-xs text-gray-500">Uptime SLA</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-gray-900">24/7</div>
              <div className="text-xs text-gray-500">SOC Monitoring</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-gray-900">GDPR</div>
              <div className="text-xs text-gray-500">& ISO 27001</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-gray-900">1M+</div>
              <div className="text-xs text-gray-500">Threats Blocked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
