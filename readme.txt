npm init

Install webpack
npm i --save-dev webpack webpack-cli webpack-dev-server
>Webpack =>bundle le code dans un buikd final
>webpack cli=> ensemble de commande pour gérer webpack
>webpack-dev-server=>mini node express server , utilisation de sock js pour 
emuler un web socket, permet de créer un environnement localhost


Install Babel
npm i --save-dev babel-loader @babel/preset-env 
@babel/core
@babel/plugin-transform-runtime
@babel/preset-react
@babel/eslint-parser
@babel/runtime
@babel/cli

>babel-loader : permet la transpilation de javascript en utilisant webpack et babel
>@babel/preset-env : permet  d'utiliser la derniere version de js
sans devoir a gérer polyfill et transformation custom du code
>@babel/core : coeur de babel
>@babel/plugin-transform-runtime : sorte de cache qui permet de rétuiliser des helpers
babel pour réduire le codebase
>@babel/preset-react : permet d'uiliser React JS, converti HTML EN JS
JSX?
>babel-eslint : parser qui permet d'utiliser ESLINT (analyseur de code statique selon des règles que l'on peut définir)
>@babel/runtime : package qui contient des poliufill et autres
>@babel/cli : cli pour utiliser babel


installation des linter en question
npm i --save-dev eslint eslint-config-airbnb-base 
eslint-plugin-jest 
eslint-config-prettier
path


installer React
npm i react react-dom


Créer un folder public/ avec index .html
Créer un folder src/ avec APP.Js contenant du JSX , point d'entrée de votre APP
Créer a la racine index.js avec important React et react dom pour attacher 
le code JS a l'HTML dans public



Configuration de babel et javascritp

webpack.config.js 
.babelrc


Ajout CSS 

 ["style-loader","css-loader"]