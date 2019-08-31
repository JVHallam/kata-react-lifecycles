import React from "react";

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

export default function( { KataComponent, createMockConnection } ){
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
