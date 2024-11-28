let newsletterId = document.getElementById('newsletter');

let filterId = document.getElementById('filter');

let color  =  document.getElementsByClassName("mask");

for (let i = 0; i < color.length; i++) {
    console.log(i);
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let col = "rgb(" + r + "," + g + "," + b + ")"
    color[i].style.backgroundColor = col;
    console.log(col)
}

var colorInput = document.getElementById("colorier");
let maskColor = document.getElementById("mask-modifier");

console.log(colorInput);

colorInput.addEventListener("input", function() {
    let couleurChoice = colorInput.value;
    maskColor.style.backgroundColor = couleurChoice;
})






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

