import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

import KataComponent from "../../index.js";
import App from "./components/App.js";

//This is dirty, there has to be a cleaner way?
import TestOne from "./components/tests/One.js";
import TestTwo from "./components/tests/Two.js";
import TestThree from "./components/tests/Three.js";
import TestFour from "./components/tests/Four.js";
import TestFive from "./components/tests/Five.js";

function createMockConnection( testName ){
  return {
    fetchDetails : ( id ) => {
      return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
          resolve("RetrievedUsername");
        }, 1000);
      });
    },

    cleanup : async () => {
      console.log(`${ testName } : Has called cleanup`);
    },
   
    reportError : async ( error ) => {
      console.log(`${testName} : Error ${ error } has been reported`);
    }
  };
};

ReactDOM.render(
  (
    <App>
      <TestOne KataComponent={KataComponent} createMockConnection={createMockConnection} />
      <TestTwo KataComponent={KataComponent} createMockConnection={createMockConnection} />
      <TestThree KataComponent={KataComponent} createMockConnection={createMockConnection} />
      <TestFour KataComponent={KataComponent} createMockConnection={createMockConnection} />
      <TestFive KataComponent={KataComponent} createMockConnection={createMockConnection} />
    </App>
  ),
  document.getElementById("root")
);
