const { join } = require("path");

const paths = {
  root: join(__dirname, ".."),
  src: join(__dirname, "..", "src"),
  dist: join(__dirname, "..", "dist"),
  uikit: join(__dirname, "..", "node_modules", "@hbsis.uikit", "react", "dist")
};

module.exports = {
  paths,

  entry: [join(paths.src, "index")],

  output: {
    path: paths.dist,
    filename: "[name].js"
  },

  htmlPluginConfig: {
    title: "Tracking",
    template: join(paths.src, "index.html")
  },

  jsLoader: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    include: [paths.src],
    use: {
      loader: "babel-loader",
      query: { compact: false }
    }
  },

  cssLoader: {
    test: /\.css$/,
    include: [paths.src, paths.uikit],
    use: ["style-loader", "css-loader"]
  },

  fileLoader: {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
    include: [paths.src, paths.uikit],
    use: {
      loader: "file-loader",
      query: {
        name: "media/[name].[hash:8].[ext]"
      }
    }
  },

  urlLoader: {
    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    include: paths.src,
    use: {
      loader: "url-loader",
      query: {
        limit: 10000,
        name: "media/[name].[hash:8].[ext]"
      }
    }
  },

  resolve: {
    alias: {
      src: paths.src
    }
  }
};
