var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0rem";
  } else {
    document.getElementById("navbar").style.top = "-50rem";
  }
  prevScrollpos = currentScrollPos;
}

