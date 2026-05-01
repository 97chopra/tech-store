import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const firstColor = product.colors[0].name;
  const image = product.images[firstColor][0];

  return (
    <div
      style={styles.card}
      onClick={() => navigate(`/product/${product.id}`)}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      <div style={styles.imageWrapper}>
        <img src={image} alt={product.name} style={styles.image} />
        {product.discount > 0 && (
          <span style={styles.badge}>{product.discount}% OFF</span>
        )}
      </div>
      <div style={styles.info}>
        <p style={styles.brand}>{product.brand}</p>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.category}>{product.category}</p>
        <div style={styles.priceRow}>
          <span style={styles.price}>${product.price}</span>
          <span style={styles.originalPrice}>${product.originalPrice}</span>
        </div>
        <div style={styles.ratingRow}>
          <span style={styles.stars}>{"★".repeat(Math.floor(product.rating))}</span>
          <span style={styles.reviewCount}>({product.reviewCount})</span>
        </div>
        <button style={styles.btn}>View Product</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  imageWrapper: { position: "relative" },
  image: { width: "100%", height: "220px", objectFit: "cover", display: "block" },
  badge: {
    position: "absolute", top: "12px", left: "12px",
    backgroundColor: "#e63946", color: "#fff",
    padding: "4px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: "700",
  },
  info: { padding: "16px" },
  brand: { margin: "0 0 4px", fontSize: "12px", color: "#888", textTransform: "uppercase", letterSpacing: "1px" },
  name: { margin: "0 0 4px", fontSize: "16px", fontWeight: "700", color: "#0f0f0f" },
  category: { margin: "0 0 8px", fontSize: "13px", color: "#aaa" },
  priceRow: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" },
  price: { fontSize: "18px", fontWeight: "700", color: "#0f0f0f" },
  originalPrice: { fontSize: "14px", color: "#aaa", textDecoration: "line-through" },
  ratingRow: { display: "flex", alignItems: "center", gap: "4px", marginBottom: "12px" },
  stars: { color: "#f4a261", fontSize: "14px" },
  reviewCount: { fontSize: "12px", color: "#aaa" },
  btn: {
    width: "100%", padding: "10px", backgroundColor: "#0f0f0f",
    color: "#fff", border: "none", borderRadius: "8px",
    fontSize: "14px", fontWeight: "600", cursor: "pointer",
  },
};

export default ProductCard;