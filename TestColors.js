// This file tests every color on the VioletColor slider, including some of them offscreen.
// To run this, paste the contents of this very file into your browser's JavaScript console
// and hit the return or Enter key.


// Variables to be used later on
////////////////////////////////

// The circle you click on and drag
var h = document.getElementById('handleCircle');
// The x position to start on. Smaller numbers mean further left
var idx = -1200; 
// The first part of the default style information
var styles1 = "visibility: visible; touch-action: none; user-select: none; transform: translate3d("; 
// The button that tests your selection
var x = document.getElementById('buyButton'); 
// The second part of the default style information
var styles2 = "px, 0px, 0px);"; 
// The direction to search in
var front = true; 

// This defines the method used to test every color
function next() {
    // First move 1 px right
    h.style = styles1+idx+styles2;
    // Second click button so changes are registered
    h.click();
    // Third click buy button
    x.click();
    // Close modal (popup) if unsuccessful
    var q = document.getElementById('backButton');
    if (!(q === null)) {
        // Make sure the text didn't change on the button
        if (q.textContent === "GO BACK") {
            // Nothing seems to have changed, click the back button
            q.click();
            
        // Testing to see if the position of the slider is within bounds or not
        if (idx > 1200) {
            front = !front;
        }
        if (idx< -1200) {
            front = !front;
        }
            
        // Move either backwards or forwards depending on the direction
        // specified
        if (front) {
            idx = idx+1;
        } else {
            idx = idx-1;
        }
            
        // Disabled for performance reasons
        //console.log(idx);
        }
        
  } else {

    alert('Something happened!');}
}

// Run the above function every 30 milliseconds. 
setInterval(next, 30);
