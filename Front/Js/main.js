// window.console = window.console || function(t) {};

// if (document.location.search.match(/type=embed/gi)) {
//     window.parent.postMessage("resize", "*");
//   }

function mostra_oculta(){
var x = document.getElementById("divBack");
// var btn = document.getElementById("myDIV");
if (x.style.display === "none") {
  x.style.display = "block";
  // btn.style.display = "none";

} else {
  x.style.display = "none";
  // btn.style.display = "block";
}
}

function f() {
  document.getElementsByClassName('dropdown')[0].classList.toggle('down');
  document.getElementsByClassName('arrow')[0].classList.toggle('gone');
  if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
    setTimeout(function() {
      document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'
    }, 500)
  } else {
    document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'
  }
}