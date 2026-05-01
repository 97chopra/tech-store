import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Navbar({ onCartClick }) {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logo}>⚡ Voltex</div>

        {/* Nav Links */}
        <ul style={styles.navLinks}>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/products")}>Products</li>
          <li onClick={() => navigate("/about")}>About</li>
        </ul>

        {/* Cart Icon */}
        <div style={styles.cartWrapper} onClick={onCartClick}>
          🛒
          <span style={styles.cartBadge}>{totalItems}</span>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#0f0f0f",
    padding: "16px 0",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  navLinks: {
    display: "flex",
    gap: "32px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    color: "#ccc",
    cursor: "pointer",
  },
  cartWrapper: {
    position: "relative",
    fontSize: "24px",
    cursor: "pointer",
  },
  cartBadge: {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    backgroundColor: "#e63946",
    color: "#fff",
    borderRadius: "50%",
    fontSize: "11px",
    width: "18px",
    height: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Navbar;