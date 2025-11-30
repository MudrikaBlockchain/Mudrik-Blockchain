module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mudrika: {50:'#fff7f3',100:'#ffe9df',500:'#ff7a18',700:'#d85f12'},
        bg: '#0f1724',
        card: '#0b1220'
      },
      backdropBlur: { xs: '4px' }
    }
  },
  plugins: []
}
