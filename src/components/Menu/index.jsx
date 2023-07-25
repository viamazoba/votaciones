import './Menu.scss'
import { useContext } from 'react'
import { VoteCandidatesContext } from '../../store/VoteContext'

const Menu = () => {
  const store = useContext(VoteCandidatesContext)

  return (
    <fieldset>
        <legend>Elige una opción:</legend>

        <div className='container-radioButtons'>

          <div>
          <input type="radio" id="porcentaje" name="votos" onClick={()=> store.handleValueTotal("porcentaje")}/>
          <label htmlFor="porcentaje">Porcentaje</label>
          </div>

          <div>
          <input type="radio" id="total" name="votos" onClick={()=> store.handleValueTotal("total")}/>
          <label htmlFor="total">total</label>
          </div>
        </div>

        <div className='container-checksBox'>

          {store.candidates.map((candidate)=>{
              return(
                  <div key={candidate.numero}>
                      <input type="checkbox" id={candidate.numero} name="candidato" onClick={()=>store.handleCheckBox(candidate.nombre)}/>
                      <label htmlFor={candidate.numero}>{candidate.nombre}</label>
                  </div>
              )
          })}
        </div>


       
    </fieldset> 

  )
}

export default Menu