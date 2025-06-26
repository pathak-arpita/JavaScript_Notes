//! Event capturing & Event Bubbling ---------------------------->

//^ Event capturing : 
// Event capturing means the event starts from the top (like document) and goes down to the element that was clicked.

//^ Event capturing : 
// Event bubbling means the event starts from the clicked element (target) and goes up to its parent elements, one by one.

//~NOTE -----------------------> 
//*          1). the default nature of events in JavaScript is bubbling.
//*          2). To make it a capturing event, we have to pass " TRUE " as the third argument in addEventListener.


document.querySelector("#greatGrandParents")
.addEventListener("click" , ()=>{
    console.log("Great Grand Parent div is clicked")
},true)


document.querySelector("#grandParents")
.addEventListener("click" , ()=>{
    console.log("Grand Parent div is clicked")
},false)

document.getElementById("parents")
.addEventListener("click" , ()=>{
    console.log("Parent div is clicked")
},true)

document.getElementById("child")
.addEventListener("click" , ()=>{
    console.log("Child div is clicked")
},false)

// OUTPUT ----------------------> WHEN CLICK ON CHILD DIV
//     1 .  Great Grand Parent div is clicked
//     2 .  Parent div is clicked
//     3 .  Child div is clicked
//     4 .  Grand Parent div is clicked


// OUTPUT ----------------------> WHEN CLICK ON PARENT DIV
//     1 .  Great Grand Parent div is clicked
//     2 .  Parent div is clicked
//     3 .  Grand Parent div is clicked