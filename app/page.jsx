export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">

      {/* Background video */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark overlay with text */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl font-bold drop-shadow-xl">Auto Connectors</h1>
        <p className="text-lg mt-4 drop-shadow-md">
          Sell cars from home. Bring the buyers. Earn commissions.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow-lg">
          How it Works
        </button>
      </div>

    </main>
  );
}