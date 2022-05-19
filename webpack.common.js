const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    entry: ['./js/index.js', './css/style.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '',
    },
    optimization: {
        // chunkIds: 'named',
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(html)$/,
                use: 'html-loader',
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset',
                generator: {
                    filename: '[path][name]-[hash][ext]',
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                type: 'asset',
                generator: {
                    filename: '[path][name]-[hash][ext]',
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
        new VueLoaderPlugin(),

        ...glob.sync('./src/*.html').map((htmlFile) => {
            return new HtmlWebpackPlugin({
                inject: true,
                filename: path.basename(htmlFile),
                template: path.basename(htmlFile),
            });
        }),
    ],
};
