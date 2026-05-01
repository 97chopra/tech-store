import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import ProductSpecs from "./ProductSpecs";
import products from "../data/product";

function ProductPage({ onCartOpen }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(product?.colors[0].name);

  if (!product) {
    return (
      <div style={styles.notFound}>
        <h2>Product not found!</h2>
        <button style={styles.backBtn} onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <button style={styles.backBtn} onClick={() => navigate("/")}>
        ← Back to Products
      </button>
      <div style={styles.grid}>
        <ImageGallery images={product.images[selectedColor]} />
        <ProductInfo
          product={product}
          onColorChange={setSelectedColor}
          selectedColor={selectedColor}
          onCartOpen={onCartOpen}
        />
      </div>
      <ProductSpecs specs={product.specs} features={product.features} />
    </div>
  );
}

const styles = {
  wrapper: { maxWidth: "1200px", margin: "0 auto", padding: "24px 24px 60px" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start", marginBottom: "48px" },
  backBtn: {
    marginBottom: "24px", padding: "10px 20px",
    backgroundColor: "#f5f5f5", border: "none",
    borderRadius: "8px", cursor: "pointer",
    fontSize: "14px", fontWeight: "600", color: "#0f0f0f",
  },
  notFound: { textAlign: "center", padding: "100px 24px" },
};

export default ProductPage;