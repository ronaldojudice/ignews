/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SubscribeButton } from "../components/SubscribeButton";
import { GetStaticProps } from 'next';

import styles from './home.module.scss';
import { stripe } from "../services/stripe";


interface HomeProps{
  product:{
    priceId:string;
    amount:number;
  }

}

export default function Home({product}: HomeProps) {
  return ( 
   <>

     <title> Home | ig.news</title>


    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span> Hey, Welcome</span>
        <h1>News about <br />the<span> React</span>  World.</h1>

        <p>Get acess to all the publications <br/>
        <span>for {product.amount} month</span>
        </p>

        <SubscribeButton priceId={product.priceId}/>

      </section>
      <img src="/imagens/garotacodando.svg" alt="garota codando"/>  
                
    </main>

   </>
   
  )
}

export const getStaticProps: GetStaticProps = async () =>{
        const price = await stripe.prices.retrieve('price_1JYAbhBeF9zo3M3tF3Iqdi9w')

        const product = {
          priceId:price.id,
          amount: new Intl.NumberFormat('en-US',{
            style:'currency',
            currency: 'USD',
          }).format(price.unit_amount / 100)
        };
  return {
    props:{
      product,
    },
    revalidate: 60*60*24      
  }
}