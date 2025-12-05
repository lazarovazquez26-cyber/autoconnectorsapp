export default function ApplyPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 py-10 text-gray-100">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
        <h1 className="text-2xl font-semibold text-white">
          Apply to become a Connector
        </h1>
        <p className="mt-2 text-sm text-gray-300">
          Tell us a little about yourself and how you plan to find buyers. We’ll
          review your application and get back to you.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="text-xs text-gray-300">Full name</label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
              placeholder="First and last name"
            />
          </div>

          <div>
            <label className="text-xs text-gray-300">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-xs text-gray-300">Phone</label>
            <input
              type="tel"
              className="mt-1 w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label className="text-xs text-gray-300">
              How will you find buyers?
            </label>
            <textarea
              rows={3}
              className="mt-1 w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
              placeholder="Social media, Marketplace, personal network, etc."
            />
          </div>

          <button
            type="button"
            className="mt-2 w-full rounded-lg bg-blue-500 py-2 text-sm font-semibold
                       text-white hover:bg-blue-400 active:bg-blue-600 transition"
          >
            Submit (coming soon)
          </button>
        </form>
      </div>
    </main>
  );
}