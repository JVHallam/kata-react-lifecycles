packages and setup:
todo:
* testing:
  * Now that we have multiple files, use a jest "BeforeAllTests" setup file to setup enzyme

* repeatability:
  * have a setup script
    * creates the directory, if it doesn't already exist
    * copies the files across
  * have a teardown script
  * Add the directory where this is done to the .gitignore
  * move the kataComponent.js file to be somewhere for test purposes only, it feels silly re-writing it every time i need it.

* Get a web rendering component that shows the error handling
  * Handling getDerivedStateFromError

* src/webapp/index.js
  * Is there a more elegant way to handle the pathing to get the kataComponent?
  * Is dependancy injection worth using here, or is it just an anti pattern?

* cleaning up the html and css of the test page
  * Just make a drawing, showing a slightly better layout
  * create an html page showing this layout
  * adapt the react components to follow this exact layout
  * Have an Example output next to the actual output. How else am i supposed to do this shit?

* try to encorporate more of the react functions
  * React.children.map( children, () => {} );
    * Wrap each child in an li or someshit, rendering that shit into a list
