packages and setup:
todo:
* Get a web rendering component that shows the error handling
  * Handling getDerivedStateFromError

* src/webapp/index.js
  * Is there a more elegant way to handle the pathing to get the kataComponent?
  * Is dependancy injection worth using here, or is it just an anti pattern?

* clean up the index.js code:
  * put the app component into it's own file
  * put tests into their own files
  * put tests into a seperate directory
  * Find a way to make the tests more pleasing structure wise? They feel wrong

* cleaning up the html and css of the test page
  * Just make a drawing, showing a slightly better layout
  * create an html page showing this layout
  * adapt the react components to follow this exact layout
  * Have an Example output next to the actual output. How else am i supposed to do this shit?

* try to encorporate more of the react functions
  * React.children.map( children, () => {} );
    * Wrap each child in an li or someshit, rendering that shit into a list
