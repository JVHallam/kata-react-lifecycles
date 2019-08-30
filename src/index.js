import React from "react";
import ReactDOM from "react-dom";

import KataComponent from "./kataComponent.js";

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
  };

  render(){
    const connection = createMockConnection("Test Three");

    return (
      <React.Fragment>
        <p> This component needs to be constantly mounting and unmounting the component </p>
        <KataComponent connection={connection} />
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
      <KataComponent connection={connection}>
        <ProblemChild />
      </KataComponent>
    </React.Fragment>
  );
};

const App = ( { children } ) => {
  const childrenSection = React.Children.map( children, child => {
    return (
      <React.Fragment>
        <div className="child-wrapper">
          { child }
        </div>
        <hr />
      </React.Fragment>
    );
  });

  return (
    <div>
      { childrenSection }
    </div>
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
