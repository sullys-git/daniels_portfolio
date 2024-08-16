// let navWrapper = document.getElementById("nav-wrapper");
// let navHTML = '<div class="nav-items"><ul><li><a href="index.html">Home</a></li><li><a href="#about-section">About</a></li><li><a href="resume.html">Resume</resume></li><li><a href="#portfolio-section">Portfolio</a></li><li><a href="#contact-section">Contact</a></li></ul></div>'
// navWrapper.innerHTML = navHTML;


// function chargebattery() {
//     let a = document.getElementById("maroon-bar");
//     setTimeout(function () {
//       a.style.padding = "0px";
//     }, 500);
//     setTimeout(function () {
//         a.style.padding = "3px 10px";
//       }, 1000);
//     setTimeout(function () {
//         a.style.padding = "3px 20px";
//       }, 1500);
//     setTimeout(function () {
//         a.style.padding = "3px 30px";
//       }, 2000);
//       setTimeout(function () {
//         a.style.padding = "3px 40px";
//       }, 2500);
//       setTimeout(function () {
//         a.style.padding = "3px 50px";
//       }, 3000);
//       setTimeout(function () {
//         a.style.padding = "3px 60px";
//       }, 3500);
//       setTimeout(function () {
//         a.style.padding = "3px 70px";
//       }, 4000);
//       setTimeout(function () {
//         a.style.padding = "3px 80px";
//       }, 4500);
//       setTimeout(function () {
//         a.style.padding = "3px 100px";
//       }, 5000);
//   }
//   chargebattery();
//   setInterval(chargebattery, 10000);

const navOpenBtn = document.getElementById("nav-open-btn")
const navigation = document.getElementById("navigation")

navOpenBtn.addEventListener("click", function() {
  if( navigation.style.display === "block"){
    navigation.style.display = "none"
  } else {
     navigation.style.display = "block"
  }
})
