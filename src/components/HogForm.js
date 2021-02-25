import React, {useState} from "react";

function HogForm(){

    const [name, setName] = useState("")
    const [weight, setWeight] = useState(0)
    const [specialty, setSpecialty] = useState("")
    const [greased, setGreased] = useState(false)
    const [highestMedal, setHighestMedal] = useState("wood")

    return (
        <form >
            <input type="text" value={name} placeholder="Name"></input>
            <input type="number" value={weight}></input>
            <input type="text" value={specialty}></input>
            <label>
                Greased?
                <input type="checkbox" checked={greased}></input>
            </label>
            
            <select value={highestMedal}>
                <option value="wood">Wood</option>
                <option value="bronze">Bronze</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="platinum">Platinum</option>
                <option value="diamond">Diamond</option>
            </select>
            <input type="submit"></input>
        </form>
    )
}

{/* <select onChange={handleSortChange} value={sortBy}>SelectMenu
        <option value="name">Name</option>
        <option value="weight">Weight</option>
    </select>  */}

export default HogForm;