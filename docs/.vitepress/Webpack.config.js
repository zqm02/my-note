// webpack.config.js
export default {
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: "react-code-view/webpack-md-loader",
      },
    ],
  },
};

const markdownRenderer = require("react-markdown-reader").renderer;

{
  test: /\.md$/, use;
  [
    {
      loader: "html-loader",
    },
    {
      loader: "markdown-loader",
      options: {
        pedantic: true,
        renderer: markdownRenderer(/**languages:Array<string>**/),
      },
    },
  ];
}
