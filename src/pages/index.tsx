import React from "react";

import styles from './home.module.scss';


export default function Home() {
  return ( 
   <>

     <title> Home | ig.news</title>


    <main className={styles.contentContainer}>
      <section>
        <span> Hey Welcome</span>
        <h1>News about the <span>React</span>  World</h1>

        <p>Get acess to all the publications <br/>
        <span>for $ 9.90 month</span>
          </p>

      </section>
      <img src="/imagens/garotacodando.svg" alt="garota codando" />
      
     
      
          
    </main>

   </>
   
  )
}
