import React from "react";

export default function FormRecommendations(props) {
    {(props.show) &&
        <div style={{maxHeight: "200px", maxWidth: "200px", border: "10px solid"}}>
          {props.recommedationsArray.map(recommendation => (
            <button onClick={() => props.showName(recommendation.name.first)}>{recommendation.name.first}</button>
          ))}
        </div>
      }
} 