import React from "react";
import Buttons from "../Buttons"
import Title from "../Title"

function ButtonAndForm(props) {
    console.log(props);
  return (
    <div>
    <div className="Jumbotron">
      <div>
        <Title>Employee List</Title>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        <Buttons
          aToZLastName = {props.aToZLastName}
          zToALastName = {props.zToALastName}
          maleEmployees = {props.maleEmployees}
          femaleEmployees = {props.femaleEmployees}
          reset = {props.reset}
        />
    </div>
    </div>
    </div>
  )
}

export default ButtonAndForm;

// function ButtonAndForm(props) {
//     return 
//         <div>
//         <div className="jumbotron">
//             <h1 className="display-4">Hello, world!</h1>
//             <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//             <hr className="my-4">
//                 <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//                 <p className="lead">
//                     <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
//                 </p>
//             </hr>
//         </div>
//         </div>
// };

// export default ButtonAndForm;
