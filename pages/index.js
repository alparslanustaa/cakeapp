import Head from "next/head";
import Image from "next/image";
import Featured from "../components/featured";
import styles from "../styles/Home.module.css";
import CakeList from "../components/CakeList";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cake Bakery </title>
        <meta name="description" content="Best Cake In Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <CakeList />
    </div>
  );
}
