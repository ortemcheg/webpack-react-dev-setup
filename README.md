##Synopsis

My webpack config for React Apps development.

##Motivation

I created this project to deepen my understanding of webpack (and its loaders) and babel.

##Description

The entry point is the `index.js` in the `source` folder. Webpack starts from there and pulls all of the project's modules together. The result (`bundle.js`) goes to the `dist` directory. I also use `HtmlWebpackPlugin` to generate an html file which links to the `bundle.js`.

The `babel-loader` processes all JS and JSX files while Webpack is building the bundle. The loader uses Babel's core module and uses its config, the .babelrc file. I use two presets for Babel in that config.
The `@babel/preset-react` transforms the JSX syntax to JS calls to React.createElement() method. The 'development' option for the preset helps with creating source maps.
The `@babel/preset-env` allows my JavaScript to work in older browsers. I use modern browsers during the development so I don't need this preset to generate a ton of unnecessary code. So the preset is configured to target 2 latest versions of browsers from all vendors. The config of the preset is in `package.json` file because `preset-env` depends on `browserslist` and uses `browserslist`'s conf:ig sources.

The `css-loader` bundles the css for the project and the `MiniCssExtractPlugin` creates a separate styles.css file and injects a link to it in the html file.
