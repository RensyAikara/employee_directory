import React from 'react';
import './App.css';
import Container from './components/Container';
import employees from "./employees.json";

class App extends React.Component {
  state={
    employees: employees
  }

  render(){
    return (
          <div className="App">
            <Container employees={this.state.employees} />
          </div>
        );
  }
}


export default App;
