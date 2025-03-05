import { useState } from "react";

function App() {
  let count = 0; 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => count = count + 1}>Increase</button>
    </div>
  );
}

export default App;
