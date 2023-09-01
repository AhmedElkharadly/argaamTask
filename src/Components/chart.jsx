import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsAccessibility from "highcharts/modules/accessibility"; // Import the accessibility module
import HighchartsReact from "highcharts-react-official";

// Initialize the accessibility module
HighchartsAccessibility(Highcharts);

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
          align: "center",
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
    <div
      tabIndex="-1"
      aria-hidden={!isOpen}
      className="centered-modal"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body"  >
            {isOpen && (
  
                <HighchartsReact
                  highcharts={Highcharts}
                  options={chartOptions}
                />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartModal;
