import React, { Component } from "react";

class KataComponent extends Component{
  constructor(){
    super();
    this.state = {
      username : null,
      message : "Logging in",
      error : null
    }
  }
  
  componentDidMount(){
    this.props.connection.fetchDetails( this.props.id )
    .then( username => {
      this.setState({ 
        username,
        message : `Welcome ${username}`
      });

    });
  }

  static getDerivedStateFromError( error ){
    return {
      hasError : true,
      error : error
    }
  }

  componentDidCatch( error, info ){
    this.props.connection.reportError( this.state.error );
  }

  componentWillUnmount(){
    this.props.connection.cleanup();
  }

  render(){
    const message = this.state.hasError ? this.state.error : this.state.message;
    const childSection = this.state.hasError ? <div> Error! </div> : this.props.children;

    return ( 
      <div>
        <p id="message"> { message } </p>
        <div id="children">
          { childSection } 
        </div>
      </div>
    );
  }
};

KataComponent.defaultProps = {
  id : "string",
  connection : {
    fetchDetails : async () => {},
    cleanup : async () => {},
    reportError : async () => {},
  }
};

export default KataComponent;
