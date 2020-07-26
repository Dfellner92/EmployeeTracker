import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
//import Title from "./components/Title";
//import Buttons from "./components/Buttons"
// import axios from 'axios';
//import Form from "./components/Form";
import ButtonAndForm from "./components/ButtonAndForm"
import apiJSON from "./util/API"

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees: [],
    refreshArray: [],
    recommedationsArray: [],
    show: false
  };

  async componentDidMount() {
    this.getRandomPeople();
  }

  getRandomPeople = () => { 
    console.log(apiJSON);
    this.setState({employees: apiJSON.results})
    this.setState({refreshArray: apiJSON.results})
    // axios.get('https://randomuser.me/api/?results=200&nat=us').then(response => {
    //   console.log(response);
    //   this.setState({ refreshArray: response.data.results})
    //   this.setState({ employees: response.data.results })
    // })
  }

  aToZLastName = () => {
    console.log("clicked");
    let sortEmp =  this.state.employees.sort(this.compareAToZ); 
     
    console.log("SORT:", sortEmp)
    this.setState({
      employees: sortEmp
    })
  };

  compareAToZ = ( a, b ) =>{
    if ( a.name.last < b.name.last ){
      return -1;
    }
    if ( a.name.last > b.name.last ){
      return 1;
    }
    return 0;
  }

  zToALastName = () => {
    console.log("clicked");
    let sortEmp =  this.state.employees.sort(this.compareZToA); 
     
    console.log("SORT:", sortEmp)
    this.setState({
      employees: sortEmp
    })
  };

  compareZToA = ( a, b ) =>{
    if ( a.name.last > b.name.last ){
      return -1;
    }
    if ( a.name.last < b.name.last ){
      return 1;
    }
    return 0;
  }

  // removeEmployee = id => {
  //   // Filter this.state.employees for employees with an id not equal to the id being removed
  //   const employees = this.state.employees.filter(employee => employee.id !== id);
  //   // Set this.state.employees equal to the new employees array
  //   this.setState({ employees });
  // };

  getRefreshArray = () => {
    return this.state.refreshArray
  }

  maleEmployees = () => {
    console.log("clicked");
    let filterEmp = this.state.employees.filter(this.filterFemale);

    console.log("FILTER:", filterEmp)
    this.setState({
      employees: this.getRefreshArray()
    }, this.filterFemale)
  }

  filterFemale = () => {
    let filterEmp = this.state.employees.filter(employee => employee.gender === "male");
    this.setState({employees : filterEmp})
  }

  femaleEmployees = () => {
    console.log("clicked");
    let filterEmp = this.state.employees.filter(this.filterMale);

    console.log("FILTER:", filterEmp)
    this.setState({
      employees: this.getRefreshArray()
    }, this.filterMale)
  }

  filterMale = () => {
    let filterEmp = this.state.employees.filter(employee => employee.gender === "female");
    this.setState({employees : filterEmp}) 
  }

  reset = () => {
    this.setState({employees: this.getRefreshArray()})
  }

  createRecommendations = searchterm => {
    if (searchterm === "") {
      this.setState({show: false});
    } else {
    this.setState({show: true});
    };
    this.createLoop(searchterm);
  }

  createLoop = term => {
    const sliceArray = [];
    for (var i =0; i < this.state.refreshArray.length; i++) {
      const slicedName = this.state.refreshArray[i].name.first.slice(0, term.length).toLowerCase();
      if (slicedName === term) {
        sliceArray.push(this.state.refreshArray[i])
      }
    }
    this.setState({recommedationsArray: sliceArray});
  }

  showName =  first => {
    console.log(first);
    const searchedEmployee = this.state.refreshArray.filter(person => person.name.first === first);
    this.setState({employees: searchedEmployee});
  }




  // Map over this.state.employees and render a employeeCard component for each employee object
  render() {
      return (
      <Wrapper>
      <ButtonAndForm
          aToZLastName = {this.aToZLastName}
          zToALastName = {this.zToALastName}
          maleEmployees = {this.maleEmployees}
          femaleEmployees = {this.femaleEmployees}
          reset = {this.reset}
        //  <Title>Employees List</Title>
        
        // <Form
        //   createRecommendations = {this.createRecommendations}
        // />
      />
      {(this.state.show) &&
        <div style={{maxHeight: "200px", maxWidth: "200px", border: "10px solid"}}>
          {this.state.recommedationsArray.map(recommendation => (
            <button onClick={() => this.showName(recommendation.name.first)}>{recommendation.name.first}</button>
          ))}
        </div>
      }
        {this.state.employees.map(employee => (
          <EmployeeCard
            // removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            nameTitle={employee.name.title}
            nameFirst={employee.name.first}
            nameLast={employee.name.last}
            email={employee.email}
            image={employee.picture.large}
            home={employee.phone}
            cell={employee.cell}
          />
        ))
      }
      </Wrapper >
    )
  }
}

export default App;
