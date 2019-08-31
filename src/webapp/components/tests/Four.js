import React from "react";

export default function( { children, createMockConnection, KataComponent } ){
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
