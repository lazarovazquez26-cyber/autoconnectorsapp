export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-10 text-gray-100">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Connector Dashboard
        </h1>

        <p className="mt-3 text-sm text-gray-300 sm:text-base">
          This is your hub for tracking buyers, deals, and commissions. Features
          coming soon as we build the platform.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Leads this month
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">—</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Cars sold
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">—</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-wide text-gray-400">
              Commission earned
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">$—</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-sm text-gray-300">
          <p>
            This dashboard will update automatically once we connect your account
            to live inventory, leads, and payouts. Stay tuned — this is just the
            beginning.
          </p>
        </div>
      </div>
    </main>
  );
}