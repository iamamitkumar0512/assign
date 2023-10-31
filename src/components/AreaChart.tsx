import React, { useEffect } from "react";
import * as echarts from "echarts";

type data = {
  data: {
    categories: string[];
    values: number[];
  };
};

const AreaChart = ({ data }: data) => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("areaCharts"));
    chart.setOption({
      title: { text: "Area Chart" },
      tooltip: {},
      xAxis: { data: data.categories },
      yAxis: {},
      series: [
        {
          data: data.values,
          type: "line",
          areaStyle: {},
        },
      ],
    });
  }, [data]);

  return <div id="areaCharts" style={{ width: "40%", height: "400px" }} />;
};

export default AreaChart;
