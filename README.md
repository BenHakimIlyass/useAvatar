# useAvatar
Created with CodeSandbox
useAvatar is a custom react hook, that return the first letter of (firstname and lastname) given as string.
# Usage
```javascript
import React from "react";
import ReactDOM from "react-dom";

import useAvatar from "./useAvatar.js";
import "./styles.css";

function App() {
  const [res, color] = useAvatar("Ilyass benhakim");

  return (
    <div className="App" style={{ background: color }}>
      <h1>{res}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```
