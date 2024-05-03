const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
		colors: {
			primary: '#034947',
			'primary-unactive': '#D0E5DD',
			success: '#13CB48',
		},
	},
  },
  plugins: [],
});