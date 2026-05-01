import { useState } from "react";

function ProductSpecs({ specs, features }) {
  const [openSection, setOpenSection] = useState("specs");
  const { addToCart } = useCart();

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div style={styles.wrapper}>

      {/* Specs Accordion */}
      <div style={styles.accordion}>
        <button
          style={styles.accordionHeader}
          onClick={() => toggle("specs")}
        >
          <span>Technical Specifications</span>
          <span>{openSection === "specs" ? "−" : "+"}</span>
        </button>
        {openSection === "specs" && (
          <div style={styles.accordionBody}>
            {specs.map((spec, index) => (
              <div
                key={index}
                style={{
                  ...styles.specRow,
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                }}
              >
                <span style={styles.specLabel}>{spec.label}</span>
                <span style={styles.specValue}>{spec.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Features Accordion */}
      <div style={styles.accordion}>
        <button
          style={styles.accordionHeader}
          onClick={() => toggle("features")}
        >
          <span>Key Features</span>
          <span>{openSection === "features" ? "−" : "+"}</span>
        </button>
        {openSection === "features" && (
          <div style={styles.accordionBody}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureRow}>
                <span style={styles.checkmark}>✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Shipping Accordion */}
      <div style={styles.accordion}>
        <button
          style={styles.accordionHeader}
          onClick={() => toggle("shipping")}
        >
          <span>Shipping & Returns</span>
          <span>{openSection === "shipping" ? "−" : "+"}</span>
        </button>
        {openSection === "shipping" && (
          <div style={styles.accordionBody}>
            <div style={styles.featureRow}>
              <span style={styles.checkmark}>🚚</span>
              <span>Free shipping on orders over $100</span>
            </div>
            <div style={styles.featureRow}>
              <span style={styles.checkmark}>📦</span>
              <span>Delivered in 3-5 business days</span>
            </div>
            <div style={styles.featureRow}>
              <span style={styles.checkmark}>↩️</span>
              <span>30-day hassle-free returns</span>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

const styles = {
  wrapper: { display: "flex", flexDirection: "column", gap: "12px", marginTop: "48px" },
  accordion: { border: "1px solid #eee", borderRadius: "12px", overflow: "hidden" },
  accordionHeader: {
    width: "100%", display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "16px 20px", backgroundColor: "#fff",
    border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "600",
    color: "#0f0f0f",
  },
  accordionBody: { padding: "8px 0", borderTop: "1px solid #eee" },
  specRow: { display: "flex", justifyContent: "space-between", padding: "12px 20px" },
  specLabel: { color: "#666", fontSize: "14px" },
  specValue: { fontWeight: "600", fontSize: "14px" },
  featureRow: { display: "flex", alignItems: "center", gap: "12px", padding: "12px 20px" },
  checkmark: { color: "#2a9d5c", fontWeight: "bold" },
};

export default ProductSpecs;