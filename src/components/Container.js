import React, { Component } from 'react';
import Header from './Header';
import SearchArea from './SearchArea';
import EmployeeDetails from './EmployeeDetails';

class Container extends Component{

    state = {
        search: "",
        employees: [],
        employeesFiltered: [],
        order: ""
    }

    componentDidMount(){
        this.setState({employeesFiltered: this.props.employees, employees: this.props.employees});  
    }

    handleInputChange = event => {
        const search = event.target.value;
        // console.log(this.state.employeesFiltered);
        const employeestyped = this.state.employeesFiltered.filter(employee => employee.name.toLowerCase().indexOf(search.toLowerCase()) > -1);
        console.log(employeestyped);
        // this.setState({employeesFiltered});
        this.setState({employees: employeestyped, search:search});
        console.log(this.state.search);
        
    };

    handleSubmit = event => {
        event.preventDefault();
        if(!this.state.search){
            alert("Select name");
        }
        else{
            const employeestyped = this.state.employeesFiltered.filter(employee => employee.name.toLowerCase().includes(this.state.search.toLowerCase()));
            this.setState({employees: employeestyped, search: ""});
            // console.log(employeestyped);
            if(employeestyped == ""){
                alert("Invalid name");
            }
        }
        
    };

    sortbyName = () => {
        if(this.state.order === "ascending"){
            const ascendingSort = this.state.employeesFiltered.sort((a,b) => (a.name > b.name) ? 1: -1)
            this.setState({
                employeesFiltered: ascendingSort,
                order: "descending"
            })
        }
        else{
            const descendingSort = this.state.employeesFiltered.sort((a,b) => (a.name > b.name) ? -1: 1)
            this.setState({
                employeesFiltered: descendingSort,
                order: "ascending"
            })
        }
    }

    sortbyEmail = () => {
        if(this.state.order === "ascending"){
            const ascendingSort = this.state.employeesFiltered.sort((a,b) => (a.email > b.email) ? 1: -1)
            this.setState({
                employeesFiltered: ascendingSort,
                order: "descending"
            })
        }
        else{
            const descendingSort = this.state.employeesFiltered.sort((a,b) => (a.email > b.email) ? -1: 1)
            this.setState({
                employeesFiltered: descendingSort,
                order: "ascending"
            })
        }
    }

    sortbyRole = () => {
        if(this.state.order === "ascending"){
            const ascendingSort = this.state.employeesFiltered.sort((a,b) => (a.role > b.role) ? 1: -1)
            this.setState({
                employeesFiltered: ascendingSort,
                order: "descending"
            })
        }
        else{
            const descendingSort = this.state.employeesFiltered.sort((a,b) => (a.role > b.role) ? -1: 1)
            this.setState({
                employeesFiltered: descendingSort,
                order: "ascending"
            })
        }
    }

    sortbyDepartment = () => {
        if(this.state.order === "ascending"){
            const ascendingSort = this.state.employeesFiltered.sort((a,b) => (a.department > b.department) ? 1: -1)
            this.setState({
                employeesFiltered: ascendingSort,
                order: "descending"
            })
        }
        else{
            const descendingSort = this.state.employeesFiltered.sort((a,b) => (a.department > b.department) ? -1: 1)
            this.setState({
                employeesFiltered: descendingSort,
                order: "ascending"
            })
        }
    }

    render(){
        return (
            <div className="container-fluid">
                <Header />
                <SearchArea employee={this.state.employees} handleSubmit= {this.handleSubmit} handleInputChange= {this.handleInputChange} />
                {/* <SearchArea employee={this.props} handleSubmit= {this.handleSubmit} handleInputChange= {this.handleInputChange} /> */}
                <EmployeeDetails employee={this.state.employees} sortbyName={this.sortbyName} sortbyEmail={this.sortbyEmail} sortbyRole={this.sortbyRole} sortbyDepartment={this.sortbyDepartment} employeesFiltered={this.state.employeesFiltered} />
            </div>
          );
        }
    }
  

export default Container;