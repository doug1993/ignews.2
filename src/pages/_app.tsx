import { Header } from '../components/Header/index'
//SessionProvider from next-auth/react were modified version 4
import {SessionProvider as NextAuthProvider } from 'next-auth/react'
import '../styles/global.scss'


 
 export default function  MyApp({ 
  Component, 
  pageProps :{ session,...pageProps} ,
 }): JSX.Element{
  return(
    <NextAuthProvider session={session}>
      <Header/>
      <Component {...pageProps}  />

    
    </NextAuthProvider>
  )
}

