// app/page.jsx
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #0f172a 0, #020617 55%, #000 100%)",
      color: "#e5e7eb",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
      padding: "40px 20px"
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
          Auto <span style={{ color: "#007bff" }}>Connectors</span>
        </h1>
        <p style={{ maxWidth: "520px", color: "#9ca3af", marginBottom: "24px" }}>
          We post the cars. You bring the buyers. When your client buys, you earn a commission.
          Hit goals and your commission per car increases over time.
        </p>

        <a
          href="#how"
          style={{
            display: "inline-block",
            padding: "10px 18px",
            borderRadius: "999px",
            background: "linear-gradient(90deg,#007bff,#38bdf8)",
            color: "#020617",
            fontWeight: 600,
            textDecoration: "none",
            marginBottom: "36px"
          }}
        >
          How it works
        </a>

        <section id="how" style={{ marginTop: "10px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>How it works</h2>
          <ol style={{ paddingLeft: "18px", lineHeight: 1.6, color: "#d1d5db" }}>
            <li>Apply to become a Connector and get approved.</li>
            <li>We send you cars to post from your phone (social, Marketplace, etc.).</li>
            <li>You send serious buyers our way. If they purchase, you get paid.</li>
          </ol>
        </section>

        <section style={{ marginTop: "32px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "12px" }}>Example car</h2>
          <div style={{
            borderRadius: "14px",
            padding: "16px",
            background: "rgba(15,23,42,0.9)",
            border: "1px solid rgba(148,163,184,0.25)"
          }}>
            <h3 style={{ margin: 0 }}>2020 Honda Civic</h3>
            <p style={{ margin: "4px 0", color: "#9ca3af" }}>100,897 miles · Clean title</p>
            <p style={{ margin: "4px 0", color: "#93c5fd", fontWeight: 600 }}>$19,995</p>
            <p style={{ margin: "8px 0 0", fontSize: "14px", color: "#9ca3af" }}>
              You could earn <strong>$400–$600</strong> on a deal like this depending on your tier.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}