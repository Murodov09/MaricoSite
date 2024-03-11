AOS.init();

window.onscroll = function() {changeNavbarColor()};

function changeNavbarColor() {
  const navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.backgroundColor = "#020F18";
    navbar.style.transition = '0.2s ease all'
  


  } else {
    navbar.style.background = "none"; 
  }
}



