// components/Navbar.jsx

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3
                      backdrop-blur-md bg-black/30 border-b border-white/10">
        
        {/* Logo */}
        <a href="/" className="text-lg font-semibold tracking-tight">
          <span className="text-white">Auto</span>
          <span className="text-blue-400"> Connectors</span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-200 md:flex">
          <a href="/how-it-works" className="hover:text-white transition">
            How it works
          </a>
          <a href="/dashboard" className="hover:text-white transition">
            Dashboard
          </a>
          <a href="/login" className="hover:text-white transition">
            Login
          </a>
        </nav>

        {/* CTA */}
        <a
          href="/apply"
          className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold
                     text-white shadow-lg shadow-blue-500/40 hover:bg-blue-400
                     active:bg-blue-600 transition"
        >
          Become a Connector
        </a>
      </div>
    </header>
  );
}