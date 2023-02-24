// main logic of application is in this file. we will link external components to this.

import React from "react";
const App = () => {
  return(<>
     <div className="container">
       <h1>Counter App</h1>

      <input type="number" />
      
      <button>Increment</button>
      <button>Decrement</button>
      </div>
  </>)
};

export default App;