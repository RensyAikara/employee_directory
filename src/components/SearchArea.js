import React, { Component } from 'react';

class SearchArea extends Component{
    render(){
        return (
            <form style= {{display: 'flex', marginTop: '10px'}}>
                <input 
                  type="text"
                  name="title"
                  style= {{ flex: '10', padding: '5px' }}
                  placeholder="Search by name..."
                  value = {this.props.employees}
                  onChange={this.props.handleInputChange}
                />

                {/* <select value = {this.props.employees} onChange={this.props.handleInputChange}>
                    <option>Search by name...</option>
                    {this.props.employee.map(eachemployee => {
                        return <option value={eachemployee.name} key={eachemployee.id}></option>
                    })}
                </select> */}

                {/* <select className="custom-select"  id="inputGroupSelect01" onChange={this.props.handleInputChange} >
                    <option value="DEFAULT" disabled>Search by name...</option>
                    {this.props.employee.map(eachemployee => {
                        // console.log(eachemployee.name);
                        return <option value={eachemployee.name} key={eachemployee.id} style={{color: 'black'}}></option>
                    })}
                </select> */}
                <button 
                 type="submit"
                 value="Submit"
                 className= "btn"
                 onClick= {this.props.handleSubmit}
                 style= {{flex: '1', backgroundColor: 'blue', color: 'white'}}>Submit</button>
            </form>
        );   
    }    
}
  

export default SearchArea;