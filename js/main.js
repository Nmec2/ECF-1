let newsletterId = document.getElementById('newsletter');

let filterId = document.getElementById('filter');

function closeNews() {
    newsletterId.style.display = "none";
}

function filterToggle() {
    if (filterId.style.display == "block") {
        filterId.style.display = "none";
    } else {
        filterId.style.display = "block";
    }
}