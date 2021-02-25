import React from "react";

function HogForm( {formData, onFormChange, onFormSubmit} ){

    const {name, weight, specialty, greased, highestMedal, image } = formData

    function handleFormChange(e){
        const key = e.target.name
        const value = (e.target.type === "checkbox") ? e.target.checked : e.target.value
        onFormChange( {...formData, [key] :value } )
    }

    return (
        <div style={{height: `50px`}}>
            <form onSubmit={onFormSubmit}>
                <input name="name" type="text" value={name} placeholder="Name" onChange={handleFormChange}></input>
                <input name="weight" type="number" value={weight} placeholder="Weight" onChange={handleFormChange}></input>
                <input name="image" type="text" value={image} placeholder="Image Url" onChange={handleFormChange}></input>
                <input name="specialty" type="text" value={specialty} placeholder="Specialty" onChange={handleFormChange}></input>
                
                <label>
                    Greased?
                    <input name="greased" type="checkbox" checked={greased} onChange={handleFormChange}></input>
                </label>
                <label>
                    Highest Medal Earned
                    <select name="highestMedal" value={highestMedal} onChange={handleFormChange}>
                        <option value="wood">Wood</option>
                        <option value="bronze">Bronze</option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                        <option value="platinum">Platinum</option>
                        <option value="diamond">Diamond</option>
                    </select>
                </label>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default HogForm;