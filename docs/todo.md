packages and setup:
* babel:
  * @babel/core
  * @babel/preset-env
  * babel-jest
  * @babel/preset-react

* react
  * react
  * react-dom
  * @testing-library/react

* webpack
  * babel-loader
  * html-webpack-plugin

* global dependancies:
  * webpack
  * webpack-cli
  * webpack-dev-server
  * jest

* i had issues, so i was trying enzyme:
  * enzyme
  * enzyme-adapter-react-16

using enzyme:
* put the enzyme imports at the top of the file
* imported the enzyme adaptor too

files:
* main test file
* component file
* webpack app.js file
* webpack config
* babel configs / babel jest configs
* A readme explaining the packages that need to be installed globally to use the project

todo:
* Get the readme written
* Get a guide written, alongside the entire situation
* Get a test situation for each of the following methods:
  * basic initial render
  * componentDidMount, then a re-render  
  * componentShouldUpdate
  * get a list of all the methods, and how they should be used, from the official docs and write tests for each one

* Write a higher order component that'll run the same test-like situations in the browser

* try and get this shit going with react hooks!

done:
* Get jest running the test library
* Get webpack running
* Get the components set up to work
* Start getting testable situations up and written
