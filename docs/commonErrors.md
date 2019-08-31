# What
This is a list of errors that i had during development, that are user error. 
Just things that are a little easier to write here, than to try and solve again later.

# Errors:
* What you're trying to load into the dom is an object, not a react child
This is exactly what it says. Typically, i found this error to occur when i was trying to render out the errors from "getDerivedStateFromError" or "componentDidCatch".
If you're having this error, and you're testing the error handling of components, just check that the error you're trying to render is a string, and not an error object.
