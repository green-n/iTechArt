
let temp;

document.querySelector('#push').onclick = function(){

    let gameName = document.querySelector('#nameItInput').value;
    let mapName = document.querySelector('#chooseMapInput').value;
    let difficulty = document.querySelector('#difficultyInput').value;
    let description = document.querySelector('#descriptionInput').value;
    temp = Game.length;

let NewGame= {
    id: temp = temp,
    GameName: gameName,
    GameMap: mapName,
    GameDifficulty: difficulty,
    GameDescription: description
}

temp=NewGame.id

Game.push(NewGame);

// alert(NewGame)
// CreateGameBoxInDom(Game[temp].GameName,Game[temp].GameMap,Game[temp].GameDifficulty,Game[temp].GameDescription,Game[temp].id,"game");
prestige();

}


function ChangesWelcome(id){
    let gameName = document.querySelector('#nameItInput'+id).value;
    let mapName = document.querySelector('#chooseMapInput'+id).value;
    let difficulty = document.querySelector('#difficultyInput'+id).value;
    let description = document.querySelector('#descriptionInput'+id).value;

    console.log(id, gameName,mapName,difficulty,description);

    Game[id].GameName=gameName;
    Game[id].GameMap=mapName;
    Game[id].GameDifficulty=difficulty;
    Game[id].GameDescription=description;

    prestige();




}


function CreateGameBoxInDom (gameName,mapName,difficulty,description,id,type){

    
    if(  gameName.length == 0 ||mapName.length == 0 || difficulty.length == 0 ||description.length == 0 ){
        alert("please fill the form correctly");
    }
    if(type=="game"){
 
        document.querySelector('#mapContainer').innerHTML += `
        <div class="sacrifice">


        <div class="box">
        <div class"trueBody">
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        <button class="editer" data-target="#modal${id}">
        edit
        </button>
        <div class="image">
            <img src="src/cslogo.png" alt="">
            <!-- <a href="#" class="fas fa-heart"></a> -->
        </div>
        <div class="content">

            <div class="name"><h3>${gameName}</h3></div>
          
            <div class="mapName"> <h3>${mapName}</h3></div>

            <div class="difficucly"><p>${difficulty}<p></div>

            <div class="creator"> <p>creator: Vlad Romaniuk</p></div>
           
            <div class="description"><p>${description}</p></div>
            <a href="#" class="btn">join game</a>
            <span class="PlayersOnMap">0/24</span>
        
        <div class="modal" id="modal${id}">
        <div class="header">
          <div class="title"></div>
          <button class="btn close-modal">&times;</button>
          </div>
          <div class="body">
            <div >
              <h1 >Editer menu for the ${id+1} game </h1>
        <form>
              <div class="melement">
                <h2>
                    Change name
                    
                </h2>
        
                <input type="text"  placeholder="" value="${gameName}" id="nameItInput${id}">
              </div>
        
              <div class="melement">
                <h2>Change map
                      <div>
                        <input list="browse${id}" value="${mapName}" placeholder="" id="chooseMapInput${id}">
              
                        <datalist id="browse${id}">
                          <option value="du hast map">
                          <option value="de office">
                          <option value="do re mi">
                        </datalist>
                      </div>
                  </h2>
        
              </div>
              <div class="melement">
                <h2>
                Change description
                    
                </h2>
        
                <input type="text" value="${description}" id="descriptionInput${id}">
        
              </div>
              <div class="melement">
                <h2>Change difficulty
                      <div>
                        <input list="difficulty${id}" placeholder="" id="difficultyInput${id}" value="${difficulty}">
               
                        <datalist id="difficulty${id}" >
                          <option value="begginer" >
                          <option value="upper begginer" >
                          <option value="intermrdiate" >
                          <option value="upper intermediate" >
                          <option value="proffecionals" >
                         
                        </datalist>
                      </div>
                  
                  </h2>
        
                </form>
        
              </div> 
          </div>
  
          
       <a  class="btn close-modal"  id="push" onclick="ChangesWelcome(${id})">apply changes</a>
    </div>
    </div>
    </div>
    </div>

        `;
    } 

   
    
    let currentTasks = document.querySelectorAll(".delete");
    for(let i=0; i<currentTasks.length; i++){
        currentTasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    


    const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

}


