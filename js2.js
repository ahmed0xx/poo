let userInput = document.querySelector("[name='username']");
let passInput = document.querySelector("[name='password']");

document.forms[0].onsubmit = function(event){
    let userValid =false;
    let passValid= false;
    
    if(userInput.value!== ""){
userValid=true;
console.log("valid");
}

if(passInput.value!==""){
passValid=true;
console.log("Valid");

}

    if(userValid===false || passValid===false){
        event.preventDefault();
    }
    };
