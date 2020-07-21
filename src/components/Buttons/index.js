import React from "react";

function Buttons (props) {
    console.log(props)

 
        return (
        <div>    
            <button onClick={() => props.aToZLastName()}>A-Z last name</button>
            <button onClick={() => props.zToALastName()}>Z-A last name</button>
            <button onClick={() => props.maleEmployees()}>Male Employees</button>
            <button onClick={() => props.femaleEmployees()}>Female Employees</button>
            <button onClick={() => props.reset()}>All</button>
        </div>
        )
        
    
}

export default Buttons;