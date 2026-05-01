function AboutPage() {
  return (
    <div style={styles.wrapper}>

      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>⚡ About Voltex</h1>
        <p style={styles.heroSub}>Powering your world with next-gen technology since 2015</p>
      </div>

      {/* Our Story */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>🚀 Our Story</h2>
        <p style={styles.text}>
          Voltex was founded in 2015 in Auckland, New Zealand, with a simple mission —
          to make premium technology accessible to everyone. What started as a small
          online store has grown into one of New Zealand's most trusted tech retailers,
          serving over 500,000 happy customers across the country.
        </p>
        <p style={styles.text}>
          We partner directly with the world's leading brands including Apple, Dell,
          Lenovo, ASUS, HP, Acer and Samsung to bring you the latest technology at
          the best prices, backed by exceptional customer service.
        </p>
      </div>

      {/* Stats Row */}
      <div style={styles.statsRow}>
        <div style={styles.statCard}>
          <span style={styles.statNum}>500K+</span>
          <span style={styles.statLabel}>Happy Customers</span>
        </div>
        <div style={styles.statCard}>
          <span style={styles.statNum}>10+</span>
          <span style={styles.statLabel}>Years in Business</span>
        </div>
        <div style={styles.statCard}>
          <span style={styles.statNum}>50+</span>
          <span style={styles.statLabel}>Brand Partners</span>
        </div>
        <div style={styles.statCard}>
          <span style={styles.statNum}>4.8★</span>
          <span style={styles.statLabel}>Average Rating</span>
        </div>
      </div>

      {/* Contact Info */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>📍 Contact Us</h2>
        <div style={styles.contactGrid}>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>🏢</span>
            <div>
              <p style={styles.contactLabel}>Address</p>
              <p style={styles.contactValue}>55 Wellesley Street East,<br />Auckland CBD, Auckland 1010,<br />New Zealand</p>
            </div>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>📞</span>
            <div>
              <p style={styles.contactLabel}>Phone</p>
              <p style={styles.contactValue}>+64 9 123 4567</p>
            </div>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>📧</span>
            <div>
              <p style={styles.contactLabel}>Email</p>
              <p style={styles.contactValue}>support@voltex.co.nz</p>
            </div>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>🌐</span>
            <div>
              <p style={styles.contactLabel}>Website</p>
              <p style={styles.contactValue}>www.voltex.co.nz</p>
            </div>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>🕐</span>
            <div>
              <p style={styles.contactLabel}>Business Hours</p>
              <p style={styles.contactValue}>Mon - Fri: 9am - 6pm<br />Sat: 10am - 4pm<br />Sun: Closed</p>
            </div>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>🚚</span>
            <div>
              <p style={styles.contactLabel}>Shipping</p>
              <p style={styles.contactValue}>Free shipping NZ-wide<br />on orders over $100</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>💡 Our Values</h2>
        <div style={styles.valuesGrid}>
          <div style={styles.valueItem}>
            <span style={styles.valueIcon}>✅</span>
            <h3 style={styles.valueTitle}>Quality First</h3>
            <p style={styles.valueText}>We only stock products we believe in, from brands that share our commitment to excellence.</p>
          </div>
          <div style={styles.valueItem}>
            <span style={styles.valueIcon}>🤝</span>
            <h3 style={styles.valueTitle}>Customer First</h3>
            <p style={styles.valueText}>Our team is always here to help. From pre-sale advice to after-sale support, we've got you covered.</p>
          </div>
          <div style={styles.valueItem}>
            <span style={styles.valueIcon}>🌱</span>
            <h3 style={styles.valueTitle}>Sustainability</h3>
            <p style={styles.valueText}>We're committed to reducing our carbon footprint with eco-friendly packaging and carbon-neutral shipping.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

const styles = {
wrapper: { maxWidth: "1100px", margin: "0 auto", padding: "0 24px 60px", minHeight: "100vh" },
  hero: { textAlign: "center", padding: "60px 0 48px" },
  heroTitle: { fontSize: "42px", fontWeight: "800", color: "#0f0f0f", margin: "0 0 12px" },
  heroSub: { fontSize: "18px", color: "#888", margin: 0 },
  card: { backgroundColor: "#fff", borderRadius: "16px", padding: "32px", marginBottom: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" },
  cardTitle: { fontSize: "22px", fontWeight: "700", color: "#0f0f0f", margin: "0 0 20px" },
  text: { color: "#555", lineHeight: "1.8", fontSize: "15px", margin: "0 0 12px" },
  statsRow: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" },
  statCard: { backgroundColor: "#0f0f0f", borderRadius: "16px", padding: "24px", textAlign: "center", display: "flex", flexDirection: "column", gap: "8px" },
  statNum: { fontSize: "32px", fontWeight: "800", color: "#e63946" },
  statLabel: { fontSize: "13px", color: "#aaa" },
  contactGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" },
  contactItem: { display: "flex", alignItems: "flex-start", gap: "16px" },
  contactIcon: { fontSize: "28px" },
  contactLabel: { margin: "0 0 4px", fontSize: "12px", color: "#aaa", textTransform: "uppercase", letterSpacing: "1px" },
  contactValue: { margin: 0, fontSize: "15px", color: "#333", lineHeight: "1.6" },
  valuesGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" },
  valueItem: { textAlign: "center", padding: "16px" },
  valueIcon: { fontSize: "36px", display: "block", marginBottom: "12px" },
  valueTitle: { fontSize: "16px", fontWeight: "700", color: "#0f0f0f", margin: "0 0 8px" },
  valueText: { fontSize: "14px", color: "#666", lineHeight: "1.6", margin: 0 },
};

export default AboutPage;