import React, { Component } from "react";

import GenericErrorBoundary from "./GenericErrorBoundary.js";

const App = ( { children } ) => {
  const childrenSection = React.Children.map( children, child => {
    return (
      <GenericErrorBoundary>
        <div className="child-wrapper">
          { child }
        </div>
      </GenericErrorBoundary>
    );
  });

  return (
    <div>
      { childrenSection }
    </div>
  );
};

export default App;
