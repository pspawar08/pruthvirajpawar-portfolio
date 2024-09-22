import { initializeApp } from  "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getPerformance } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-performance.js"
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCqBiRoGPJ5Uq1NvdL0uc8jrc9In0BZreo",
  authDomain: "pruthviraj-portfolio.firebaseapp.com",
  projectId: "pruthviraj-portfolio",
  storageBucket: "pruthviraj-portfolio.appspot.com",
  messagingSenderId: "928035000234",
  appId: "1:928035000234:web:c46ee6ff9ada474a01a5d3",
  measurementId: "G-KF4MJ1G8RQ"
};
      // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);
const db = getFirestore(app);


$(document).ready(function(){


$(window).on('load',function(){
  $('.preloader').addClass('complete')
});

$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if(scroll >=50){
    $(".sticky").addClass("stickyadd");
  }else{
    $(".sticky").removeClass("stickyadd");
  }
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  try {
    // Add the form data to the Firestore database
    await addDoc(collection(db, "contacts"), {
      name: name,
      email: email,
      subject: subject,
      message: message,
      timestamp: new Date() // Optionally add a timestamp
    });
    // Optionally, show a success message or clear the form
    alert("Message submitted successfully!");
    contactForm.reset();
  } catch (error) {
    console.error("Error submitting message: ", error);
    alert("Failed to submit message. Please try again.");
  }
});

var waypoint = new Waypoint({
  element: document.getElementById('experience'),
  handler: function() {

    var p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute("style", "width:95%;transition:1s all;");
    p[1].setAttribute("style", "width:90%;transition:1.5s all;");
    p[2].setAttribute("style", "width:75%;transition:1.7s all;");
    p[3].setAttribute("style", "width:70%;transition:2s all;");
    p[4].setAttribute("style", "width:85%;transition:2.3s all;");
    p[5].setAttribute("style", "width:95%;transition:2.5s all;");


  },
   offset: '90%'
});

// adding fadeInUp animation to child of div with class .way-col
var $child = $('.way-fade-up').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInUp');
  },{offset: '90%'});
});

var $child = $('.way-fade-left').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInLeft');
  },{offset: '90%'});
});

var $child = $('.way-fade-right').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInRight');
  },{offset: '90%'});
});

$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,   // since one item ou can remove it
    nav:false,
    // dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    items:1,
    // animateOut : "fadeOut",
    animateIn : "fadeInRight"

});


var filterizd = $('.filter-container').filterizr({
   animationDuration: .3,

});

$('.img-loaded').imagesLoaded()
  .done( function( instance ) {
    var filterizd = $('.filter-container').filterizr({
       animationDuration: .5,

    });
  });


  var typed = new Typed(".element", {
  strings: ["Pruthviraj Pawar", "a Full Stack Developer"],
  smartBackspace: true,
   typeSpeed: 100,
   backSpeed: 100,
   loop: true,
  loopCount: Infinity,
  startDelay: 1000
});


$('a').smoothScroll({

  speed:2000,
});

});
