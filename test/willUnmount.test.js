import React from "react";
import KataComponent from "../src/kataComponent.js";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter : new Adapter() });

describe("Testing that the component handles unmounting gracefully", () => {
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
      done();  
    });
  });
});
