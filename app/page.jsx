// app/page.jsx

export default function Home() {
  return (
    <>
      {/* HERO SECTION WITH VIDEO */}
      <main className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Background video */}
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

        {/* Hero content */}
        <div className="relative z-20 mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center px-4 pb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-blue-300/80">
            Miami • Remote • Car Hustlers
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl">
            Auto <span className="text-blue-400">Connectors</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm text-gray-200 sm:text-base">
            We post the cars. You bring the buyers. When your client buys, you
            earn a commission. Hit goals and your commission per car increases
            over time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/how-it-works"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold
                         text-white shadow-lg shadow-blue-500/40 hover:bg-blue-400
                         active:bg-blue-600 transition"
            >
              How it works
            </a>

            <a
              href="/apply"
              className="text-sm font-medium text-gray-200 hover:text-white underline-offset-4 hover:underline"
            >
              Become a Connector →
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-xs text-gray-300/90">
            <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
              💸 Commission per sale
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
              🏠 Work from your phone
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
              📈 Level up as you close
            </span>
          </div>
        </div>
      </main>

      {/* FEATURE SECTION */}
      <section className="bg-[#020617] px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
            Turn your network into extra income.
          </h2>
          <p className="mt-3 text-center text-sm text-gray-300 sm:text-base">
            Auto Connectors lets you sell real cars from trusted dealers without
            leaving home. We handle inventory, paperwork, and financing. You
            just bring serious buyers.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
              <h3 className="text-sm font-semibold text-white">
                01. No dealership desk
              </h3>
              <p className="mt-2 text-xs text-gray-300 sm:text-sm">
                Work from your phone, wherever you are. We send you cars with
                photos, details, and pricing ready to share.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-500/40 bg-blue-500/10 p-5 shadow-lg shadow-blue-500/20">
              <h3 className="text-sm font-semibold text-white">
                02. Commissions that grow
              </h3>
              <p className="mt-2 text-xs text-gray-300 sm:text-sm">
                Start with a solid base per sale. Hit targets and unlock higher
                payouts on every car you move.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
              <h3 className="text-sm font-semibold text-white">
                03. Built for closers
              </h3>
              <p className="mt-2 text-xs text-gray-300 sm:text-sm">
                We handle approvals, contracts, and delivery. You focus on
                messaging, follow-ups, and closing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}