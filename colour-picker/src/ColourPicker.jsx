import { useState } from "react";

function ColourPicker(){
    const[color, setColor] = useState("#FFFFFF");

    function changeColour (event) {
        setColor(event.target.va);
    }

    return (
        <div className="colour-picker-container">
            <h1>Colour Picker Page</h1>
            <div className="colour-box" style={{backgroundColor: color}}>
                <p>Selected Colour : {color}</p>
            </div>
            <label>Select Colour :</label>
            <input type="color" onChange={changeColour} value={color}></input>
        </div>
    )
}

export default ColourPicker;