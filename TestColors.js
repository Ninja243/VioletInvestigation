// This file tests every color on the VioletColor slider, including some of them offscreen.
// To run this, paste the contents of this very file into your browser's JavaScript console
// and hit the return or Enter key.

var h = document.getElementById('handleCircle'); var idx = -1200; var styles1 = "visibility: visible; touch-action: none; user-select: none; transform: translate3d("; var x = document.getElementById('buyButton'); var styles2 = "px, 0px, 0px);"; var front = true; 

function next() {
    // First move 1 px right
    h.style = styles1+idx+styles2;
  // Second click button so changes are registered
  h.click();
  // Third click buy button
    x.click();
  // Close modal if unsuccessful
    var q = document.getElementById('backButton');
    if (!(q === null)) {
        if (q.textContent === "GO BACK") {
        q.click();
        if (idx > 1200) {
            front = !front;
        }
        if (idx< -1200) {
            front = !front;
        }
        if (front) {
        idx = idx+1;
        } else {
        idx = idx-1;
        }
        //console.log(idx);
      //next();
        }
        
  } else {

    alert('Something happened!');}
}

setInterval(next, 30);
