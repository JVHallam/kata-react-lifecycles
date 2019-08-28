import React from "react";
import ReactDOM from "react-dom";

import KataComponent from "./kataComponent.js";

const TestOne = () => {
  return (
    <div>
      <div>
        This is test one!
      </div>
      <div>
        <KataComponent />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div>
        This is the rendered app!
      </div>
      <TestOne />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
