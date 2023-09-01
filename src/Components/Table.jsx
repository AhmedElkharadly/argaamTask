import React, { useState } from "react";
import Details from "./Details";
import "./styles.css";
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

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div className="container">
        <div className="col-md-12">
          <div className="panel panel-default">
            <h1 className="panel-heading text-center">Financial Ratio Fields Groups</h1>
            <div className="panel-body">
              <table className="table table-condensed table-striped">
                <thead className="table-dark">
                  <tr>
                    <th className="px-4" style={{ width: "35%" }}>
                      Details
                    </th>
                    <th>2019</th>
                    <th>2020</th>
                    <th>2021</th>
                    <th>2022</th>
                    <th>
                      <img src={chartIc} alt="" />
                    </th>
                  </tr>
                </thead>
                <tbody className="accordion" id="accordionExample">
                  {data?.map((item, index) => (
                    <Details
                      key={index}
                      data={item}
                      openChartModal={openChartModal}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isChartModalOpen && (
        <div  >
          <div
            style={{
              height: "100dvh",
              width: "100dvw",
              backgroundColor: "gray",
              opacity: 0.5,
              position: "fixed",
              top: 0,
              overflow: "hidden"
            }}
            onClick={closeChartModal}
          ></div>
            <ChartModal
              data={chartData}
              isOpen={isChartModalOpen}
              onClose={closeChartModal}
            />
        </div>
      )}
    </div>
  );
};

export default Table;
