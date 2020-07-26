import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card mb-3">
      <div className="img-container row no-gutters">
        <div className="col-md-4">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
      <div className="content">
        <div className="col-md-8">
          <ul>
            <li>
              <strong>Name:</strong> {props.nameTitle} {props.nameFirst} {props.nameLast}
            </li>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
            <li>
              <strong>Home:</strong> {props.home}
            </li>
            <li>
              <strong>Cell:</strong> {props.cell}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;