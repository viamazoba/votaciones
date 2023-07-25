import './VotosIndividuales.scss'
import { useContext } from 'react'
import { VoteCandidatesContext } from '../../store/VoteContext'

const VotosIndividuales = () => {
    const store = useContext(VoteCandidatesContext) 


  return (
    <>
        {store.candidates.map((candidate)=>{
            return(
                    store.candidatesShow.includes(candidate.nombre) &&
                <div className="container-votesCandidates" key={candidate.numero}>
                    <h2>Candidato: {candidate.nombre}</h2>
                    <p>Votos: {store.tipoTotal=== 'total'?candidate.votos:`${((candidate.votos*100)/store.totalVotos).toFixed(2)} %`}</p>
                </div>
            )
        })}
    </>
  )
}

export default VotosIndividuales