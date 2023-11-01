import React, { useEffect, useState } from "react";
import styles from "../styles/form.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { changeChartData } from "../../store/chartDataSlice";
type data = {
  data1: {
    categories: string[];
    values: number[];
  };
  chartName: string;
};

function ChangeChartDataForm({ data1, chartName }: data) {
  const [data, setData] = useState([] as number[]);
  const labels: string[] = data1.categories;
  const intialValue = data1.values;

  useEffect(() => {
    setData(intialValue);
  }, [intialValue]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newData = [...data];
    newData[index] = parseFloat(event.target.value);
    setData(newData);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      changeChartData({
        chartName: chartName,
        values: data,
      })
    );
  };

  console.log(data);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      {labels.map((label, index) => (
        <div key={index}>
          <label>{label}:</label>
          <input
            value={data[index]}
            onChange={(event) => handleInputChange(index, event)}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ChangeChartDataForm;
