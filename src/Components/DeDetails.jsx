import React, { useState } from "react";
import "./styles.css";
import chartIc from "../assets/chartIc.svg";
import Chart from "./chart";

const DeDetails = ({ data }) => {
  const desiredYears = ["2019", "2020", "2021", "2022"];
  const filteredValues = data?.values?.filter((value) =>
    desiredYears.includes(value.year)
  );

  

  return (
    <>
      <td className="ps-5" style={{ width: "35%" }}>
        {data?.nameEn}
      </td>
      {filteredValues.map((value, index) => (
        <td key={index}>{parseFloat(value.value).toFixed(2)}</td>
      ))}
      <td className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <Chart
          labels={desiredYears}
          values={filteredValues}
          title={data.nameEn}
        />
        <img style={{ cursor: "pointer" }} src={chartIc} alt="" />
      </td>
    </>
  );
};
export default DeDetails;
