import Head from 'next/head'
import { SubBtn } from '../components/SubsBtn/SubscribeBtn'
import styles from '../styles/home.module.scss'

export default function Home() {
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
      <span> for 9.9 per month</span>
      </p>
      <SubBtn/>
    </section>
    <img src="/images/imgWom.svg" />
   </main>
 
   
  </>
    
 )
}
