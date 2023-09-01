import "./App.css";
import React from "react";
import Table from "./Components/Table";
import jsonData from "./Data.json";

function App() {
  return (
    <div className="App">
      <Table data={jsonData?.financialRatioFieldsGroups} />
    </div>
  );
}

export default App;
