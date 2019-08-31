import React, { Component } from "react";

/*
  props : {
    id,
    connection : {
      fetchDetails,
      cleanup,
      reportError
    }
  }
*/ 
export default class KataComponent extends Component{

  constructor(){
    super();
    this.state = {
      message : "Logging you in now",
      error : null,
      username : null
    }
  }

  componentDidMount(){
    //Call the 
    /*
    this.props.connection.fetchDetails( this.props.id )
    .then( username => {
      this.setState({
        message : `Hello ${username}`
      });
    });
    */
    console.log( this.props );
  }


  render(){
    return (
      <div>
        <p id="message">
          Logging you in now
        </p>
      </div>
    );
  }
};
