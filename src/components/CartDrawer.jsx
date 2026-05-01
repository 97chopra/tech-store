import { useCart } from "../context/CartContext";

function CartDrawer({ isOpen, onClose }) {
  const { cart, removeFromCart, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div style={styles.overlay} onClick={onClose} />
      )}

      {/* Drawer */}
      <div style={{
        ...styles.drawer,
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
      }}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>🛒 Your Cart ({totalItems})</h2>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* Cart Items */}
        <div style={styles.itemsList}>
          {cart.length === 0 ? (
            <div style={styles.emptyCart}>
              <p style={styles.emptyText}>Your cart is empty</p>
              <p style={styles.emptySubtext}>Add some products!</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} style={styles.cartItem}>
                <img src={item.image} alt={item.name} style={styles.itemImage} />
                <div style={styles.itemDetails}>
                  <p style={styles.itemName}>{item.name}</p>
                  <p style={styles.itemColor}>Color: {item.color}</p>
                  <p style={styles.itemPrice}>${item.price} × {item.quantity}</p>
                </div>
                <button
                  style={styles.removeBtn}
                  onClick={() => removeFromCart(item.id, item.color)}
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={styles.footer}>
            <div style={styles.totalRow}>
              <span style={styles.totalLabel}>Total</span>
              <span style={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
            </div>
            <button style={styles.checkoutBtn}>
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  overlay: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)", zIndex: 200,
  },
  drawer: {
    position: "fixed", top: 0, right: 0, width: "380px", height: "100vh",
    backgroundColor: "#fff", zIndex: 300, display: "flex",
    flexDirection: "column", transition: "transform 0.3s ease",
    boxShadow: "-4px 0 20px rgba(0,0,0,0.15)",
  },
  header: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "20px 24px", borderBottom: "1px solid #eee",
  },
  title: { margin: 0, fontSize: "18px", fontWeight: "700" },
  closeBtn: {
    background: "none", border: "none", fontSize: "20px",
    cursor: "pointer", color: "#666",
  },
  itemsList: { flex: 1, overflowY: "auto", padding: "16px 24px" },
  emptyCart: { textAlign: "center", marginTop: "80px" },
  emptyText: { fontSize: "18px", fontWeight: "600", color: "#333" },
  emptySubtext: { color: "#999", fontSize: "14px" },
  cartItem: {
    display: "flex", alignItems: "center", gap: "12px",
    padding: "12px 0", borderBottom: "1px solid #f0f0f0",
  },
  itemImage: { width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px" },
  itemDetails: { flex: 1 },
  itemName: { margin: "0 0 4px", fontSize: "14px", fontWeight: "600" },
  itemColor: { margin: "0 0 4px", fontSize: "12px", color: "#888" },
  itemPrice: { margin: 0, fontSize: "14px", color: "#e63946", fontWeight: "600" },
  removeBtn: { background: "none", border: "none", cursor: "pointer", fontSize: "18px" },
  footer: { padding: "20px 24px", borderTop: "1px solid #eee" },
  totalRow: { display: "flex", justifyContent: "space-between", marginBottom: "16px" },
  totalLabel: { fontSize: "16px", fontWeight: "600" },
  totalPrice: { fontSize: "20px", fontWeight: "700", color: "#0f0f0f" },
  checkoutBtn: {
    width: "100%", padding: "16px", backgroundColor: "#0f0f0f",
    color: "#fff", border: "none", borderRadius: "12px",
    fontSize: "16px", fontWeight: "600", cursor: "pointer",
  },
};

export default CartDrawer;