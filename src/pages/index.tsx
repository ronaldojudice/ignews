import Head from 'next/head';
import styles from "../../styles/global.scss";


export default function Home() {
  return ( 
    <>
    <Head>
    <title>ig.news Home</title>
    </Head>

   <h1 className={styles.title}>Home
     <span>Manchester United</span>
   </h1>   

    
    </>
  
   
  )
}
