import Head from "next/head";
import styles from "../styles/Home.module.css";
import Home from "shared-ui/components/Home";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site 1</title>
      </Head>

      <Home>Site1</Home>
    </div>
  );
}
