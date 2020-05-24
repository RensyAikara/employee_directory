import React from 'react';
import './App.css';
import Container from './components/Container';
import employees from "./employees.json";
// import Header from './components/Header';
// import SearchArea from './components/SearchArea';
// import EmployeeDetails from './components/EmployeeDetails';

// function App() {
//   return (
//     <div className="App">
//       <Container />
//       {/* <Header />
//       <SearchArea />
//       <EmployeeDetails /> */}
//     </div>
//   );
// }

class App extends React.Component {
  state={
    employees: employees
  }

  render(){
    return (
          <div className="App">
            <Container employees={this.state.employees} />
            {/* <Header />
            <SearchArea />
            <EmployeeDetails /> */}
          </div>
        );
  }
}


export default App;
