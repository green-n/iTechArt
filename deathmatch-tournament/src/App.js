import { Games }  from './pages/TablesOfGames';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingUp from './pages/registrationPage';
import TopBar from './component/basicComponents/topBar/topBar';
import React, { Component } from 'react';
import Footer from './component/basicComponents/footer/footer'
import LogIn from './pages/logInPage';
import { Home } from '@mui/icons-material';

class App extends Component {

  constructor() {
    super();

    this.state = {
      Game: [
        {
           id: 0,
           gameName: "Noobs",
           gameMap: "Du Hast Map",
           gameDifficulty:"begginer",
           gameDescription:"for the begginers"
        },
    
        {
            id: 1,
            gameName: "SportBoys",
            gameMap: "Du Hast Map",
            gameDifficulty:"intermediate",
            gameDescription:"Quick Game for fun"
        },
    
        {
            id: 2,
            gameName: "Pros",
            gameMap: "Du Hast Map",
            gameDifficulty:"profecionals",
            gameDescription:"only blood and tear"
        },  
        {
            id: 3,
            gameName: "Pros",
            gameMap: "Du Hast Map",
            gameDifficulty:"profecionals",
            gameDescription:"only blood and tear"
        }, 
        {
          id: 3,
          gameName: "Pros",
          gameMap: "Du Hast Map",
          gameDifficulty:"profecionals",
          gameDescription:"only blood and tear"
      },
      
      
    ]
     
    };

  }
  render(){
   

    return (
     
    <div >
      <div className="App">
      <TopBar/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/games" element={<Games prop={this.state.Game}/>}/>
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
