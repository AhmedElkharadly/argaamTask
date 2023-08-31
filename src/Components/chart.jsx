import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = ({ labels, values, title }) => {
  const options = {
    chart: {
        alignTicks: false
    },
title: {
      text: title,
      align: "left",
    },
    xAxis: {
      categories: labels, 
    },
    series: [
      {
        name: title,
        data: values,
      },
    ],
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
