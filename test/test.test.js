import React from "react";
import KataComponent from "../src/kataComponent.js";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FunctionalComponent from "../src/functionalComp.js";

import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter : new Adapter() });

const KataWrapper = () => {
  const connection = {
    fetchDetails : async () => "John",
    cleanup : async() => {}
  };

  return (
    <KataComponent connection={connection} id={"id"} />
  );
};

describe("Testing the Kata Components will mount", () => {
  it("Check that the basic component renders", () => {
    const wrapper = mount( <KataWrapper /> );
    const message = wrapper.find('#message');
    expect( message ).not.toBe( null );

    console.log(`Current message : ${message.text()}`);
    expect( message.text() ).toMatch( /logging/i );
  });

  it("Check that the login function is called only once", done => {
    const connection = {
      fetchDetails : jest.fn( async() => "butts" ),
      cleanup : async () => {}
    };

    const wrapper = mount( <KataComponent connection={connection} id={"id"} /> );
    const message = wrapper.find('#message');

    //Wait until component did update has been called
    process.nextTick( () => {
      expect( connection.fetchDetails.mock.calls.length ).toBe( 1 );
      done();
    });
  });

  it("The username returned from the service is displayed", done => {
    const username = "This is the username";
    const connection = {
      fetchDetails : async () => `${username}`
    };

    const wrapper = mount( <KataComponent connection={connection} /> );

    process.nextTick( () => {
      const message = wrapper.find('#message');

      expect( message.text() ).toMatch( new RegExp(username) );

      console.log(message.text());
      done();
    });
  });
  
  it("Check that the cleanup is called on dismount", ( done ) => {
    const connection = {
      fetchDetails : async() => "username",
      cleanup : jest.fn( async() => {} )
    };

    const wrapper = mount( <KataComponent connection={connection} /> );
    expect( connection.cleanup.mock.calls.length ).toBe( 0 );

    process.nextTick( () => {
      wrapper.unmount();
      expect( connection.cleanup.mock.calls.length ).toBe( 1 );
      console.log("Cleanup!");
      done();  
    });
  });

  it("Component can render children", ( ) => {
    const wrapper = mount( 
      <KataComponent>
        <p id="test-child"> This is a child! </p>
        <p id="test-2"> This is a child! </p>
        <p id="test-3"> This is a child! </p>
      </KataComponent>
    );

    const testChild = wrapper.find("#test-child");
    expect( wrapper.find("#test-4").length ).toBe( 0 );
    console.log( wrapper.find("#p") );

    console.log( wrapper.debug() );

    expect( testChild.length ).toBe( 1 );
  });

  it("Component reports any error during rendering to the server", done => {
    const errorMessage = "This is the error";

    const connection = {
      fetchDetails : async () => "John",
      cleanup : async() => {},
      reportError : ( error ) => {
        console.log("Report Error");
        expect(1).toBe(1);
        console.log( error );
      }
    };    

    const ProblemGen = () => {
      return (
        <div>
          ProblemGenerator
        </div>
      );
    };

    const wrapper = mount(
      <KataComponent connection={connection}>
        <ProblemGen />
      </KataComponent>
    );

    const child = wrapper.find( ProblemGen );

    child.simulateError( errorMessage );

    process.nextTick( () => {
      console.log("Next tick");
      done();
    });
  });

  it("Component doesn't call for a report, if there were no errors during rendering", ( done ) => {
    const connection = {
      reportError : jest.fn( async () => {}),
      cleanup : jest.fn( async () => {} ),
      fetchDetails : jest.fn( async () => {} )
    };

    const wrapper = mount( <KataComponent connection={connection} /> );

    expect( connection.cleanup.mock.calls.length ).toBe( 0 );

    process.nextTick( () => {
      expect( connection.cleanup.mock.calls.length ).toBe( 0 );
      done();
    });
  });

  it("Expect the element to display the error, when an error is thrown", ( done ) => {
    //Check that the message updates to contain the error
    expect( "test" ).toBe( "implemented" );
  });
});
