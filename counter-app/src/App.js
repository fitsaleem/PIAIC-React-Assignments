// main logic of application is in this file. we will link external components to this.

import React from "react";
import { Increment } from "./components/Increment";
const App = () => {
  return (<>
    <div className="container">

      <div className="heading">
        <h1>Counter App</h1>
      </div>

      <div className="inputfield">
        <input type="number" />
      </div>

      <div className="buttons">
        <button id="increment" onClick={Increment}>Increment ++</button>
        <button>Decrement --</button>
        <button>Reset</button>
      </div>

    </div>
  </>)
};

export default App;