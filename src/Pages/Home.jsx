import React from "react";
import Table from "../Components/Table";
import jsonData from "../Data.json";

function Home() {

  return (
    <div className="App">
      <Table data={jsonData?.financialRatioFieldsGroups} />
    </div>
  );
}

export default Home;
