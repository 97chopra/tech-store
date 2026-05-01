# ⚡ Voltex Tech Store

A modern, fully responsive e-commerce product page built with React. This project demonstrates real-world React concepts including component architecture, state management, routing, and context API.

## 📸 Screenshots
![Voltex Store](./public/screenshot.png)

## 🛠️ Built With
- **React 18** - UI library
- **Vite** - Build tool
- **React Router DOM** - Client-side routing
- **Context API + useReducer** - Global cart state management
- **CSS-in-JS** - Inline styles with JavaScript objects

## ✨ Features
- 🏠 Home page with product grid organised by category
- 🛍️ Product detail page with image gallery and colour variants
- 🛒 Slide-in cart drawer with real-time updates
- ➕ Add to cart with quantity selector
- 🎨 Colour variant switcher with live image change
- 📋 Accordion for specs, features and shipping info
- 🔗 Full client-side routing (Home, Products, About)
- 📱 Responsive layout

## 📦 Product Catalog
- Wireless Headphones (Voltex ProSound X1)
- Laptops (Apple, Dell, Lenovo, ASUS, HP, Acer)
- Smartwatches (Apple, Samsung)

## 🗂️ Project Structure
src/
├── components/
│   ├── Navbar.jsx
│   ├── HomePage.jsx
│   ├── ProductCard.jsx
│   ├── ProductPage.jsx
│   ├── ImageGallery.jsx
│   ├── ProductInfo.jsx
│   ├── ProductSpecs.jsx
│   ├── CartDrawer.jsx
│   └── AboutPage.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── product.js
└── App.jsx
## 💡 Key React Concepts Used
| Concept | Where Used |
|---|---|
| `useState` | Color selection, cart drawer, quantity |
| `useReducer` | Cart state management |
| `useContext` | Accessing cart from any component |
| `useParams` | Getting product ID from URL |
| `useNavigate` | Programmatic navigation |
| Component Props | Passing data between components |

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/97chopra/tech-store.git

# Navigate to project
cd tech-store

# Install dependencies
npm install

# Run development server
npm run dev
```

## 👩‍💻 Author
**Aarti Chopra**  
Final Year Student - Software Programming & Data Science in AI  
Auckland University of Technology (AUT)  
[GitHub](https://github.com/97chopra)