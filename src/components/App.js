import React, {useState} from "react";
import Nav from "./Nav";
import HogContainer from './HogContainer'
import hogs from "../porkers_data";
import HogForm from "./HogForm"

function App() {

  const [sortBy, setSortBy] = useState("name")
  const [onlyGreasy, setOnlyGreasy] = useState(false)

  function handleSortChange(option){
    console.log(option)
    setSortBy(option)
  }

  function handleGreaseChange(greasiness){
    // console.log(greasiness)
    setOnlyGreasy(greasiness)
  }


  return (
    <div className="App">
      <Nav onlyGreasy={onlyGreasy} onHandleGreaseChange={handleGreaseChange} sortBy={sortBy} onSortChange={handleSortChange}/>
      <HogForm />
      <HogContainer onlyGreasy={onlyGreasy} sortBy={sortBy} hogs={hogs}/>
    </div>
  );
}

export default App;


