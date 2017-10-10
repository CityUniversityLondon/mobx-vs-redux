var webpack = require("webpack");
var gulp = require("gulp");
var gutil = require("gulp-util");
var path = require("path");

gulp.task("watch", function () {
    var config = {
        entry: {
            mobx: "./src/mobx/index.js",
            redux: "./src/redux/index.js",
        },
        watch: true,
        module: {
            loaders: [
                {test: /\.json$/, loader: "json-loader"},
                {
                    test: /.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015', 'stage-0', 'react'],
                        plugins: [
                            ["transform-decorators-legacy"],
                        ]
                    }
                }]
        },
        plugins: [new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('development')}})],
        output: {
            path: path.join(__dirname, "./dest/"),
            filename: '[name].js'
        },
        devtool: '#inline-source-map'
    };

    return webpack(config, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({chunks: false}));
    });
});

