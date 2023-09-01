import React, { useState } from "react";
import Details from "./Details";
import chartIc from "../assets/chartIc.svg";

import ChartModal from "./chart";
const Table = ({ data }) => {
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);
  const [chartData, setChartData] = useState();
  const openChartModal = (data) => {
    setChartData(data);
    setIsChartModalOpen(true);
  };
  const closeChartModal = () => {
    setIsChartModalOpen(false);
  };
  const desiredYears = ["2019", "2020", "2021", "2022"];

  return (
    <div className="position-relative"
    >
      <div className="container">
        <div className="col-md-12">
          <h1 className="panel-heading text-center">Financial Ratio Fields Groups</h1>
          <table className="table table-condensed table-striped">
            <thead className="table-dark">
              <tr>
                <th className="datails"> Details </th>
                {desiredYears?.map((year) => (<th > {year} </th>))}
                <th>
                  <img src={chartIc} alt="" />
                </th>
              </tr>
            </thead>
            <tbody className="accordion" id="accordionExample">
              {data?.map((item, index) => (
                <Details key={index} data={item} openChartModal={openChartModal} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isChartModalOpen && (
        <div>
          <div className="vw-100 vh-100 position-fixed top-0 bg-dark opacity-50" onClick={closeChartModal}></div>
          <ChartModal data={chartData} isOpen={isChartModalOpen} onClose={closeChartModal} />
        </div>)
      }
    </div>
  );
};

export default Table;
