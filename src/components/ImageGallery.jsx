import { useState } from "react";

function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(0);

  return (
    <div style={styles.wrapper}>
      {/* Main Image */}
      <div style={styles.mainImageWrapper}>
        <img
          src={images[mainImage]}
          alt="product"
          style={styles.mainImage}
        />
      </div>

      {/* Thumbnails */}
      <div style={styles.thumbnails}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumb-${index}`}
            style={{
              ...styles.thumb,
              border: mainImage === index ? "2px solid #e63946" : "2px solid transparent",
            }}
            onClick={() => setMainImage(index)}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  mainImageWrapper: {
    width: "100%",
    borderRadius: "16px",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  mainImage: {
    width: "100%",
    height: "450px",
    objectFit: "cover",
    display: "block",
  },
  thumbnails: {
    display: "flex",
    gap: "10px",
  },
  thumb: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ImageGallery;