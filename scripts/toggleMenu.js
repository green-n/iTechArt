

var menuList = document.getElementById("menuList");


menuList.style.maxHeight = "0px";
menuList.style.visibility="hidden"

console.log(menuList.style.maxHeight)

function togglemenu(){
    
 
    if(menuList.style.maxHeight == "0px"){
    
        menuList.style.maxHeight = "130px";
        menuList.style.visibility="visible"
        console.log( 123)
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}