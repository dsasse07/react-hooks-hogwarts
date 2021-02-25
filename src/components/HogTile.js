import React from 'react'
import pigImages from '../assets/images'

function HogTile( {name, specialty, greased, weight, highestMedalAchieved, activePig, onShowPigDetails} ) {
  

  return (
    <div 
      className="ui eight wide column"
      onClick={() => { onShowPigDetails(name) } }
    >
      <h2>{name}</h2>
      <img 
        src={pigImages[name]} 
        alt={name}
        style={{
          width: `100%`,
          height: `100%`,
          objectFit: `contain`,
          overflow: `hidden`
        }}
      ></img>
      {activePig === name ?
        <div>
          <p>Specialty: {specialty} </p> 
          <p>Weight: {weight} </p> 
          <p>{greased ? "Covered in Grease" : "Squeaky Clean"} </p> 
          <p>Highest medal achieved: {highestMedalAchieved}</p>

        </div> :
        null
      }
    </div>
  )
}

export default HogTile
