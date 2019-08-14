const webpack = require('webpack');
const path = require('path');
const os = require('os');
const HappyPack = require('happypack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const happyThreadPool = HappyPack.ThreadPool({
    size: Math.min(os.cpus().length, 4)
});
const isProd = process.env.NODE_ENV === 'production'
const extractCSS = isProd || process.env.TARGET === 'development'

const cssLoaders = [
    // https://github.com/webpack-contrib/mini-css-extract-plugin#user-content-advanced-configuration-example
    // TODO: remove style-loader: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/34
    extractCSS ? MiniCssExtractPlugin.loader : 'style-loader',
    { loader: 'css-loader', options: { sourceMap: !isProd } },
    { loader: 'postcss-loader', options: { sourceMap: !isProd } }
]
const scssLoaders = [
    ...cssLoaders,
    { loader: 'sass-loader', options: {
            implementation: require('sass'),
            fiber: require('fibers'),
            indentedSyntax: false
        } }
]
module.exports = {
    entry: {
        'vue-material-design-ripple': './src/directives/ripple/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'MyLib',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    plugins: [

        new HappyPack({
            id: 'scripts',
            threadPool: happyThreadPool,
            loaders: [
                'babel-loader',
                {
                    loader: 'ts-loader',
                    options: {happyPackMode: true}
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'vue-material-design-ripple.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.[jt]s$/,
                use: 'happypack/loader?id=scripts',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: scssLoaders
            }
        ]
    }
}
