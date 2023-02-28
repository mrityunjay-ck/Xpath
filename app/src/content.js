//console will print on page not on service worker.

// // alert("Welcome")

// let reciever =(message , sender , sendResponse) => {
//     if(message=== 'getXpath')
//         console.log(message);
//         parseDOM();
//     };
// chrome.runtime.onMessage.addListener(reciever);



// let targetElement=null
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log("DOM loaded successfully");
// });
// function init(){
//     document.addEventListener("mousedown", (event) => {
//         // console.log(event.target);
//         targetElement=event.target;

//     }, false);
// }
// function parseDOM(){
//     console.log(targetElement);
//     console.log(targetElement.id);
//     console.log(targetElement.placeholder);

// }

chrome.runtime.sendMessage({greeting :"hello"},function(response){
    console.log(response.farewell);

});

// content.js

// Get all elements on the page
var elements = document.getElementsByTagName("*");

// Loop through all elements and extract the id and class attributes
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  var id = element.getAttribute("id");
  var classes = element.getAttribute("class");
  
  // Send the id and class attributes to the background script
  chrome.runtime.sendMessage({id: id, classes: classes});
}



