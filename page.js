var myfunc = function(){
    document.getElementById("navbarSupportedContent").style.backgroundColor="red";
};
document.getElementById("navbarSupportedContent").click();

var button01 = document.getElementById("button01"); 
button01.addEventListener("mouseover", function(){
    button01.style.backgroundColor = "green"
});
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//zoom in zoom out
document.getElementById("img01").addEventListener("mouseover", function(){
    document.querySelector("#img01").style.transform= "scale(1.5)"
})
document.getElementById("img01").addEventListener("mouseout", function(){
    document.querySelector("#img01").style.transform= "scale(1)"
})

//map
function initMap(){
    var option = { 
        zoom : 20,
        center : {
            lat : 37.7749, lng : -122.4194
        }
    }
    var map = new google.maps.Map (document.getElementById("map"), option);
}

// form
function myfunction(){
    const firstnameRegex = /[a-zA-Z]{2,20}/igm;
    const lastnameRegex = /[a-zA-Z]{2,20}/igm;
    const emailRegex = /[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim;
    const phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/gm;
    const messageRegex = /[a-zA-Z]{2,120}/igm;


const firstname = document.getElementById("firstname").value;
const lastname = document.getElementById("lastname").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;
const phone = document.getElementById("phone").value;

if(firstnameRegex.test(firstname)){
    document.getElementById("errorfirstname").innerHTML="";
}
else if(firstname==""){
    document.getElementById("errorfirstname").innerHTML="please enter firstname";

}
 else{
    document.getElementById("errorfirstname").innerHTML="enter valid firstname";
}
if(lastnameRegex.test(lastname)){
    document.getElementById("errorlastname").innerHTML="";
}
else if(lastname==""){
    document.getElementById("errorlastname").innerHTML="please enter lastname";
}
 else{
    document.getElementById("errorlastname").innerHTML="enter valid lastname";
}
if(emailRegex.test(email)){
    document.getElementById("erroremail").innerHTML="";
}
else if(email==""){
    document.getElementById("erroremail").innerHTML="please enter email";
}else{
    document.getElementById("erroremail").innerHTML="enter valid email";
}
if(phoneRegex.test(phone)){
    document.getElementById("errorphone").innerHTML="";
}
else if(phone==""){
    document.getElementById("errorphone").innerHTML="please enter contact number";
}
else{
    document.getElementById("errorphone").innerHTML="enter valid contact number";
}
if(messageRegex.test(message)){
    document.getElementById("errormessage").innerHTML="";
}
else if(message==""){
    document.getElementById("errormessage").innerHTML="please enter message";
    return false;
}
else{
    document.getElementById("errormessage").innerHTML="enter valid message";
    return false;
}
}

//page loader
const loader = document.getElementById("loader");
window.addEventListener("load", function() {
setTimeout(function() {
    loader.style.display = "none";
    content.style.display = "block";
}, 1000);
}); 


const grid = document.querySelectorAll(".gallery");
const All =document.querySelectorAll(".all");
All.forEach(all => all.addEventListener("click", filterItems));

function filterItems(){
    const category = this.id;
    grid.forEach(gallery => {
        gallery.style.display ="none";
        if (gallery.classList.contains(category) || category === "All") {
            gallery.style.display ="block";
        }
    })
}