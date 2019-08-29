import React, { Component } from "react";

/*
  props:
    connection : {
      //To be called to fetch the initial details of the user
      fetchDetails : async ( sessionId ) => { returns username }

      //To be called when the component unmounts
      cleanup : async( sessionId ) => { }
    }

    sessionId : string ( The id of the current users session )

  children :

*/
export default class KataComponent extends Component{
  constructor(){
    super();
    this.state = { 
      username : null,
      message : "You're not yet logged in",
      didCatch : false
    }
  }

  componentDidMount(){
    this.setState({ message : "Logging you in now" });

    this.props.connection.fetchDetails( this.props.sessionId )
      .then( username => {
        this.setState({ username });
        this.setState({ message : `Hello ${username}`});
      });

  }

  componentDidUpdate( prevProps, prevState, snapshot ){
  }

  componentWillUnmount(){
    //Do the cleanup
    this.props.connection.cleanup( this.props.sessionId );
  }

  static getDerivedStateFromError( error ){
    console.log("Getting derived state");
    return {
      message : "There was a problem rendering the children",
      didCatch : true
    }
  }

  componentDidCatch( error, info ){
    console.log("Component did catch");
  }

  render(){
    const childSection = this.state.didCatch ? null : this.props.children;

    return (
      <div> 
        <div>
          <p id="message"> { this.state.message } </p>
        </div>
        <div>
          <p> these are the children </p>
          { childSection }
        </div>
      </div>
    );
  };
};

KataComponent.defaultProps = {
  connection : {
    cleanup : async ( sessionId ) => { },
    fetchDetails : async ( sessionId ) => null
  },

  username : null
}
