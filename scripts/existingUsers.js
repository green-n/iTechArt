let Users = [
    {
       id: 0,
       Name: "Vlad Romaniuk",
       Gender: "male",
       Rank:"intermediate",
       AboutMe:"God"
    },

    {
        id: 1,
        Name: "Nikolai Popovich",
        Gender: "male",
        Rank:"intermediate",
        AboutMe:"secod player"
    },

    {
        id: 2,
        Name: "Vlad dracula",
        Gender: "male",
        Rank:"intermediate",
        AboutMe:"vampire"
    },   
]


for(let i=0;i < Users.length;i++){
    CreateNewUserInDom(Users[i].Name,Users[i].Gender,Users[i].Rank,Users[i].AboutMe,Users[i].id);
    }



function prestigeForUsers(){


let element = document.getElementById("userContainer");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}

for(let i=0;i < Users.length;i++){
CreateNewUserInDom(Users[i].Name,Users[i].Gender,Users[i].Rank,Users[i].AboutMe,Users[i].id);
}

}