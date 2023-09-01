import React, { useState } from "react";
import chartIc from "../assets/chartIc.svg";

const RowData = ({ data, openChartModal }) => {
  const desiredYears = ["2019", "2020", "2021", "2022"];
  const filteredValues = data?.values?.filter((value) =>
    desiredYears.includes(value.year)
  );
  return (
    <>
      <td className="ps-5" style={{ width: "35%" }}>
        {data?.nameEn}
      </td>
      {filteredValues.map((value, index) => (<td key={index}>{parseFloat(value.value).toFixed(2)}</td>))}
      <td style={{ cursor: "pointer" }} onClick={() => openChartModal(data)} >
        <img style={{ cursor: "pointer" }} src={chartIc} alt="" />
      </td>
    </>
  );
};
export default RowData;
