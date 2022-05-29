module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comforter: ["Comforter", "cursive"],
        mochiy: ["Mochiy Pop One", "cursive"],
      },
      dropShadow: {
        'white': '0 35px 35px rgba(255, 255, 255, 1)',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      }
    },
    screens: {
      'lg': {'max': '1170px'},
      'md': {'max': '900px'},
      'sm': {'max': '770px'},
      'vs': {'max': '550px'},
    },
  },
  plugins: [],
}
