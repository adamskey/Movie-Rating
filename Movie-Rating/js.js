

function ratingOnClick(id){
   const n = parseInt(id);
        for (i=1; i <= n; i++){
            document.getElementById(i).src="star.png";
        }
        for (i=n+1; i < 6; i++){
            document.getElementById(i).src="star-gray.png";
        }
    
    document.getElementById("result").innerHTML = "You rated " + n + " star";
}

function rated(){
  
  
}

function unrated(id){
    
}

function resetStars(){
    for(i=1; i < 6; i++)
    document.getElementById(i).src="star-gray.png";
}