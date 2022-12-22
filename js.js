let btn = document.getElementById("button");
let ul = document.getElementById("listbox");

function showmenu(){
   if( ul.style.display=="block"){
    ul.style.display="none";
   }else{
    ul.style.display="block";
   }
}

let span= document.getElementById("up");

span.onclick =function (){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}