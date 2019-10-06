import React from "react";
import ReactDOM from "react-dom";

import useAvatar from "./useAvatar.js";
import "./styles.css";

function App() {
  const [res, color] = useAvatar("pfree brooo");

  return (
    <div className="App" style={{ background: color }}>
      <h1>{res}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
