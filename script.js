const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
let stape1 = document.getElementById("stape1");
let stape2 = document.getElementById("stape2");
let email = document.getElementById("email");
let password = document.getElementById("password");
let pouletButton = document.getElementById('poulet-button');
let pouletImage = document.getElementById('poulet');
let pbutton = document.getElementById('pbutton');


pbutton.addEventListener('click',(event)=>{
    showNextStape();
})
window.addEventListener('load', (event) => {
    // hide stape 2 in page loader
    stape2.style.display = 'none';    
  });

//check email
email.addEventListener('change',(event)=>{
    if(validateEmail(email.value)){
        email.style.border = "2px solid green"
    }
    else{
        email.style.border = "2px solid red"
    }
})
// hide stape 1 and show stape 2
function showNextStape(){
    pouletButton.style.marginLeft = "50%" ;
    pouletButton.style.transition = "linear 2s" ;
    pouletButton.style.opacity = 0 ;
    pouletImage.style.display = "flex";
    setTimeout(() => {
        
        if(validateEmail(email.value) && password.value == "pharaon valley"){
            stape1.style.display = 'none';  
            stape2.style.display = 'flex';  
        }
        else if(!validateEmail(email.value)){
            email.style.border = "1px solid red";
            runToCenter();
        }
        else{
            runToCenter();
            
        }

        function runToCenter() {
            password.style.border = "1px solid red";
            pbutton.style.backgroundColor = 'red';
            pouletButton.style.opacity = 1;
            pouletButton.style.marginLeft = '0';
            pouletImage.style.display = "flex";
            pouletImage.style = `-webkit-filter: invert(40%) grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(400%) contrast(2);
            filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8);`;
        }
      }, 900)
}

  
// hide stape 2 and show stape 1
function prevStape(){
    location.reload();
}
