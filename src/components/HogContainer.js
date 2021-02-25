import React, {useState} from 'react'
import pigImages from '../assets/images'
import HogTile from './HogTile'

function HogContainer({ hogs }) {

  const [activePig, setActivePig] = useState("")

  function handleShowPigDetails(name){
    setActivePig(name)
  }


  const hogComponents = hogs.map( ({name, specialty, greased, weight, 'highest medal achieved':foo})  => {
    return (
      <HogTile 
        key={name}
        name={name} 
        specialty={specialty} 
        greased={greased}
        weight={weight}
        highestMedalAchieved={foo}
        activePig={activePig}
        onShowPigDetails={handleShowPigDetails}
      />
    )
  })

  return (
    <div className="ui grid container">
      {hogComponents}
    </div>
  )
}

export default HogContainer
