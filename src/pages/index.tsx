/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from './home.module.scss';


export default function Home() {
  return ( 
   <>

     <title> Home | ig.news</title>


    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span> Hey, Welcome</span>
        <h1>News about <br />the<span> React</span>  World.</h1>

        <p>Get acess to all the publications <br/>
        <span>for $ 9.90 month</span>
        </p>

        <SubscribeButton/>

      </section>
      <img src="/imagens/garotacodando.svg" alt="garota codando"/>  
                
    </main>

   </>
   
  )
}
