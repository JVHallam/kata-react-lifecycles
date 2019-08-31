# kata-react-lifecycles
This is a daily practise, for myself, to get used to setting up an using a basic react component and all of it's most important lifecycle methods.

# The Objective
The objective is to create a component that uses the most common and useful lifecycle methods in react. Those are:
* componentDidMount
* componentWillUnmount
* componentDidCatch
* getDerivedStateFromError

This application comes bundled with two things:
* jest tests
* a webpack-dev-server config

The jest tests will cover the entire component, and can be ran from the commandline.

If you run "webpack-dev-server" the application will open in the browser.
This gives a way to visualise the same component in the browser, where it's expected to run.

Instead of clogging up the jest tests with "console.log", it's best to use the webpack-dev-server code to view the output in the dom.

# Structure
Right now, the component that's tested is the default component exported from the "src/kataComponent.js" file.

# Requirements:
To run the tests, jest needs to be installed. It's not added in as a dev dependancy, not yet.

# Future updates:
## Content Updates:
* Cover some of the remaining lifecycle methods that aren't done yet:
  * shouldComponentUpdate
  * componentDidUpdate

* Add in tests for additional react features
  * React.Children.map
  * React.Children.only - Needed?
  * React.Children.count
  * React.Children.toArray - Needed?
  * React.Fragment
  * React references
  * React context 
  * React hooks? - Not going into this one. They deserve their own set of exercises

* Add in tests to cover more Typical DOM related features
  * Onclick
  * form submissions
  * tbh, just typical DOM events 

## Execution updates:
* Add in scripts that make setting up each day a little simpler
* Add in scripts that allow it to tie into a future project
