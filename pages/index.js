import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cake Bakery </title>
        <meta name="description" content="Best Cake In Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
    </div>
  );
}
