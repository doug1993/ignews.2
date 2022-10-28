import styles from './styles.module.scss' 
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import {signIn, signOut, useSession} from 'next-auth/react'

export function Header(){

  return(
    <>
      <header className={styles.headerContainer}>
        
        <div className={styles.headerContent}> 
        <h1>ig.news</h1>
         <nav> <a href="" > Home </a>
          <a href=""> Posts </a></nav>         
          <SignInButton/> 
        </div>
        
        
      </header>
    
    </>
  )

}
//component SignButton 
export function SignInButton(){
 const {data:session} = useSession()

  return session ?(
    <button type='button'
      className={styles.signInButton}
      onClick={()=>signOut()}>
      <FaGithub color='#04d361'/>
      {session.user.name}
      <FiX className={styles.closeBtn}/>
    </button>
  )  :  (
    <button type='button'
      className={styles.signInButton}
      onClick={()=>signIn('gitHub')}
      >
      <FaGithub color='#eba417'/>
      Sign in with Github
    </button>
  )
    
   
}