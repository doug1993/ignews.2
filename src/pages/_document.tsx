/* eslint-disable @next/next/no-title-in-document-head */
import Document, {Html,Head,Main,NextScript}from 'next/document'

export default class MyDocument extends Document{
    render(){
     return(

     <Html>
      <Head>
        
      </Head>
      <body>
       <Main/>
       <NextScript/>
      </body>
     </Html>

     )
    }
}