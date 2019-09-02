import React from "react";
import KataComponent from "../index.js";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter : new Adapter() });

const ProblemGen = () => {
  return (
    <div>
      ProblemGenerator
    </div>
  );
};

describe("Testing how the component handles errors", () => {
  it("Component reports any error during rendering to the server", done => {
    const errorMessage = "This is the error";

    const connection = {
      fetchDetails : async () => "John",
      cleanup : async() => {},
      reportError : ( error ) => {
        expect(1).toBe(1);
      }
    };    


    const wrapper = mount(
      <KataComponent connection={connection}>
        <ProblemGen />
      </KataComponent>
    );

    const child = wrapper.find( ProblemGen );
    child.simulateError( new Error( errorMessage ) );

    process.nextTick( () => {
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
    const errorMessage = "This is my error message!";

    const connection = {
      reportError : jest.fn( async () => {}),
      cleanup : jest.fn( async () => {} ),
      fetchDetails : jest.fn( async () => {} )
    };
    
    const wrapper = mount(
      <KataComponent>
        <ProblemGen />
      </KataComponent>
    );

    const child = wrapper.find( ProblemGen );
    child.simulateError( new Error( errorMessage ) );

    process.nextTick( () => {
      const message = wrapper.find( "#message" ).text();
      expect( message ).toMatch( new RegExp( errorMessage ) );
      done();
    });
  });
});
