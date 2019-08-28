import React from "react";
import { render } from "@testing-library/react";

/*
  props :
    cleanup : 
      () => {}
*/
class TestComponent extends React.Component{
  constructor(){
    super();
    console.log("Component desu!");
  }

  componentWillUnmount(){
    console.log("COMPONENT OUTO!");
    this.props.cleanup();
  };

  render(){
    return ( 
      <div>
        This is the test component!
      </div>
    );
  }
};

describe("This is the first suite", () => {
  it("This is the first test!", () => {


    const mockCallback = jest.fn( x => x + 1 );

    const { container, unmount } = render(
      <TestComponent cleanup={ mockCallback } /> 
    );

    expect( container ).not.toBe( null );

    expect( mockCallback.mock.calls.length ).toBe( 0 );

    unmount();

    expect( mockCallback.mock.calls.length ).toBe( 1 );

  });
});
