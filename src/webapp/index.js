import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

import KataComponent from "../kataComponent.js";
import App from "./components/App.js";

function createMockConnection( testName ){
  return {
    fetchDetails : ( id ) => {
      return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
          resolve("RetrievedUsername");
        }, 1000);
      });
    },

    cleanup : async () => {
      console.log(`${ testName } : Has called cleanup`);
    },
   
    reportError : async ( error ) => {
      console.log(`${testName} : Error ${ error } has been reported`);
    }
  };
};

class ErrorBoundary extends React.Component{
  constructor(){
    super();
    this.state = {
      hasError : false 
    }
  }

   static getDerivedStateFromError( error ){
    return { hasError : true };
  }

  render(){
    if( this.state.hasError ){
      return (
        <div>
          You haven't handled the error correctly!
          Try properly implementing error boundaries on your component
        </div>
      )
    }
    
    return (
      <React.Fragment>
        { this.props.children }
      </React.Fragment>
    );
  }
};

const TestOne = () => {
  return (
    <React.Fragment>
      <p> Test One : Check that the default component renders </p>
      <KataComponent />
    </React.Fragment>
  );
};

const TestTwo = () => {
  const connection = createMockConnection("Test Two");
  return (
    <React.Fragment>
      <p> Test Two : Check that the login function is called and it's value is displayed </p>
      <KataComponent connection={ connection }/>
    </React.Fragment>
  );
};

class TestThree extends React.Component{
  constructor(){
    super();
    this.state = {
      shouldMount : true,
      wasCleanupCalled : false,
      toggleId : null
    }
  };

  componentDidMount(){
    const toggleId = setInterval(() => {
      this.setState({ 
        shouldMount : !this.state.shouldMount,
        wasCleanupCalled : false
      });
    }, 2000);

    this.setState({ toggleId });
  }

  componentWillUnmount(){
    clearInterval( this.state.toggleId );
  };

  render(){
      const connection = createMockConnection("Test Three");

    const actualConnection = {
      ...connection,
      cleanup : async () => {
        this.setState({ wasCleanupCalled : true });
      }
    };
    
    const cleanupClassName = this.state.wasCleanupCalled ? "green" : "red";

    return (
      <React.Fragment>
        <p> This component needs to be constantly mounting and unmounting the component </p>
        <p className={cleanupClassName}> was cleanup called : { this.state.wasCleanupCalled ? "Yes" : "No" } </p>
        { this.state.shouldMount ?  <KataComponent connection={actualConnection} /> : <div> Component Unmounted </div> }
      </React.Fragment>
    );
  }
};

const TestFour = ( { children } ) => {
  const connection = createMockConnection("Test Four");

  const exampleChildren = [...Array(5)].map( ( _, index) => {
    return ( <p key={index}> This is child no : { index } </p> );
  });

  return (
    <React.Fragment>
      <p> This is an example of how the component handles children </p>
      <KataComponent connection={connection}>
        { exampleChildren }
      </KataComponent>
    </React.Fragment>
  );
};

const TestFive = () => {
  const connection = createMockConnection("Test Four");

  const ProblemChild = () => {
    throw new Error("This is the thrown error");

    return (
      <div> This component never renders </div>
    );
  };

  return (
    <React.Fragment>
      <p> Test Five : Component can report errors from children to the server </p>
      <ErrorBoundary>
        <KataComponent connection={connection}>
          <ProblemChild />
        </KataComponent>
      </ErrorBoundary>
    </React.Fragment>
  );
};

ReactDOM.render(
  (
    <App>
      <TestOne />
      <TestTwo />
      <TestThree />
      <TestFour />
      <TestFive />
    </App>
  ),
  document.getElementById("root")
);
