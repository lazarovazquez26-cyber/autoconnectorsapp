export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-10 text-gray-100">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          How Auto Connectors Works
        </h1>
        <p className="mt-3 text-sm text-gray-300 sm:text-base">
          Auto Connectors makes it easy to earn commissions by bringing buyers to
          dealer-ready vehicles — all from your phone.
        </p>

        <ol className="mt-8 space-y-6">
          <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-sm font-semibold text-white sm:text-lg">
              1. Apply to become a Connector
            </h2>
            <p className="mt-2 text-xs text-gray-300 sm:text-sm">
              Fill out a quick application. Once approved, you get access to live
              inventory and your personal connector tools.
            </p>
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-sm font-semibold text-white sm:text-lg">
              2. Receive cars to post
            </h2>
            <p className="mt-2 text-xs text-gray-300 sm:text-sm">
              We send you cars with full descriptions, photos, prices, and talking points.
              You share them however you want — Marketplace, IG, TikTok, DMs, etc.
            </p>
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-sm font-semibold text-white sm:text-lg">
              3. Bring serious buyers
            </h2>
            <p className="mt-2 text-xs text-gray-300 sm:text-sm">
              When someone shows interest, you collect their info and pass it to us.
              We take care of test drives, approvals, and paperwork.
            </p>
          </li>

          <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-sm font-semibold text-white sm:text-lg">
              4. Get paid per deal
            </h2>
            <p className="mt-2 text-xs text-gray-300 sm:text-sm">
              When your buyer purchases, you get paid commission. The more you close,
              the higher your commission tiers become.
            </p>
          </li>
        </ol>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <a
            href="/apply"
            className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold
                       text-white shadow-lg shadow-blue-500/40 hover:bg-blue-400
                       active:bg-blue-600 transition"
          >
            Apply to become a Connector
          </a>

          <p className="text-xs text-gray-400 sm:text-sm">
            No office. No schedule. Just your phone, your hustle, and our inventory.
          </p>
        </div>
      </div>
    </main>
  );
}