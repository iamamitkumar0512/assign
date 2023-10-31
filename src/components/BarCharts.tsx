import React, { useEffect } from "react";
import * as echarts from "echarts";

type data = {
  data: {
    categories: string[];
    values: number[];
  };
};

const BarCharts = ({ data }: data) => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("barCharts"));
    chart.setOption({
      title: { text: "Bar Chart" },
      tooltip: {},
      xAxis: { data: data.categories },
      yAxis: {},
      series: [
        {
          name: "Value",
          type: "bar",
          data: data.values,
        },
      ],
    });
  }, [data]);

  return <div id="barCharts" style={{ width: "40%", height: "400px" }} />;
};

export default BarCharts;
