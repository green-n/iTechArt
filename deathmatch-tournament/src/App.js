import { Games }  from './component/pages/TablesOfGames';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingUp from './component/pages/registrationPage';
import TopBar from './component/basicComponents/topBar/topBar';
import React, { Component } from 'react';
import Footer from './component/basicComponents/footer/footer'
import LogIn from './component/pages/logInPage';

class App extends Component {

  constructor() {
    super();

    this.state = {
     
    };

  }
  render(){
   

    return (
     
    <div >
      <div className="App">
      <TopBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/games" element={<Games/>}/>
          <Route path="/singUp" element={<SingUp/>}/>
          <Route path="/logIn" element={<LogIn/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>  
      
      
      </div>
       
    </div>
    )
  }

}

export default App;
