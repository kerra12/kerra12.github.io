function openNavigation(Navigation) {
    var i;
    var x = document.getElementsByClassName("navigation");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(Navigation).style.display = "block"; 
}
   
function homeNavigation(Navigation) {
    var i;
    var x = document.getElementsByClassName("navigation");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(Navigation).style.display = "flex"; 
}
   var myIndex = 0;
    carousel();
   
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

    var slideIndex = 1;
    showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}

const search = () => {
    const searchbox = document.getElementById("search-movie").value.toUpperCase();
    const movie = document.querySelectorAll(".link")
    const moviename = document.getElementsByTagName("font")

    for(var i=0; i < moviename.length; i++){
        let match = movie[i].getElementsByTagName('font')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                movie[i].style.display = "";
            }else{
                movie[i].style.display = "none";
            }
        }
    }
}