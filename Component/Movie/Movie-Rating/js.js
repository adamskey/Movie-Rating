let ratedStars = 0;

function ratingOnClick(element) {
    let value = element.getAttribute('id');
    const n = parseInt(value);
    lightAllStarsUpTo(n);
    document.getElementById("result").innerHTML = "You rated " + n + " star";
    ratedStars = n;
}
function lightAllStarsUpTo(n) {
    for (i = 1; i <= n; i++) {
        document.getElementById(i).src = "star.png";
    }
    for (i = n + 1; i < 6; i++) {
        document.getElementById(i).src = "star-gray.png";
    }
}

function hover(id) {
    lightAllStarsUpTo(id);
}

function unhover() {
    lightAllStarsUpTo(ratedStars);
}

function resetStars() {
    for (i = 1; i < 6; i++)
        document.getElementById(i).src = "star-gray.png";
        document.getElementById("result").innerHTML = " Please rate the movie.";
        ratedStars = 0;
}