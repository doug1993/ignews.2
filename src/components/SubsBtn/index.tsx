import { signIn, useSession } from 'next-auth/react'
import stl from './styles.module.scss'
interface SubsBtnProps{
  priceId: string
}

export function SubBtn({priceId}: SubsBtnProps){
 const {data: session} = useSession()
  function handleSubsBtn(){
    if(!session){
      signIn('github')
      return
    }

  }

  return(
    <button className={stl.subBtn} >
      Subscribe now
      
    </button>
  ) 
} 