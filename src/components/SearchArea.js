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