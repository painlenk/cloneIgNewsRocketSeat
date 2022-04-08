import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { GetStaticProps } from "next";
import styles from "./home.module.scss";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({product}: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const price = await  stripe.prices.retrieve('price_1Klz2vJnZ8uwWd206af9rENg')
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount,)
  }

  return {
    props: {
      product
    }
  }

}
