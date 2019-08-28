import React, { Component } from "react";

/*
  props:
    connection : {
      this is an object, with methods, through which, the user will make calls to the service with.

      getUser = async () => {}
    }
*/
export default class KataComponent extends Component{
  constructor(){
    super();
    this.state = { username : null }
  }

  componentDidMount(){
    console.log("Component Did Mount!");

    this.props.connection.getUser()
      .then( username => {
        console.log("Component did mount update!");
        this.setState({ username });
      });
  }

  componentDidUpdate(){
    console.log("Component Did update!");
  }

  render(){
    const message = this.state.username ? `Hello! ${ this.state.username }` : `You're not logged in!`;
    return (
      <div> 
        <div>
          <p id="message"> { message } </p>
        </div>
      </div>
    );
  };
};

KataComponent.defaultProps = {
  connection : {
    getUser : async () => {
      return await new Promise( resolve => {
        setTimeout( () => resolve( "Retrieved Username"), 1000 );
      });
    } 
  }
}
