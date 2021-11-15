let Game = [
    {
       id: 0,
       GameName: "Noobs",
       GameMap: "Du Hast Map",
       GameDifficulty:"begginer",
       GameDescription:"for the begginers"
    },

    {
        id: 1,
        GameName: "SportBoys",
        GameMap: "Du Hast Map",
        GameDifficulty:"intermediate",
        GameDescription:"Quick Game for fun"
    },

    {
        id: 2,
        GameName: "Pros",
        GameMap: "Du Hast Map",
        GameDifficulty:"profecionals",
        GameDescription:"only blood and tear"
    },   
]


for(let i=0;i < Game.length;i++){
    CreateGameBoxInDom(Game[i].GameName,Game[i].GameMap,Game[i].GameDifficulty,Game[i].GameDescription,Game[i].id,"game");
    }



function prestige(){


let element = document.getElementById("mapContainer");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}

for(let i=0;i < Game.length;i++){
CreateGameBoxInDom(Game[i].GameName,Game[i].GameMap,Game[i].GameDifficulty,Game[i].GameDescription,Game[i].id,"game");
}

}