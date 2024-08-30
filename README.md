# react-webpack-frontend-skeleton
Frontend skeleton code using React &amp; Webpack. Components are functions based, the skeleton includes Jest as a testing suite.


## Code below for creating the skeleton:

Initialise the folder:

    npm init

Install React

    npm install react
    
Create `.gitignore` & add the below:

    /node_modules

Create folder structure - `./__tests__/`, `./dist`, `./src`, `./src/components`, `./src/utils`

Install babel

    npm install @babel/core

Install path-browserify

    npm install path-browserify

Install @babel/preset-env

    npm install @babel/preset-env

Install @babel/preset-react

    npm install @babel/preset-react

Install style-loader

    npm install style-loader

Install CSS loader

    npm install css-loader

Install react-router-dom

    npm install react-router-dom

Install webpack

    npm install webpack

Install webpack client

    npm install -D webpack-cli

Install webpack dev-server

    npm install -D webpack-dev-server

Create `webpack.config.js` file in `/fe` root - allows you to use all npm packages by including polyfills & seems more versitile than `npx create-react-app my-app` build.

    const path = require('path');

    module.exports = {
        mode: "development",
        entry: "./src/index.js"
        output: {`
            path: path.resolve(__dirname, "dist"),
            publicPath: "/",
          },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.js|jsx$/,
                    exclude: /node_modules/,
                    use: {`
                        loader: "babel-loader",
                        options: {`
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                },
            ],
        },
        devServer: {
            port: 3000,
            static: "./dist",
            historyApiFallback: true,
        },
        resolve: {
            fallback: {
              fs: false,
              path: require.resolve("path-browserify"),
            },
        },
    }

Create `.babelrc` in `./fe` root

    {
    "plugins": ["@babel/syntax-dynamic-import"],
    "presets": [
        [
        "@babel/preset-env",
        {
            "modules": false
        }
        ]
    ]
    }

Create basic files - `./src/index.js`

    import _ from 'lodash';
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom'
    import App from './App.js';

    window.addEventListener("DOMContentLoaded", function (e) {
        ReactDOM.createRoot(document.getElementById('root')).render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        );
    });

Create `./src/App.js`

    import React from 'react';
    import { Route, Routes } from 'react-router-dom';
    import Main from './components/Main.jsx';
    import css from './App.css';


    export default function App(){

        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>

            </div>
        )

    }

Create `./src/App.css`

    .App{
        text-align: center;
    }

Create `./src/components/Main.jsx`

    import React from 'react';

    export default function Main() {


    return (
        <div>
            <h1>Main.jsx Header</h1>
        </div>
    )
    };

Create `./dist/index.html`

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>reCAPTCHAv3 demo</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="main.js"></script>
    </body>
    </html>

Change `package.json` "scripts" object

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "webpack serve",
        "build": "webpack"
    },

Build the skeleton code

    npm run build

Start the server to test

    npm start