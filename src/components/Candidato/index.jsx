import './Candidatos.scss'
import { useContext } from 'react'
import { VoteCandidatesContext } from '../../store/VoteContext'

export const Candidato = () => {

  const store = useContext(VoteCandidatesContext) 

  return (
    <div className='container'>
      {store.candidates.map((candidate)=>{
        return(
          <div className="container-candidate" key={candidate.numero} onClick={() => store.handleVotes(candidate.nombre)}>
            <h2>Nombre: {candidate.nombre}</h2>
            <p>Partido: {candidate.partido}</p>
            <p>Número: {candidate.numero}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Candidato
