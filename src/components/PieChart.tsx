import React, { useEffect } from "react";
import * as echarts from "echarts";

type data = {
  data: {
    categories: string[];
    values: number[];
  };
};

const PieChart = ({ data }: data) => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("pieChart"));
    chart.setOption({
      title: { text: "Pie Chart Example" },
      tooltip: { trigger: "item" },
      series: [
        {
          name: "Data",
          type: "pie",
          radius: "80%",
          center: ["50%", "60%"],
          data: data.values.map((value, index) => ({
            value,
            name: data.categories[index],
          })),
        },
      ],
    });
  }, [data]);

  return <div id="pieChart" style={{ width: "100%", height: "400px" }} />;
};

export default PieChart;
