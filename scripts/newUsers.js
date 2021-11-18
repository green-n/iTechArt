
let temp;

document.querySelector('#push').onclick = function(){

    let tName = document.querySelector('#nameItInput').value;
    let tGender = document.querySelector('#chooseGenderInput').value;
    let tRank = document.querySelector('#difficultyInput').value;
    let tAboutMe = document.querySelector('#descriptionInput').value;
    temp = Users.length;

let NewUser= {
    id: temp = temp,
    Name: tName,
    Gender: tGender,
    Rank:tRank,
    AboutMe:tAboutMe
}

// temp=NewGame.id

Users.push(NewUser);

// alert(NewGame)
// CreateGameBoxInDom(Game[temp].GameName,Game[temp].GameMap,Game[temp].GameDifficulty,Game[temp].GameDescription,Game[temp].id,"game");
prestigeForUsers()

}



function ChangesUserData(id){
 
  let gameName = document.querySelector('#nameItInput'+id).value;
  let mapName = document.querySelector('#chooseMapInput'+id).value;
  let difficulty = document.querySelector('#difficultyInput'+id).value;
  let description = document.querySelector('#descriptionInput'+id).value;

  console.log(id, gameName,mapName,difficulty,description);

  Users[id].Name =gameName;
  Users[id].Gender =mapName;
  Users[id].Rank =difficulty;
  Users[id].AboutMe =description;

  // console.log(Users)

  prestigeForUsers();
  


}


function CreateNewUserInDom(gameName,mapName,difficulty,description,id){

    
    if(  gameName.length == 0 ||mapName.length == 0 || difficulty.length == 0 ||description.length == 0 ){
        alert("please fill the form correctly");
    }
    else{
 
      document.querySelector('#userContainer').innerHTML += `
    


      <div class="usersBox">
     
      <button class="delete">
      <i class="far fa-trash-alt"></i>
      </button>
      <button class="editer" data-target="#modal${id}">
      edit
      </button>
      <div class="image">
          <img src="src/userWithNoImg.png" alt="">
      </div>
      <div class="content">

          <div class="name"><h3>${gameName}</h3></div>
        
          <div class="mapName"> <h3>${mapName}</h3></div>

          <div class="difficucly"><p>${difficulty}<p></div>

         
          <div class="description"><p>${description}</p></div>
     
      
      <div class="modal" id="modal${id}">
      <div class="header">
        <div class="title"></div>
        <button class="btn close-modal">&times;</button>
        </div>
        <div class="body">
          <div >
            <h1 >Editer menu for the ${id+1} user </h1>
      <form>
            <div class="melement">
              <h2>
                  Change name
                  
              </h2>
      
              <input type="text"  placeholder="" value="${gameName}" id="nameItInput${id}">
            </div>
      
            <div class="melement">
              <h2>Change gender
                    <div>
                      <input list="browse${id}" value="${mapName}" placeholder="" id="chooseMapInput${id}">
            
                      <datalist id="browse${id}">
                        <option value="male">
                        <option value="female">
                        <option value="other">
                      </datalist>
                    </div>
                </h2>
      
            </div>
            <div class="melement">
              <h2>
              Change AboutMe
                  
              </h2>
      
              <input type="text" value="${description}" id="descriptionInput${id}">
      
            </div>
            <div class="melement">
              <h2>Change rank
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

        
     <a  class="btn close-modal"  id="push" onclick="ChangesUserData(${id})">apply changes</a>
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