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

let btn2 = document.getElementById("button2");
let ul2 = document.getElementById("listbox2");

function showmenu2(){
    if( ul2.style.display=="block"){
    ul2.style.display="none";
    }else{
    ul2.style.display="block";
    }
}
