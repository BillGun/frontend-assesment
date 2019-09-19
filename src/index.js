import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import ReactApp from "./App";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <ReactApp />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
