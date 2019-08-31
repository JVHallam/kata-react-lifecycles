import React from "react";

export default function( { KataComponent, createMockConnection } ){
  const connection = createMockConnection("Test Two");
  return (
    <React.Fragment>
      <p> Test Two : Check that the login function is called and it's value is displayed </p>
      <KataComponent connection={ connection }/>
    </React.Fragment>
  );
};
