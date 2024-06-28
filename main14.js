console.log("1")
const popUp = document.getElementsByClassName("popup")[0];
const block = document.getElementsByClassName("imgs")[0];
let isModalShown = false; // Флаг
const img = document.getElementsByTagName("img");


for(let i = 0; i <= 4; i++){
    img[i].addEventListener("click", (event) => {
        if (!isModalShown){
            popUp.style.display = "flex";
            popUp.getElementsByTagName("img")[0].src = event.srcElement.src 
            console.log(event);
            isModalShown = true;
        }
    });
}


const close = document.getElementsByClassName("close")[0];
close.addEventListener("click", () => {
    popUp.style.display = "none";
    console.log("close");
    isModalShown = false;
})
