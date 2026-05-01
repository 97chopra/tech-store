import { useState } from 'react'
import Navbar from './components/Navbar'
import ImageGallery from './components/ImageGallery'
import ProductInfo from './components/ProductInfo'
import product from './data/product'

function App() {
  const [selectedColor, setSelectedColor] = useState("Midnight Black")

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.grid}>
          <ImageGallery images={product.images[selectedColor]} />
          <ProductInfo product={product} onColorChange={setSelectedColor} />
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: { maxWidth: "1200px", margin: "40px auto", padding: "0 24px" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" },
}

export default App