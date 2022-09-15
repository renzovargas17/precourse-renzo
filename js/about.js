const prevButton =document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const maps = document.querySelectorAll(".map");
let = currentlySelected = 0;

prevButton.addEventListener("click", () => {
    maps[currentlySelected].classList.remove("active");
    currentlySelected--;
    maps[currentlySelected].classList.add("active");
    nextButton.disabled = false;
    if(currentlySelected === 0){
        prevButton.disabled =true;
    }
});
nextButton.addEventListener("click", function(){
    maps[currentlySelected].classList.remove("active");
    currentlySelected++;
    maps[currentlySelected].classList.add("active");
    prevButton.disabled = false;
    
    if(maps.length === currentlySelected + 1){
        nextButton.disabled = true;
    }
});