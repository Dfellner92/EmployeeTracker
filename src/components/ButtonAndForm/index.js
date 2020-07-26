import React from "react";
import Buttons from "../Buttons"
import Title from "../Title"
import Form from "../Form"
import "./style.css"

function ButtonAndForm(props) {
  console.log(props);
  return (
    <div>
      <div className="Jumbotron">
        <Title>Employee List</Title>
          <Buttons
            aToZLastName={props.aToZLastName}
            zToALastName={props.zToALastName}
            maleEmployees={props.maleEmployees}
            femaleEmployees={props.femaleEmployees}
            reset={props.reset}
          />
        <Form
          createRecommendations={props.createRecommendations}
        />
        {(props.show) &&
          <div style={{ maxHeight: "200px", maxWidth: "200px", border: "10px solid" }}>
            {props.recommedationsArray.map(recommendation => (
              <button onClick={() => props.showName(recommendation.name.first)}>{recommendation.name.first}</button>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default ButtonAndForm;
