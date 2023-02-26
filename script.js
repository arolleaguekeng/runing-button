// Regular expression for test if email is coorect
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

// get Html elements
let stape1 = document.getElementById("stape1");
let stape2 = document.getElementById("stape2");

// Form elements
let email = document.getElementById("email");
let password = document.getElementById("password");

// button conainer elements
let pbutton = document.getElementById('pbutton');
// Button elements
let pouletButton = document.getElementById('poulet-button');


// Poulet picturs elements
let pouletgif = document.getElementById('pouletgif');
let pouletpng = document.getElementById('pouletpng');




// Listen click on submit button
pbutton.addEventListener('click', (event) => {
    //on click, execut method
    showNextStape();
})

//Hide second container on page load
window.addEventListener('load', (event) => {
    // hide stape 2 on page loader
    stape2.style.display = 'none';
});

//If mail input value change
email.addEventListener('change', (event) => {
    // Check if email is valid
    if (validateEmail(email.value)) {
        email.style.border = "2px solid green"
    }
    // if email is not valid
    else {
        email.style.border = "2px solid red"
    }
})
// hide stape 1 and show stape 2
function showNextStape() {
    // add margin for simulate deplacement of button
    pouletButton.style.marginLeft = "50%";

    // add animation to see deplacement of button
    pouletButton.style.transition = "linear 2s";

    // Reduce opacity to do visual effects
    pouletButton.style.opacity = 0;

    // Hide images static 
    pouletpng.style.display = "none";

    // Show anilated image
    pouletgif.style.display = "flex";

    // Wait .8s for the animation to finish before checking the form.
    setTimeout(() => {
        //check form if email and password is correct
        if (validateEmail(email.value) && password.value == "admin") {
            // Hide current cotnainer
            stape1.style.display = 'none';
            // Show second container
            stape2.style.display = 'flex';
        }
        // if just email is not valid
        else if (!validateEmail(email.value)) {
            email.style.border = "2px solid red";
            runToCenter();
        }
        // if email and password is incorrect
        else {
            runToCenter();

        }

        function runToCenter() {
            // set password input border
            password.style.border = "2px solid red";

            // Set button to red
            pbutton.style.backgroundColor = 'red';

            // make the button visible again
            pouletButton.style.opacity = 1;

            // return the button to its original position
            pouletButton.style.marginLeft = '0';
            

            // change filter color of image and set it red 
            redpoulet = `-webkit-filter: invert(40%) grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(400%) contrast(2);
            filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.8);`;
            pouletgif.style = redpoulet;
            pouletpng.style = redpoulet;

            // show poulet animation
            pouletgif.style.display = "flex";
            
            // Hide static poulet
            pouletpng.style.display = "none";

            // after .7s, stop poulet animation and set staic poulet
            setTimeout(() => {
                pouletpng.style.display = "flex";
                pouletgif.style.display = "none";
            }, 700)
        }

    }, 900);

}


// hide stape 2 and show stape 1
function prevStape() {
    location.reload();
}
