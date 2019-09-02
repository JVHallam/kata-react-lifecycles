# What
This is the exact way i managed to pass each test with the original component:

# How
## Component props:
props = {
  connection : {
    fetchDetails : async () => {},
    reportError : async () => {},
    cleanup : async () => {}
  },
  id : "string"
}

## Default props
it's best to set values for the default props.
Otherwise, what happens when i try to invoke the function of an undefined object?
Literally, just use the above as the default props.

## Check that the basic component renders
This is just implementing the render function and not throwing an error.
Must look something like:

<p id="message">
  logging in
</p>

## Check that the login function is called only once
Call the login function during componentWillMount.

## The username returned from the service is displayed
The result of the componentWillMount call, from the first test, should be saved into state.
Then, render that out into message.

Make sure to remove "logging in" from the dom. It's redundant now.

## Check that the cleanup is called on dismount 
Just have to call the cleanup function on componentWillUnmount

## Component can render children
Rendering out children, using this.props.children

## Component reports any error during rendering to the server
* componentDidCatch call the report error function

## Component doesn't call for a report, if there were no errors during rendering
Just do the above, don't call for error reports anywhere else.

## Expect the element to display the error, when an error is thrown
* static getDerivedStateFromError( error )
  * In this function, error is an error object. Don't render it into the dom, render error.message
* return the new state
* render the message from the updated state, into the dom

