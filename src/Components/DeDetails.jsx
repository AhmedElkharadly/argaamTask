import React, { useState } from "react";
import "./styles.css";
import chartIc from "../assets/chartIc.svg";

import ChartModal from "./chart";

const DeDetails = ({ data }) => {
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);
  const desiredYears = ["2019", "2020", "2021", "2022"];
  const filteredValues = data?.values?.filter((value) =>
  desiredYears.includes(value.year)
);

  const openChartModal = () => {
    setIsChartModalOpen(true);
  };

  const closeChartModal = () => {
    setIsChartModalOpen(false);
  };

  return (
    <>

      <td className="ps-5" style={{ width: "35%" }}>
        {data?.nameEn}
      </td>
      {filteredValues.map((value, index) => (
        <td key={index}>{parseFloat(value.value).toFixed(2)}</td>
      ))}
      <td className="" style={{ cursor: "pointer" }} onClick={openChartModal}>
        <img style={{ cursor: "pointer" }} src={chartIc} alt="" />
      </td>
      {isChartModalOpen && <ChartModal data={data} isOpen={isChartModalOpen} onClose={closeChartModal} />}
    </>
  );
};
export default DeDetails;
