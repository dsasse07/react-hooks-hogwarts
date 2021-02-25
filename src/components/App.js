import React, {useState} from "react";
import Nav from "./Nav";
import HogContainer from './HogContainer'
import hogs from "../porkers_data";
import HogForm from "./HogForm"

function App() {

  const [sortBy, setSortBy] = useState("name")
  const [onlyGreasy, setOnlyGreasy] = useState(false)
  const [hogsData, setHogs] = useState(hogs)
  const [formData, setFormData] = useState( {
    name: "",
    weight: "",
    specialty: "",
    greased: false,
    highestMedal: "wood",
    image: ""
})

  function handleSortChange(option){
    console.log(option)
    setSortBy(option)
  }

  function handleGreaseChange(greasiness){
    setOnlyGreasy(greasiness)
  }

  function handleFormChange(newFormData){
    setFormData(newFormData)
  }

  function handleFormSubmit(event){
    event.preventDefault()
    setHogs( [...hogsData, formData] ) 
    setFormData( {
      name: "",
      weight: "",
      specialty: "",
      greased: false,
      highestMedal: "wood",
      image: ""
  })
  }

  return (
    <div className="ui grid container">
      <Nav onlyGreasy={onlyGreasy} onHandleGreaseChange={handleGreaseChange} sortBy={sortBy} onSortChange={handleSortChange}/>
      <HogForm formData={formData} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
      <div>
        <HogContainer onlyGreasy={onlyGreasy} sortBy={sortBy} hogs={hogsData}/>
      </div>
    </div>
  );
}

export default App;


