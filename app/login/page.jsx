export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 py-10 text-gray-100">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
        <h1 className="text-2xl font-semibold text-white">Connector Login</h1>
        <p className="mt-2 text-sm text-gray-300">
          Log in to access your leads, deals, and commission tracking.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="text-xs text-gray-300">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-xs text-gray-300">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="button"
            className="mt-2 w-full rounded-lg bg-blue-500 py-2 text-sm font-semibold
                       text-white hover:bg-blue-400 active:bg-blue-600 transition"
          >
            Log in (coming soon)
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-400">
          Don't have access yet?{" "}
          <a href="/apply" className="text-blue-400 hover:text-blue-300">
            Apply to become a Connector.
          </a>
        </p>
      </div>
    </main>
  );
}