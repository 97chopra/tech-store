const product = {
    id: 1,
    name: "Voltex ProSound X1",
    brand: "Voltex",
    category: "Wireless Headphones",
    price: "299.99",
    originalPrice: "399.99",
    discount: 25,
    rating: 4.7,
    reviewCount: 1284,
    instock: true,
    colors: [
        {id: 1, name: "Midnight Black", hex: "#1a1a1a"},
        {id: 2, name:"Arctic White", hex: "#f5f5f5"},
        {id: 3, name: "Navy Blue", hex: "#1b3a6b"},
    ],
    images: {
        "Midnight Black": [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600",
            "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600",
    ],
        "Arctic White": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600", 
        ],
         "Navy Blue": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600",
    ],
    },
    specs: [
        {label: "Driver Size", value: "40mm"},
        {labe1: "Frequency Response", value: "20Hz - 20KHz"},
        {label: "Battery Life", value: "40 hours"},
        {label: "Charging Time", value: "2 hours"},
        {label: "connectivity", value: "Bluetooth 5.3"},
        {label: "Weight", value: "250g"},
    
    ],
    features: [
        "Active Noise Cancellation",
        "Hi-Res Audio Certified",
        "30m Wireless Range",
        "Foldable Design",
        "Built-in VOice Assistant",
        "Multi-device Pairing",
    ],
    description:
    "Experinece audio like never before with the Voltex ProSound X1. Engineered for audiophiles and everyday listeners alike, featuring industry-leading noisee cancellation and premium 40m drivers.",


};
export default product;