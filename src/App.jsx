//import { useState } from 'react'
import './App.css'
import Candidato from './components/Candidato'
import TotalVotos from './components/TotalVotos'
import VotosIndividuales from './components/VotosIndividuales'
import Menu from './components/Menu'
import {VoteCandidatesProvider} from './store/VoteContext'
//import { useState } from 'react'

function App() {
  // const [name1, setname1] = useState('Octavio Paz')
  // const [votos, setVotos] = useState(100)

  return (
    <>
      <VoteCandidatesProvider>

        <div className='principal'>
          <div className='principal__votes'>
            <Candidato/>
            <TotalVotos/>

            <VotosIndividuales/>
          </div>
          <Menu/>
        </div>
        
      </VoteCandidatesProvider>
    </>
  )
}

export default App
