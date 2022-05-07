//select landing page element
let landingPage = document.querySelector(".landing-page");

//get array of images
let imgsArray = ["01.png","03.webp"];

setInterval(() => {

//get random number
let randomNumber = Math.floor(Math.random()*imgsArray.length);

//change background images url
landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
},10000);

//function showprice1() {
//var price = "price is: "
//document.getElementById('price').innerhtml =price+6;}

//Object.onclick = function(){100};
//object.addEventListener("click", myScript);

//function changePicture() {
  //  var myPopup = window.open("the price is: ", "100", "width=200, height=100");
//}
// اخر حاجه



