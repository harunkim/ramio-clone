/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    extend: {
      height: {
        120: "42rem",
      },
      backgroundImage: {
        aboutLast:
          "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%), url(https://images.pexels.com/photos/16047149/pexels-photo-16047149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      },
    },
  },
  plugins: [],
};
