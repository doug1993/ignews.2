import Head from 'next/head'
import { SubBtn } from '../components/SubsBtn/index'
import styles from '../styles/home.module.scss'
import { GetStaticProps } from 'next'
import { stripe } from '../services/stripe'

interface HomeProps{
  product:{
    priceId: string;
    amount: number;
  }
}

export default function Home({product}) {
 return(
  <>
   <Head>
    <title> ignews | Home </title>
   </Head>
   <main className={styles.divHome}>
    <section className={styles.divCon}>
      <span> Hey, Welcome</span>
      <h1>News about the <span>React</span> world. </h1>
      <p>Get access to all the publicatins 
      <span> for {product.amount} per month</span>
      </p>
      <SubBtn priceId={''}/>
    </section>
    <img src="/images/imgWom.svg" />
   </main>
 
   
  </>
    
 )
}
 export const getStaticProps: GetStaticProps= async()=>{
  const price = await stripe.prices.retrieve('price_1Lx9ujK8fEp6xiJyQuzDeydT',{
    expand: ['product']
  })

  const product={
    priceId: price.id,
    amount: price.unit_amount / 100,
  }
return{
  props:{ product,  },
  revalidate: 60 * 60 * 24//24hours
}

 }