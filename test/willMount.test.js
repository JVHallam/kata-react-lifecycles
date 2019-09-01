import React from "react";
import KataComponent from "../index.js";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter : new Adapter() });

describe("Testing the component handles will mount situations", () => {
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
      expect( message.text() ).not.toMatch( /logging/ );

      done();
    });
  });
});
