import { TableOfGames }  from './component/pages/TablesOfGames';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingUp from './component/pages/registrationPage'
import TopBar from './component/basicComponents/topBar/topBar';
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
      <BrowserRouter>
        <Routes>
          <Route path="/games" element={<TableOfGames/>}/>
          <Route path="/singUp" element={<SingUp/>}/>
        </Routes>
      </BrowserRouter>

   
     
    </div>
    )
  }

}

export default App;
