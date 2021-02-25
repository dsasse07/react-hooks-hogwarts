import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({onlyGreasy, onHandleGreaseChange, sortBy, onSortChange}) => {

  function handleSortChange(e){
    onSortChange(e.target.value)
  }

  function handleGreaseChange(e){
    onHandleGreaseChange(e.target.checked)
  }

  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div> 
        <select onChange={handleSortChange} value={sortBy}>SelectMenu
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select> 

        <label >
          Show only greased
          <input onChange={handleGreaseChange} type="checkbox" name="greased"></input> 
        </label>
      </div>
    </div>
  );
};

export default Nav;
