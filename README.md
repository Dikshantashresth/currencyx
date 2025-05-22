

# 💱 CurrencyX - Exchange Rate Converter

CurrencyX is a simple, fast, and modern currency exchange rate converter built with **React** and styled with a **dark aesthetic**. It fetches real-time exchange rates (no API key required) and allows users to convert between over 160 currencies.

## 🌐 Live Demo
https://dikshantashresth.github.io/currencyx/

## ✨ Features

- ⚡ Real-time exchange rates using the free `open.er-api.com`
- 🌑 Dark-themed modern UI
- 🔀 Convert between any two global currencies
- 🔧 Built with React + Vite
- 🚀 Deployed on GitHub Pages


## 🔧 Technologies Used

- React
- Vite
- HTML, CSS
- JavaScript (ES6+)
- Open Exchange Rate API (no key required)

## 📁 Folder Structure

```

currencyx/
├── public/
│   └── vite.svg (replaced with CurrencyX logo)
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── About.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
└── README.md

````

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Deploy to GitHub Pages

Make sure you've added this to your `vite.config.js`:

```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

Then deploy:

```bash
npm run deploy
```

> Tip: You can use [vite-plugin-gh-pages](https://github.com/antfu/vite-plugin-gh-pages) or `gh-pages` npm package for easier deployment.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

* [ExchangeRate API](https://open.er-api.com/)
* [Vite](https://vitejs.dev/)
* [React](https://reactjs.org/)

---

## ✍️ Author

Made with ❤️ by Dikshanta

```

---

Let me know if you'd like the badge section, installation GIF, or to personalize the author name and live demo link.
```
