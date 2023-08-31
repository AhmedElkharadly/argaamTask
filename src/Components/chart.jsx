import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartModal = ({ data, isOpen, onClose }) => {
  const desiredYears = ["2019", "2020", "2021", "2022"];
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    if (isOpen) {
      const filteredValues = data?.values?.filter((value) =>
        desiredYears.includes(value.year)
      );

      const myValues = filteredValues?.map((val) => Number(val.value));

      setChartOptions({
        chart: {
          alignTicks: false,
        },
        title: {
          text: data?.nameEn,
          align: "left",
        },
        xAxis: {
          categories: desiredYears,
        },
        series: [
          {
            name: data?.nameEn,
            data: myValues,
          },
        ],
      });
    }
  }, [data, isOpen]);

  return (
    <div className={`modal fade ${isOpen ? "show" : ""}`} tabIndex="-1" aria-hidden={!isOpen}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {isOpen && (
              <div>
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartModal;
