let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");
let closed = document.querySelector(".closed");
menu.onclick = () => {
   menu.classList.toggle("closed");
   navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove("closed");
    navbar.classList.remove('open');
};
const header = document.querySelector(".header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.scrollY > 140)
})







let sosh = document.querySelector(".sosh");
let icon = document.querySelector(".icon");
let clo = document.querySelector(".clo");
sosh.addEventListener("click", function(){
    icon.classList.toggle('kaka');
    
});
clo.addEventListener("click", function(){
   icon.classList.remove('kaka');
});

var texts = ["League", "BettersPlayer", "Statistics of the best", "Club Games", "Nacional Games"];
var index = 0;
function displayText(){
    var element = document.querySelector(".tt");
    element.innerHTML = texts[index];
    index = (index + 1) % texts.length;
}
setInterval(displayText, 3000);


var fullframe = document.getElementById("fullframe");
var iframe = fullframe.querySelector("iframe");
var closes = fullframe.querySelector(".closes");
let body = document.querySelector('body');
function fullscreen(url){
    iframe.src= url ;
    body.classList.add('active');
}
function closebtn(){
    iframe.src= '' ;
    body.classList.remove('active');
}

function showImage(imagesrc){
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imagesrc;
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "block";
    document.body.style.overflow = "hiden";
}
function closeImage(){
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "none";
    document.body.style.overflow = "auto";
}