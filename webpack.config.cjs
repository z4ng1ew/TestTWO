
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;


module.exports = {
    entry: './src/index.ts', // Ваш входной файл
    output: {
        path: path.resolve(__dirname, 'dist'), // Путь к папке, где будет сохраняться сборка
        filename: "bungle.js", // Название выходного файла
        clean: true // Очищать папку dist перед каждой новой сборкой
    },
    //mode: "development", // Режим разработки, оптимизированный для разработки
    //devtool: "source-map" // Используйте source-map для более качественных карт исходных файлов
    mode: "production",
    plugins: [ 
        new HtmlWebpackPlugin({
            filename:"./index.html", // Название создаваемого HTML файла и его путь
            template: "./src/index.html", // Путь к исходному HTML файлу, который будет использован как шаблон

        }),
        new HTMLInlineCSSWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: ".css",
            chunkFilename: "[id].css"
          }),              

        ],

    module: {
        rules: [
            {
              test: /\.css$/i,
              use: [ MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader', // Используйте ts-loader для обработки TypeScript файлов
                exclude: /node_modules/,
            }
          ],
    }
};
