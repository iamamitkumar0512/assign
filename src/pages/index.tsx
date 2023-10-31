import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import index from "../styles/index.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
