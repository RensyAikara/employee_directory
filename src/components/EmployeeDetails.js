import React, { Component } from 'react';

class EmployeeDetails extends Component{

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            marginTop: '40px',
            borderStyle: 'solid',
            borderWidth: '5px'
        }
    }

    render(){
        return (
            <table style={this.getStyle()}  className="table table-striped">
                <thead style={{backgroundColor: '#bde9ba'}} >
                    <tr style={{}} >
                        <th onClick={this.props.sortbyName} scope="col"><button style={{backgroundColor: '#bde9ba'}}>Employee Name</button></th>
                        <th onClick={this.props.sortbyEmail} scope="col"><button style={{backgroundColor: '#bde9ba'}}>Email</button></th>
                        <th onClick={this.props.sortbyRole} scope="col"><button style={{backgroundColor: '#bde9ba'}}>Role</button></th>
                        <th onClick={this.props.sortbyDepartment} scope="col"><button style={{backgroundColor: '#bde9ba'}}>Department</button></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.employee.map(eachemployee =>(
                        <tr key={eachemployee.id} scope="row" >
                            <td>{eachemployee.name}</td>
                            <td>{eachemployee.email}</td>
                            <td>{eachemployee.role}</td>
                            <td>{eachemployee.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          );
        }
    }
  

export default EmployeeDetails;