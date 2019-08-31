import React from "react";

class GenericErrorBoundary extends React.Component{
  constructor(){
    super();
    this.state = {
      hasError : false,
      error : null
    }
  }

  static getDerivedStateFromError( error ){
    return { 
      hasError : true,
      error : error.message
    }
  }

  render(){
    if( this.state.hasError ){
      return ( 
        <div className="child-wrapper">
          <p>
            Oops, something went wrong with your component:
          </p>
          <p>
            { this.state.error }
          </p>
        </div>
      );
    }

    return ( this.props.children );
  }
};

export default GenericErrorBoundary;
