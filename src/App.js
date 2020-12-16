// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Componentes
import Header from "./components/Header";
import Body from "./components/Body";

// Resources
import "./App.css";

function App({ children }) {
  return (
    <div className="App">
      <Header />
      <Body body={children} />
    </div>
  );
}

export default App;

// Props
App.propTypes = {
  children: PropTypes.object.isRequired,
};
