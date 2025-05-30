/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "!./node_modules/**" ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(0, 42, 40, 1);",
        secondary: "rgba(255, 180, 27, 1)",
        tertiary: "rgba(0, 77, 0, 0.2)",
        regular: "#ffffff",
        regular2: "rgba(66, 96, 193, 0.2)",
        regular3: "rgba(253, 150, 2, 0.2)",
        regular4: "rgba(0, 77, 0, 0.05)",
        regular5: "rgba(255, 102, 0, 0.05)",
        newgray: "#c8c8c8",
      },
      
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-rtl': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        scroll: 'scroll 90s linear infinite',
        'scroll-rtl': 'scroll-rtl 90s linear infinite',
      },
            backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, rgba(255, 180, 27, 1) 30%, rgba(0, 42, 40, 1) 70%)',
        'text-gradient2': 'linear-gradient(90deg, rgba(255, 180, 27, 1) 10%, rgba(255,255,255,1) 90%)',
'mobile-drawer-gradient': 'linear-gradient(90deg, rgba(0, 42, 40, 0.6), rgba(0, 42, 40, 0.3))',
      },
    
      boxShadow: {
        sm: "0px 0px 2px rgba(0, 0, 0, 0.05)",
        md: "0px 0px 6px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.04)",
        lg: "0px 0px 15px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.05)",
        xl: "0px 0px 25px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.04)",
        "2xl": "0px 0px 50px rgba(0, 0, 0, 0.25)",
        "3xl": "0px 0px 50px rgba(0, 0, 0, 0.3)",
        'new': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        none: "none",
      },
      screens: {
        "1xl": "1280px",
        "2xl": "1440px",
      },
      maxWidth: {
        "screen-2xl": "1440px",
        "screen-1xl": "1280px",
      },
      lineHeight: {
        "extra-tight": "1.1px",
        "extra-loose": "110px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      ringColor: ["focus"],
    },
  },
  
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".body-fixed": {
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          overflow: "hidden",
        },
      });
    },
  ],
};
