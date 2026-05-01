import ProductCard from "./ProductCard";
import products from "../data/product";

function HomePage() {
  const laptops = products.filter(p => p.category === "Laptop");
  const watches = products.filter(p => p.category === "Smartwatch");
  const headphones = products.filter(p => p.category === "Wireless Headphones");

  return (
    <div style={styles.wrapper}>

      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Next-Gen Tech,<br />Delivered to You ⚡</h1>
        <p style={styles.heroSub}>Premium laptops, headphones & smartwatches</p>
      </div>

      {/* Headphones */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🎧 Headphones</h2>
        <div style={styles.grid}>
          {headphones.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Laptops */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>💻 Laptops</h2>
        <div style={styles.grid}>
          {laptops.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Smartwatches */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>⌚ Smartwatches</h2>
        <div style={styles.grid}>
          {watches.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

    </div>
  );
}

const styles = {
  wrapper: { maxWidth: "1200px", margin: "0 auto", padding: "0 24px 60px" },
  hero: {
    textAlign: "center", padding: "80px 0 60px",
    borderBottom: "1px solid #eee", marginBottom: "48px",
  },
  heroTitle: { fontSize: "48px", fontWeight: "800", color: "#0f0f0f", margin: "0 0 16px", lineHeight: 1.2 },
  heroSub: { fontSize: "18px", color: "#888", margin: 0 },
  section: { marginBottom: "48px" },
  sectionTitle: { fontSize: "24px", fontWeight: "700", color: "#0f0f0f", marginBottom: "24px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "24px",
  },
};

export default HomePage;