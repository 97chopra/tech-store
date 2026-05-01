import { useState } from 'react'
import Navbar from './components/Navbar'
import ImageGallery from './components/ImageGallery'
import ProductInfo from './components/ProductInfo'
import ProductSpecs from './components/ProductSpecs'
import CartDrawer from './components/CartDrawer'
import product from './data/product'

function App() {
  const [selectedColor, setSelectedColor] = useState("Midnight Black")
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <div style={styles.container}>
        <div style={styles.grid}>
          <ImageGallery images={product.images[selectedColor]} />
          <ProductInfo
            product={product}
            onColorChange={setSelectedColor}
            selectedColor={selectedColor}
            onCartOpen={() => setCartOpen(true)}
          />
        </div>
        <ProductSpecs specs={product.specs} features={product.features} />
      </div>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}

const styles = {
  container: { maxWidth: "1200px", margin: "40px auto", padding: "0 24px" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" },
}

export default App