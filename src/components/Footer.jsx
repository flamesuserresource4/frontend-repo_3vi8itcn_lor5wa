export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Sentinel Secure. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-700">Privacy</a>
          <a href="#" className="hover:text-gray-700">Security</a>
          <a href="#" className="hover:text-gray-700">Status</a>
        </div>
      </div>
    </footer>
  )
}
