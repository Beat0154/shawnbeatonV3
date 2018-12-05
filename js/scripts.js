var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.transform = "translateY(0rem)";
  } else {
    document.getElementById("navbar").style.transform = "translateY(-17rem)";
  }
  prevScrollpos = currentScrollPos;
}



var thatsMeScroll = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 300) {
     document.getElementById("thatsme").style.transform = "translateX(-15rem)"; 
    }
    
    
}
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 300) {
     document.getElementById("thatsme").style.transform = "translateY(-18rem)"; 
    }
    
    
}