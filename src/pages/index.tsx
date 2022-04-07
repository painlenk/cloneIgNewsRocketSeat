import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";
export default function Home() {
  return (
    <>
      <Head>
        <title>IG | News</title>
      </Head>

      <main className={styles.mainContainer}>
        <section className={styles.hero}>
          <span>👏 hey, welcome</span>

          <h1>News about the React world</h1>

          <p>
            get Acess to all publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
