# OUTLAW - Streetwear Empire 🔥

A dark-themed, gangster-inspired streetwear clothing e-commerce app built with **React**.

## Features

- 🎨 **Dark Gangster Theme** - Premium dark UI with gold and red accents
- 🛍️ **Product Catalog** - 15 streetwear products with high-quality images
- 🔍 **Category Filtering** - Filter by Hoodies, Tees, Jackets, Pants, or view All
- 🛒 **Shopping Cart** - Add/remove items with real-time cart updates
- 📱 **Responsive Design** - Works on desktop and mobile devices
- ✨ **Smooth Animations** - Hover effects, transitions, and interactive UI
- ⚛️ **Modern React** - Built with React 19 and functional components with hooks

## Product Categories

- **Hoodies** - Premium hoodies with exclusive designs
- **T-Shirts** - Graphic tees and polo shirts
- **Jackets** - Bombers, varsity, leather, and windbreakers
- **Pants** - Joggers, cargo pants, and track pants

## Tech Stack

- **React 19** - Modern UI library with hooks
- **React Scripts** - Build tooling and development server
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Advanced styling with CSS modules and animations
- **HTML5** - Semantic markup

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/paul-study/outlawClothing.git
cd outlawClothing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
outlawClothing/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── Filters.js
│   │   ├── Filters.css
│   │   ├── ProductCard.js
│   │   ├── ProductCard.css
│   │   ├── ProductsGrid.js
│   │   ├── ProductsGrid.css
│   │   ├── CartModal.js
│   │   ├── CartModal.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── data/
│   │   └── products.js     # Mock product database
│   ├── App.js              # Main App component
│   ├── App.css             # Global app styles
│   ├── index.js            # Entry point
│   └── index.css           # Base styles
├── package.json
└── README.md
```

## Component Architecture

- **App.js** - Main component managing state (cart, filters, products)
- **Header** - Navigation bar with cart icon
- **Hero** - Eye-catching hero section with CTA
- **Filters** - Category filter buttons
- **ProductsGrid** - Grid layout for product cards
- **ProductCard** - Individual product display with add to cart
- **CartModal** - Shopping cart modal with checkout
- **Footer** - Site footer with branding

## Design Features

- **Custom Fonts** - Bebas Neue, Oswald, and Roboto from Google Fonts
- **Color Palette**:
  - Background: Deep blacks (#0a0a0a, #1a1a1a)
  - Accent Gold: #d4af37
  - Accent Red: #c41e3a
- **Hover Effects** - Interactive cards with smooth transitions
- **Gold Border Glow** - Premium feel with shadow effects
- **Custom Scrollbar** - Gold-themed scrollbar
- **Component-based CSS** - Each component has its own stylesheet

## Mock Database

The app includes 15 mock products with:
- Product names with gangster/streetwear themes
- Categories (hoodies, tees, jackets, pants)
- Prices ranging from $42.99 to $299.99
- High-quality product images from Unsplash
- Compelling product descriptions

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

## Future Enhancements

- [ ] User authentication
- [ ] Payment integration (Stripe/PayPal)
- [ ] Product reviews and ratings
- [ ] Size selection
- [ ] Wishlist feature
- [ ] Product search functionality
- [ ] Backend API integration
- [ ] Product detail pages
- [ ] Quantity selector in cart
- [ ] Persistent cart (localStorage)
- [ ] Animations with Framer Motion

## Contributing

This is a demo project for educational purposes. Feel free to fork and customize!

## License

This is a demo project for educational purposes.

---

**OUTLAW** - Rule the Streets 👑

Built with ❤️ and React