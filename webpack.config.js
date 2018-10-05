const HtmlWebPackPlugin = require("html-webpack-plugin");
const json = require("./src/data.json")

const htmlPlugin = new HtmlWebPackPlugin({
	  template: "./src/index.html",
	  filename: "./index.html"
});


var config = {
	output : {
		filename: "build.js"
	},
	module:{
		rules:[
			{
				test: /\.js$/,
		        exclude: /node_modules/,
		        use: {
		          loader: "babel-loader"
		        }
			},
			{
				test: /\.css$/,
				use: ["style-loader","css-loader"]
			},
			{
				test: /\.json$/,
				loader : 'json-loader'
			}
		]
	},
	plugins: [htmlPlugin]
}

module.exports = config