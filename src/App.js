import './App.css';
import React from 'react';  
import HomePage from './components/HomePage/HomePage';

class App extends React.Component{
  render(){
    return(
      <div style={{backgroundColor:'black', height: '100vh', width: '100vw'}}>
        { <HomePage/> }
      </div>
    )
  }
}
export default App;
