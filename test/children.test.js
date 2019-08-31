import React from "react";
import KataComponent from "../src/kataComponent.js";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter : new Adapter() });

describe("Testing that the component can properly handle children", () => {
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


    expect( testChild.length ).toBe( 1 );
  });
});
