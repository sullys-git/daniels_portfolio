const navOpenBtn = document.getElementById("nav-open-btn")
const navigation = document.getElementById("navigation")

navOpenBtn.addEventListener("click", function() {
  
  if( navigation.style.display == "block"){
    navigation.style.display = "none"
  } else {
     navigation.style.display = "block"
  }
})

