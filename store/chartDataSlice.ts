import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface chartDataType {
  categories: string[];
  values: number[];
}

const initialState = {
  chartData: [],
} as any;

const chartDataSlice = createSlice({
  name: "chartData",
  initialState,
  reducers: {
    fetchIntialValue: (state, action) => {
      state.chartData = action.payload;
    },
    changeChartData: (state, action) => {
      const chartName = action.payload.chartName;
      let data = JSON.parse(JSON.stringify(state.chartData));
      console.log(data);
      const data1 = data.map((chart: any) => {
        if (Object.keys(chart)[0] == chartName) {
          console.log(chart, action.payload);
          chart[chartName].values = action.payload.values;
          // chart[chartName].values = payload.values;
        }
        return chart;
      });
      state.chartData = data1;
    },
  },
});

export const { fetchIntialValue, changeChartData } = chartDataSlice.actions;

export default chartDataSlice.reducer;
