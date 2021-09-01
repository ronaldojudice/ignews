import Document,{Html,Head,Main} from 'next/document';


export default class MyDocument extends Document(){
  render(){
    return(
      <Html>
      <Head>
       
        <title>ignews</title>
      </Head>
      <body>
         <Main/>
      </body>
      </Html>
    )
  }   
}