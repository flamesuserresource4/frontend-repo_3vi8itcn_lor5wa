import { Shield } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-blue-600 text-white">
            <Shield className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-900">Sentinel Secure</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#solutions" className="hover:text-gray-900">Solutions</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            Sign in
          </button>
          <button className="inline-flex px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-black">
            Get a Demo
          </button>
        </div>
      </div>
    </header>
  )
}
