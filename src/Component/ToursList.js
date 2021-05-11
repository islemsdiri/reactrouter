
import TourCard from './TourCard'
const ToursList=(props)=>{
    
    return(
       <>
            {
props.Tours.map(el=><TourCard key={el.id}/>)
            }
    </>
    )
}
export default ToursList
