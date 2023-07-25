/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const VoteCandidatesContext = createContext()

export const VoteCandidatesProvider = ({children}) =>{

    const results = [
        {
          nombre:'Octavio Paz',
          partido: 'Partido Verde',
          numero: 1,
          votos: 0
        },
        {
          nombre:'Mariana Álvarez',
          partido: 'Partido Conservador',
          numero: 2,
          votos: 0
        },
        {
          nombre:'Camilo Montoya',
          partido: 'Partido Rojo',
          numero: 3,
          votos: 0
        },
        {
          nombre:'Alejandra Zapata',
          partido: 'Partido Indigena',
          numero: 4,
          votos: 0
        },
      ]

    const [candidates, setCandidates] = useState(results)
    const [totalVotos, setTotalVotos] = useState(0)
    const [tipoTotal, setTipoTotal ] = useState('total')
    const [candidatesShow, setCandidatesShow] = useState([])

    const handleVotes = (name)=>{
        const newCandidates = candidates.map((candidate)=>{
            if(candidate.nombre === name){
                candidate.votos +=1
            }

            return candidate
        })

        setCandidates(newCandidates)
        setTotalVotos(newCandidates.reduce((sum, candidate)=> sum = sum + candidate.votos, 0))
    }

    const handleValueTotal= (name2)=>{

      setTipoTotal(name2)
      
    }
    
    const handleCheckBox = (option)=>{
      if(!candidatesShow.includes(option)){
        console.log([...candidatesShow, option])
        setCandidatesShow([...candidatesShow, option])
        console.log([...candidatesShow, option])
      }else{
        console.log([...candidatesShow].filter((candidate)=>candidate != option))
        setCandidatesShow([...candidatesShow].filter((candidate)=>candidate != option))
      }
    }
    

    return(
        <VoteCandidatesContext.Provider
            value={{
                candidates,
                handleVotes,
                handleValueTotal,
                totalVotos,
                tipoTotal,
                handleCheckBox,
                candidatesShow
            }}
        >
            {children}
        </VoteCandidatesContext.Provider>
    )
}