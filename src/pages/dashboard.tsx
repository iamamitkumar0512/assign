import React from "react";
import { useSession } from "next-auth/react";
import Card from "@/components/Card";
import Accordion from "@/components/Accordian";
import BarCharts from "@/components/BarCharts";
import AreaChart from "@/components/AreaChart";
import PieChart from "@/components/PieChart";
import { __next_app__ } from "next/dist/build/templates/app-page";
import AccordianChild from "@/components/AccordianChild";
import AccordianChildBar from "@/components/AccordianChild";
import AccordianChildPie from "@/components/AccordianChildPie";
import AccordianChildArea from "@/components/AccordianChildArea";

const dashboard = () => {
  const session = useSession();
  console.log(session);
  const chartData = {
    categories: [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
    ],
    values: [20, 40, 10, 30, 50],
  };

  return (
    <>
      <Card session={session} />
      <div>
        <Accordion title="Pie Chart" content={<AccordianChildPie />} />
        <Accordion title="Area Chart" content={<AccordianChildArea />} />
        <Accordion title="Bar Chart" content={<AccordianChildBar />} />
      </div>
    </>
  );
};

export default dashboard;
