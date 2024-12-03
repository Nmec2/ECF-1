let newsletterId = document.getElementById('newsletter');

let filterId = document.getElementById('filter');

let color  =  document.getElementsByClassName("mask");
let color2  =  document.getElementById("mask-modifier");
let colorMove  =  document.getElementsByClassName("colorMove");
let colorTab = [];
let couleur;

let currentUrl = window.location.search;
let path = window.location.pathname;

// console.log(currentUrl);
// console.log(path);

if (path == "/product.html") {
    // console.log("dans le if");
    currentUrl = currentUrl.replace("?", "");
    currentUrl = currentUrl.split('-');
    let a = currentUrl[0];
    let b = currentUrl[1];
    let c = currentUrl[2];
    couleur = "rgb(" + a + "," + b + "," + c + ")";
    // console.log(couleur);
    // console.log(color2);
    color2.style.backgroundColor = couleur;
    // console.log(couleur);
} 



console.log

for (let i = 0; i < color.length; i++) {
    console.log(i);
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let col = "rgb(" + r + "," + g + "," + b + ")"
    color[i].style.backgroundColor = col;
    colorTab[i] = col;
    colorMove[i].href="product.html?" + r + "-" + g + "-" + b;
    console.log(colorTab[i]);
    console.log(color[i]);
}


// mask.addEventListener('click', function (e) {
//    console.log(mask); 
// });

console.log(document.getElementsByClassName('mask'));

var colorInput = document.getElementById("colorier");
let maskColor = document.getElementById("mask-modifier");

console.log(colorInput);

colorInput.addEventListener("input", function() {
    let couleurChoice = colorInput.value;
    maskColor.style.backgroundColor = couleurChoice;
})

function short(){
    
}



function closeNews() {
    newsletterId.style.display = "none";
}

function filterToggle() {
    if (filterId.style.display == "block") {
        filterId.style.display = "none";
    } else {
        filterId.style.display = "block";
        // filterId.style.position = "absolute";
    }
}

