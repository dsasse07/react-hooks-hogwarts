import React, {useState} from 'react'
import pigImages from '../assets/images'
import HogTile from './HogTile'

function HogContainer({ onlyGreasy, hogs, sortBy }) {

  const [activePig, setActivePig] = useState("")

  function handleShowPigDetails(name){
    setActivePig(name)
  }



  const sortedHogs = hogs.sort((hog1, hog2) => {
    if (sortBy === "name"){
      return hog1[sortBy].localeCompare(hog2[sortBy])
    } else {
      return hog1[sortBy] - hog2[sortBy]
    }
  })

  const filteredHogs = sortedHogs.filter((hog) => {
    // if (onlyGreasy) return hog.greased
    // return true
    return onlyGreasy ? hog.greased : true
  })


  const hogComponents = filteredHogs.map( ({name, specialty, greased, weight, 'highest medal achieved':foo, image})  => {
    return (
      <HogTile 
        key={name}
        name={name} 
        specialty={specialty} 
        greased={greased}
        weight={weight}
        highestMedalAchieved={foo}
        activePig={activePig}
        image={image}
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
