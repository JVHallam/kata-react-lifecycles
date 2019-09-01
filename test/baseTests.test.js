import React from "react";
import KataComponent from "../index.js";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

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
    expect( message.text() ).toMatch( /logging/i );
  });
});
