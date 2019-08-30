
This entire component is supposed to be used for component lifecycles testing.
The first one we'll be starting with is componentDidMount.

componentDidMount:    
* this is where network calls should be done
  * make a call to the network
  * update the component state with the data from the call

# What?
The purpose of this entire thing is to get used to writing in the lifecycles of basic components.

# Structure:

## Props:
The component will expect the following props:
* sessionId { string }
* connection
  * fetchDetails { async function( sessionId ) } - returns a string, that should be rendered to the dom once returned
  * cleanup { async function( sessionId ) } - returns nothing, expected to be called when component is removed from the dom
  * reportError { async function( errorString ) } - return nothing, report any errors that are thrown by child elements

## Handling children:
All children of the element should render into the dom, as subcomponent of the current component.


# Guide:
methods required:
* componentDidMount
* componentWillUnmount
* getDerivedStateFromError
* componentDidCatch
* render
* constructor


## componentDidMount
* fetch any details from the service
* setState with what's retrieved

## componentWillUnmount
* call cleanup

## getDerivedStateFromError
* you're returning an object that's shallowly merged with the component state
* return the error, to be rendered
* also set anything that will update the object state to say "There has been an error", the flag, whatever.


## componentDidCatch
* This is where mutations and side effects are handled
* call the error reporting service

## contructor
* setup the state

## render
* render the state
* put a check in for error children. If you try to render children with errors, you are going to have a bad time

## Expected output:
<div>
  <p id="message"> { your message } </p>
  <div>
    <!-- Any child elements should be rendered here --> 

    <!-- This is a child --> 
    <!-- This is a child --> 
  </div>
</div>

* no children should be rendered when there's an error.

* message should display the following in the following circumstances:
  * "logging in" when the users details are being fetched from fetchDetails
  * `Hello ${username}`, where username is what's returned from fetchDetails
  * If a child component throws an error, that error should be displayed instead

* All children of the component should be displayed
