import Head from "next/head";
import { Inter } from "next/font/google";
import index from "../styles/index.module.scss";
import { createClient } from "contentful";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchIntialValue } from "../../store/chartDataSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ chartData }: any) {
  console.log(chartData);
  const dispatch = useDispatch<AppDispatch>();
  dispatch(fetchIntialValue(chartData));
  return (
    <>
      <Head>
        <title>Akhr Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={index.container}>
        <div className={index.logoHeading}>
          <img
            className={index.brandLogo}
            src="/assets/eshkon.png"
            alt="brandPic"
          />
          <h1>Cutting edge solutions for all things web & cloud computing.</h1>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "chart",
  });

  const filteredChartdata = res.items.map((chart) => {
    return chart.fields.chartData;
  });

  return {
    props: {
      chartData: filteredChartdata,
    },
  };
}
