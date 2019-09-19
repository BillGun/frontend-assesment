import React, { Fragment } from "react";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import "./index.scss";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Section1 />
        <Section2 />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
