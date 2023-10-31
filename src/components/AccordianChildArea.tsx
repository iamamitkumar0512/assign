import { useState } from "react";
import { useAppSelector } from "../../store/store";
import DynamicDropdown from "./DropDown";
import BarCharts from "./BarCharts";
import AreaChart from "./AreaChart";
import ChangeChartDataForm from "./ChnageChartDataForm";
import styles from "../styles/accordianChild.module.scss";

const AccordianChildArea = () => {
  const chartData: any = useAppSelector((state) => state.chartData);
  const chartName: string[] = [];
  const [data, setData] = useState({
    categories: [],
    values: [],
  } as {
    categories: string[];
    values: number[];
  });
  chartData?.chartData.map((chart: any) => {
    chartName.push(Object.keys(chart)[0]);
  });
  console.log(chartName);
  const [childData, setChildData] = useState(chartName[0]);
  const handleChildData = (data: string) => {
    setChildData(data);
    chartData?.chartData.map((chart: any) => {
      if (Object.keys(chart)[0] == childData) {
        setData(chart[childData]);
      }
    });
  };

  return (
    <div className={styles.container}>
      <>
        <DynamicDropdown options={chartName} onData={handleChildData} />
        <AreaChart data={data} />
      </>
      <ChangeChartDataForm data1={data} chartName={childData} />
    </div>
  );
  // return <PieChart data={chartData} />;
};

export default AccordianChildArea;
