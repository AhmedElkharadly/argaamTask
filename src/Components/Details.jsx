import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./styles.css";
import Chart from "./chart";
import RowData from "./rowData";
const Details = ({ data, openChartModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <tr className={`accordion-item`}>
        <td
          style={{ cursor: "pointer" }}
          className="accordion-header "
          colSpan={6}
        >
          <button
            className={`accordion-button ${isOpen ? "" : "collapsed"}`}
            type="button"
            onClick={toggleOpen}
          >
            {data?.fieldGroupEn}
          </button>
        </td>
      </tr>
      {data?.financialRatioFieldsGroupFields?.map((Fields, index) => (
        <tr
          key={index}
          className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        >
          <RowData data={Fields} openChartModal={openChartModal} />
        </tr>
      ))}
    </>
  );
};

export default Details;
