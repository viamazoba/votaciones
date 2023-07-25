import { useContext } from 'react'
import { VoteCandidatesContext } from '../../store/VoteContext'
import './TotalVotos.scss'

const TotalVotos = () => {
    
    const store = useContext(VoteCandidatesContext) 

  return (

    <div className="container-totalVotes">
        <h2>Total votos</h2>
        <div>{store.totalVotos}</div>
    </div>
  )
}

export default TotalVotos