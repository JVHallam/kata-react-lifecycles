# What 
These are the minimum details i typically need to know how to complete the kata each time.

# Requirements
* What do i need to export?
* What default props does the application need?
* What do i need to render?
* The list of tasks required ( Bare minimum details ) by the component
  * Somehow, this should be shown via a test script

## What do i need to export
The default class needs to be the KataComponent

## What default props does the application need
```js
defaultProps = {
  connection  : {
    fetchDetails : async () => {},
    cleanup : async () => {},
    reportError : async () => {}
  }
}
```

## What do i need to render
```html
<p id="message"> logging in </p>
```

# The list of the tasks required:
Jest is fantastic at showing errors and code.

* Go into jest
* In a one liner above each expect
* Tell the user what you're expecting to see in more details
