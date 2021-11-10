

document.querySelector('#push').onclick = function(){

    let gameName = document.querySelector('#nameItInput').value;
    let mapName = document.querySelector('#chooseMapInput').value;
    let difficulty = document.querySelector('#difficultyInput').value;
    let description = document.querySelector('#descriptionInput').value;

    CreateGameBoxInDom(gameName,mapName,difficulty,description);


   
}




function CreateGameBoxInDom (gameName,mapName,difficulty,description){

    if(  gameName == 0 ||mapName == 0 || difficulty == 0 ||description == 0 ){
        alert("please fill the form correctly");
    }
    else{
 
        document.querySelector('#mapContainer').innerHTML += `
        <div class="box">
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
        </div>
    </div>

        `;
    }  

}

