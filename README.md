# React JS Crash Course

The code in this repository is based on [Traversy Media's](https://www.traversymedia.com/) [React JS Crash Course](https://www.youtube.com/watch?v=sBws8MSXN7A) video tutorial.  The aim of the tutorial is to provide an introduction to the [React](https://reactjs.org/) library by building a simple todo (task list) application. Note that I use [typescript](https://www.typescriptlang.org/) here instead of javascript and this leads to some interesting type definitions and subtle differences between the code in the video and my code. Most of these differences are necessary in order to appease the typescript compiler which is pretty darn strict and found a lot of Brad's bugs before he found them in the video! Although I didn't really use it, this [React + TypeScripts Cheatsheets](https://github.com/typescript-cheatsheets/react) looks like a good resource to get React and Typescript to play well together. Also I use [Sass](https://sass-lang.com/) instead of regular CSS because I prefer its feature set. 

## Prerequisites

1. Install [nodejs](https://nodejs.org/).
2. Install [Visual Studio Code](https://code.visualstudio.com/download). If you don't install it you will have to find another way of [installing sass](https://sass-lang.com/install) and compilation. The rest of the instructions assume you are using Visual Studio Code.

## Running the code

1. You will be prompted to install the the recommended extensions when you open up the code folder in Visual Studio Code. Go ahead and install these. They are `Live Sass`, `ES7 React/Redux/GraphQL/React-Native snippets` and `Prettier`. The first is essential as it compiles `.scss` and `.sass` files into `.css` files. The last two extensions are optional, however, the [React Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) can really help to improve development productivity. The recommended extensions can be found in the `extensions.json` file in the `.vscode` directory should you wish to edit these. Likewise in the same directory you can find the `settings.json` file should you wish to edit the recommended settings.
2. Run ```npm install``` to install the dependencies listed in the `package.json` file.
3. Click the `Watch Sass` button in the bottom bar of Visual Studio Code to perform live comilation of SASS or SCSS to CSS.
4. Run ```npm start``` to launch the React development server. This command will launch the application in your default web browser and will watch for and compile changes to source files.

## Deployment

If you wish to deploy the website then run the command ```npm run build``` from a terminal. This will create a `build` directory with the application build artifacts. You can then deploy this folder on any web server that you want.
