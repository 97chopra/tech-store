import { useState} from "react";

function ProductInfo({ product, onColorChange }) {
    const[selectedColor, setSelctedColour] = useState(product.colours[0]);
    const[quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    const handleColourChange = (color) => {
        setSelectedColor(color);
        onColorChange(color.name);
    };

    const handleAddToCart = () => {
        setAdded(true);
        setTimeout(() => {
            setAdded(false);
        }, 2000);
    };

    return(
      <div style = {StyleSheet.wrapper}>
        {/* Brand & Category */}
        <p style={styles.brand}>{product.brand} · {product.category}</p>

        {/* Name */}
         <h1 style={styles.name}>{product.name}</h1>

         {/* Rating */}
         <div style={styles.ratingRow}>
        <span style={styles.stars}>{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
        <span style={styles.reviewCount}>{product.rating} ({product.reviewCount} reviews)</span>
      </div>

       {/* Price */}
      <div style={styles.priceRow}>
        <span style={styles.price}>${product.price}</span>
        <span style={styles.originalPrice}>${product.originalPrice}</span>
        <span style={styles.discount}>{product.discount}% OFF</span>
      </div>

      {/* Color Selector */}
      <div style = {styles.section}>
        <p style = {styles.label}>Color: <strong> {selectedColor.name} </strong></p>
        <div style={styles.colorRaw}>
            {product.colors.map((color) => (
                <button
                    key={color.id}
                    onClick={() => handleColorChange(color)}
                    style={{
                        ...styles.colorButton,
                        backgroundColor: color.hex,
                       border: selectedColor.id === color.id
                  ? "3px solid #e63946"
                  : "3px solid transparent",
                outline: "2px solid #ccc",
                    }}
                    />
            ))}
        </div>
      </div>
       {/*Quantity */}
      <div style={styles.section}>
       <p style={styles.label}>Quantity</p>
        <div style={styles.quantityRow}>
          <button style={styles.qtyBtn} onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
          <span style={styles.qtyNum}>{quantity}</span>
          <button style={styles.qtyBtn} onClick={() => setQuantity(q => q + 1)}>+</button>
        </div> 
      </div>
      {/* Add to Cart Button */}
      <button
        style={{
          ...styles.cartBtn,
          backgroundColor: added ? "#2a9d5c" : "#e63946",
        }}
        onClick={handleAddToCart}
      >
        {added ? "✓ Added to Cart!" : "Add to Cart"}
      </button>
      {/* Description */}
      <p style={styles.description}>{product.description}</p>
    </div>
  );

}
const styles = {
  wrapper: { display: "flex", flexDirection: "column", gap: "16px" },
  brand: { color: "#888", fontSize: "14px", margin: 0 },
  name: { fontSize: "28px", fontWeight: "bold", margin: 0, color: "#0f0f0f" },
  ratingRow: { display: "flex", alignItems: "center", gap: "8px" },
  stars: { color: "#f4a261", fontSize: "18px" },
  reviewCount: { color: "#888", fontSize: "14px" },
  priceRow: { display: "flex", alignItems: "center", gap: "12px" },
  price: { fontSize: "28px", fontWeight: "bold", color: "#0f0f0f" },
  originalPrice: { fontSize: "18px", color: "#aaa", textDecoration: "line-through" },
  discount: { backgroundColor: "#e63946", color: "#fff", padding: "2px 8px", borderRadius: "4px", fontSize: "13px" },
  section: { display: "flex", flexDirection: "column", gap: "8px" },
  label: { margin: 0, fontSize: "14px", color: "#555" },
  colorRow: { display: "flex", gap: "12px" },
  colorCircle: { width: "32px", height: "32px", borderRadius: "50%", cursor: "pointer" },
  quantityRow: { display: "flex", alignItems: "center", gap: "16px" },
  qtyBtn: { width: "36px", height: "36px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "20px", cursor: "pointer", backgroundColor: "#f5f5f5" },
  qtyNum: { fontSize: "18px", fontWeight: "bold" },
  cartBtn: { padding: "16px", borderRadius: "12px", border: "none", color: "#fff", fontSize: "16px", fontWeight: "bold", cursor: "pointer", transition: "background-color 0.3s ease" },
  description: { color: "#666", lineHeight: "1.6", fontSize: "14px" },
};

export default ProductInfo;
      