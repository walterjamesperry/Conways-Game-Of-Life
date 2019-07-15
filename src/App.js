import React from "react";
import ExplanatoryContainer from "./components/ExplanatoryContainer";
import GridContainer from "./components/GridContainer";
import RulesContainer from "./components/RulesContainer";
import Title from "./components/Title";

function App() {
  return (
    <div className="app_container">
      <Title />
      <div className="mid_section_container">
        <GridContainer />
        <RulesContainer />
      </div>
    </div>
  );
}

export default App;
