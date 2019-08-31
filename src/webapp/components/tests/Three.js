import React from "react";

class TestThree extends React.Component{
  constructor(){
    super();
    this.state = {
      shouldMount : true,
      wasCleanupCalled : false,
      toggleId : null
    }
  };

  componentDidMount(){
    const toggleId = setInterval(() => {
      this.setState({ 
        shouldMount : !this.state.shouldMount,
        wasCleanupCalled : false
      });
    }, 2000);

    this.setState({ toggleId });
  }

  componentWillUnmount(){
    clearInterval( this.state.toggleId );
  };

  render(){
      const connection = this.props.createMockConnection("Test Three");

    const actualConnection = {
      ...connection,
      cleanup : async () => {
        this.setState({ wasCleanupCalled : true });
      }
    };
    
    const cleanupClassName = this.state.wasCleanupCalled ? "green" : "red";

    return (
      <React.Fragment>
        <p> This component needs to be constantly mounting and unmounting the component </p>
        <p className={cleanupClassName}> was cleanup called : { this.state.wasCleanupCalled ? "Yes" : "No" } </p>
        { this.state.shouldMount ?  <this.props.KataComponent connection={actualConnection} /> : <div> Component Unmounted </div> }
      </React.Fragment>
    );
  }
};

TestThree.defaultProps = {
  //Should be passed down during the tests phase.
  createMockConnection : () => {}
};

export default TestThree;
