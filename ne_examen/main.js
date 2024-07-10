
const modalWindows = document.getElementsByClassName("modalWindow")[0];
const arrowRight = document.getElementsByClassName("arrow right")[0];
const arrowLeft = document.getElementsByClassName("arrow left")[0];
let saveIndex = NaN;

const galleryArray = [
    "https://i.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkySQXwdNMnI8/PNba8pyNInitV1En1Qdhu0twGmHiymjH/nCd33IfZp41EeJXY33GHrVSLt57xo6pa/VozN-wd4N4lIYXU0b2GSd8QksDYufIEC.jpg",
    "https://i.wfolio.com/x/KfN2JhbB89-m6UeUSQ-43cSGNBDUivJr/9XYvpjgORLjthpfI_fLdRqH1tK71p4IG/jeRvjIvWhQOabJ-YanOeOziw6ztX2jbp/2Dad_SpgUZ6RkwdIMPVwD9PZO8lfEOX-.jpg",
    "https://i.wfolio.com/x/KfN2JhbB89-m6UeUSQ-43cSGNBDUivJr/9XYvpjgORLjthpfI_fLdRqH1tK71p4IG/JFFwDfQvZPk_d5TV3RYSv5nqzFSJL6eC/inGe8ipwKhXMse15OlkhpGhbxJdV5fga.jpg",
    "https://i.wfolio.com/x/vxoyXabZOPN15yoQh522RFzm2B4dU6bB/stnT5YBEZx69uZwdRHdEWy-YZYetx2JK/31epFo8kqnN0LetGDqA6tSYzmSDnD6s-/CZ0BkwVmyWNKcxj_LAB2giAqA8BUrjrm.jpeg"
];

for(let i = 0; i <= galleryArray.length - 1; i++){
    const img = document.createElement("img");
    img.src = galleryArray[i]; 
    document.getElementsByClassName("gallery")[0].appendChild(img);
    saveIndex = i;
    modalWindows.getElementsByTagName("img")[0].src = galleryArray[i] ;
    console.log(saveIndex)
    img.addEventListener("click", (event) => {
        modalWindows.style.display = "flex";
        modalWindows.getElementsByTagName("img")[0].src = img.src;
    })
}

modalWindows.addEventListener("click", (event)=>{
    if(event.target.className == "modalWindow"){
        modalWindows.style.display ="none"; 
    }
});

arrowRight.addEventListener("click",() =>{
    modalWindows.getElementsByTagName("img")[0].src = galleryArray[saveIndex];
});







/* <img/> 
    img src =  "https://i.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkySQXwdNMnI8/PNba8pyNInitV1En1Qdhu0twGmHiymjH/nCd33IfZp41EeJXY33GHrVSLt57xo6pa/VozN-wd4N4lIYXU0b2GSd8QksDYufIEC.jpg"*/

// 1. Светлана, я хочу чтобы по клику на каждое изображение появлялось модальное окно - такое окно: в котором картинка с текстом будет, еще хочу чтобы в модальном окне переключались картинки друг за дружкой
// мир во всем мире