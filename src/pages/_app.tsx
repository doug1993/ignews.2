import { AppProps} from 'next/app' //adicionado para configurar tipagem
import { Header } from '../components/Header/index'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Header/>
      <Component {...pageProps}  />

    
    </>
  )
}

export default MyApp
