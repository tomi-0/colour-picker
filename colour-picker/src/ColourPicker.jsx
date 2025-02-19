import { useState } from "react";

function ColourPicker(){
    const[color, setColor] = useState("#FFFFFF");

    function changeColour (event) {
        setColor(event.target.value);
    }

    return (
        <div className="colour-picker-container">
            <h1>Colour Picker</h1>
            <div className="colour-box" style={{backgroundColor: color}}>
                <p>Selected Colour : {color}</p>
            </div>
            <div className="box"></div>
            <div className="colour-select">
                <label>Select Colour : </label>
                <input type="color" onChange={changeColour} value={color}></input>
            </div>
        </div>
    )
}

export default ColourPicker;