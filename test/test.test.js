import React from "react";
import KataComponent from "../src/kataComponent.js";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter : new Adapter() });

describe("Testing the Kata Components will mount", () => {
  it("Test from earlier today", async () => {
    //jest.useFakeTimers();

    const wrapper = mount( <KataComponent /> );

    //await jest.runOnlyPendingTimers();
    
    await wrapper.instance().componentDidUpdate();

    console.log("End of the function");
  });
  /*
    What i want to do:  
    * Have a component make an api call
    * Check the components state after the api call
    * clearly need to take a new approach

    DRAW OUT THE ENTIRE SITUATION BEFORE YOU DO ANYMORE!
  */

  it("This is another attempt, using done", done => {
    console.log("===============");
    const connection = {
      getUser : async () => {
        console.log("Get user function called!");
        return "Username";
      }
    };

    const wrapper = mount( <KataComponent connection={connection}/> );

    setTimeout( () => {
      wrapper.update();
      console.log("End of test function");
      console.log(wrapper.debug());
      done();
    });
  });
});
