import React from "react";
import Details from "./Details";
import "./styles.css";
import chartIc from "../assets/chartIc.svg";
const Table = ({ data }) => {
  return (
    <div className="container">
      <div className="col-md-12">
        <div className="panel panel-default">
          <div className="panel-heading">financial Ratio Fields Groups</div>
          <div className="panel-body">
            <table className="table table-condensed table-striped">
              <thead className="table-dark">
                <tr>
                  <th className="px-4" style={{width:"35%"}}>Details</th>
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
                  <Details key={index} data={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
