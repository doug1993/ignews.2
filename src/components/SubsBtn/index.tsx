
import stl from './styles.module.scss'
//getSeverSideProps
//getStaticProps
//Api Routes
interface SubsBtnProps{
  priceId: string
}

export  function SubsBtn({priceId}: SubsBtnProps){

  return(
    <button className={stl.subBtn} 
    >
      Subscribe now
      
    </button>
  )
}