import { TableOfGames }  from './component/pages/TablesOfGames';
import './App.css';
import  TopBar from './component/basicComponents/topBar/topBar';
import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super();

    this.state = {
     
    };

  }
  render(){
   

    return (
     
    <div className="App">
       <TopBar/>
      <TableOfGames/>
    </div>
    )
  }

}

export default App;
