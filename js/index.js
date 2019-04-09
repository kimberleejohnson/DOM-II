// Adding event listeners to the site 

// Body 

const body = document.querySelector('body'); 
body.addEventListener('keypress', function(eventObject) {
    body.style.backgroundColor = 'red';
    eventObject.stopPropagation();
});

// Nav logo 
const navLogo = document.querySelector('.logo-heading'); 
// console.log(navLogo);
navLogo.addEventListener('mouseover', function(eventObject) {
    console.log('We moused over:', eventObject.clientX);
    eventObject.stopPropagation();
});

// Nav items
const navItems1 = document.querySelector('.nav-link1'); 
navItems1.addEventListener('click', function(eventObject) {
       console.log(`We clicked on ${eventObject.clientX}`); 
       eventObject.stopPropagation();      
       eventObject.preventDefault();           
 });

const navItems2 = document.querySelector('.nav-link2'); 
navItems2.addEventListener('click', function(eventObject) {
       console.log(`We clicked on ${eventObject.clientX}`);    
       eventObject.stopPropagation();  
       eventObject.preventDefault();            
 });

const navItems3 = document.querySelector('.nav-link3'); 
navItems3.addEventListener('click', function(eventObject) {
       console.log(`We clicked on ${eventObject.clientX}`);    
       eventObject.stopPropagation();  
       eventObject.preventDefault();           
 });

const navItems4 = document.querySelector('.nav-link4'); 
navItems4.addEventListener('click', function(eventObject) {
       console.log(`We clicked on ${eventObject.clientX}`);  
       eventObject.stopPropagation();
       eventObject.preventDefault();               
 });

// Intro bus image 
const introImg = document.querySelector('.intro img'); 
introImg.addEventListener('load', function(eventObject) {
    console.log("Bus loaded!");
    eventObject.stopPropagation();
});    

// Welcome to Fun Bus! intro header 
const introHeader = document.querySelector('.intro h2'); 
introHeader.addEventListener('copy', function(eventObject) {
    console.log("Woah, you copied me!");
    eventObject.stopPropagation();
});  

// Let's go! header
const letsGo = document.querySelector('.content-section h2'); 
letsGo.addEventListener('mouseenter', function(eventObject) {
    console.log("Thanks for selecting me!");
    eventObject.stopPropagation();
}); 

// Let's go! Img 
const letsGoImg = document.querySelector('.content-section img'); 
letsGoImg.addEventListener('mouseleave', function(eventObject) {
    console.log("Thanks for leaving your mouse");
    eventObject.stopPropagation();
});

// Adventure awaits! Header
const adventureAwaits = document.querySelector('.inverse-content h2'); 
adventureAwaits.addEventListener('mousemove', function(eventObject) {
    console.log("Thanks for moving the mouse over me");
    eventObject.stopPropagation();
});

// Adventure awaits! Img 
const adventureImg = document.querySelector('.inverse-content img'); 
adventureImg.addEventListener('mouseleave', function(eventObject) {
    console.log("Thanks for leaving your mouse");
    eventObject.stopPropagation();
});

// Destination image 
const destinationImg = document.querySelector('.content-destination img'); 
destinationImg.addEventListener('mouseup', function(eventObject) {
    console.log("Thanks for the mouseup!");
    eventObject.stopPropagation();
});

// Buttons 
const destinationBtn1 = document.querySelector('.btn1'); 
destinationBtn1.addEventListener('dblclick', function(eventObject) {
    console.log("Thanks for the dblclick!");
    eventObject.stopPropagation();
});

const destinationBtn2 = document.querySelector('.btn2'); 
destinationBtn2.addEventListener('dblclick', function(eventObject) {
    console.log("Thanks for the dblclick!");
    eventObject.stopPropagation();
});

const destinationBtn3 = document.querySelector('.btn3'); 
destinationBtn3.addEventListener('dblclick', function(eventObject) {
    console.log("Thanks for the dblclick!");
    eventObject.stopPropagation();
});


