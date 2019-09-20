packages and setup:
todo:
* errors tests aren't actually working as intended:
  * When the user experiences an error, they must report it to the server
  * There's no test, testing for this
  * There's no test, testing to make sure the function is called

* testing:
  * Now that we have multiple files, use a jest "BeforeAllTests" setup file to setup enzyme

* Get a web rendering component that shows the error handling
  * Handling getDerivedStateFromError

* HTTP API:
  * Let's be real, if you're using react, you're most likely making api calls
  * Make a Stream Generator-like function that fetches from an api
  * Have it use an actual HTTP api on the front end
  * Use dependancy injection so that i can detach the http api stream from 
    the actual fetch api.
  * This is used in another project, find it, implement it, bring it over here.

* Error boundaries:
  * This could actually be a component in and of itself, that's tested individually
  * Could use React.Children.map to wrap each child individually, so that only the problem child doesn't render
  * Render the rest of the children
  * Could always make it a thing that wraps the children and is a thing, in and of itself
  * Could wrap each child individually 
  * Why would the parent component not show the username, when they're logged in, because of an error? why not just have the child errors be contained?

* src/webapp/index.js
  * Is there a more elegant way to handle the pathing to get the kataComponent?
  * Is dependancy injection worth using here, or is it just an anti pattern?

* cleaning up the html and css of the test page
  * Just make a drawing, showing a slightly better layout
  * create an html page showing this layout
  * adapt the react components to follow this exact layout
  * Have an Example output next to the actual output. How else am i supposed to do this shit?
  * If the component fails to render, make the box displaying the question
    * turn red if it fails to render
    * Stay white if it renders without a problem

* try to encorporate more of the react functions
  * React.children.map( children, () => {} );
    * Wrap each child in an li or someshit, rendering that shit into a list

  * default props
  * props types
