import React, {useState} from 'react'
import pigImages from '../assets/images'

function HogTile( {name, specialty, greased, weight, highestMedalAchieved, activePig, onShowPigDetails, image} ) {
  
  const [hidden, setHidden] = useState(false)

  function handleHideHog(){
    setHidden(!hidden)
  }


  return !hidden ? (
     
    <div className="card" onClick={() => { onShowPigDetails(name) } } >
     
      <div className="image">
        <img src={ pigImages[name] ? pigImages[name] : image } alt={name}></img>
      </div>

      <div className="content">
        <div classname="header">
          {name}
        </div>
        <div className="meta">
          {specialty}
        </div>
        <div className='description'>
          Highest medal achieved: {highestMedalAchieved}
        </div>
      </div>
      
      {activePig === name ?
        <div class="extra content">
          <span className="right floated">
            {weight} lbs.
          </span>
          <span>
            <button onClick={handleHideHog}>Hide</button>
          </span>
          <span>
            {greased ? "Greasey" : "Clean"}
          </span>
        </div> : null
      }
    </div> 
  ) : null
}

export default HogTile
