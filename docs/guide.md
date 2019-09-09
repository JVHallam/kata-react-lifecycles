# Setting up
* npm run setup
  * this creates the practise folder
  * practise/kataComponent.js is where you're expected to put your component as the default export

* import React
* export your class component as the default
* setup the contructor
* setup the render function to return something as a placeholder
* setup default props
  * sessionId : null,
  * connection : {
    * fetchDetails : async () => {}
    * reportError : async () => {}
    * cleanup : async () => {}
  * without default props for connection[fetchDetails] the web component wont be able to render

* constructor:
  * setup this.state to hold space for
    * username
    * error

  * bind any methods to the class

* render : part
  * render needs to return <p id="message"> Logging in </p>, whilst logging in
  * it then needs to display <p id="message"> Hello : { result from connection.fetchDetails } </p>

* logging in
  * componentDidMount
  * call the connection.fetchDetails
  * setState({ username });, that's returned from the promise
  * then have the username render into the dom

* componentWillUnmount
  * this.connection.cleanup needs to be called on unmount

* rendering children : 
  

* error handling :
  * The children will causes errors to form
  * static getDerivedStateFromError
    * needs to return the error in the new state

  * componentDidCatch
    * needs to report the error

  * render:
    * needs to show the error in <p id="message"></p>
    * needs to also NOT render the problematic children
