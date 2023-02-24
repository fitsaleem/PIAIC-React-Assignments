// main logic of application is in this file. we will link external components to this.

import React, { useState } from "react";
import { Increment } from "./components/Increment";
const App = () => {
  const [count, setCount] = useState(0)
  
  return (<>
    <div className="container">

      <div className="heading">
        <h1>Counter App</h1>
      </div>

      <div className="inputfield">
       <span>{count}</span>
      </div>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increment ++</button>
        <button onClick={() => setCount(count - 1)}disabled={count === 0}>Decrement --</button>
        <button onClick={() => setCount(0)}disabled={count === 0}>Reset</button>
      </div>

    </div>
  </>)
};

export default App;