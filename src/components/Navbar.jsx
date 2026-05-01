import {useState} from "react";

function Navbar() {
    const [ cartCount, setCartCount] = useState(0);
    return(
        <nav style={StyleSheet.nav}>
            <div style={StyleSheet.container}>
                {/* Logo */}
                <div styles={styles.logo}>⚡Voltex </div>
                {/* Nav Links */}
                <ul style={style.navLinks}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                </ul>
                {/* Cart Icon */}
                <div style={styles.cartWrapper}>
                  🛒
                  <span style={styles.cartBadge}>{cartCount}</span>  
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
        zindex: 1000,
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


 