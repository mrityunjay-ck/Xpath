//alert("Welcome")

// let reciever =(message , sender , sendResponse) => {

//     console.log(message);
// };
// chrome.runtime.onMessage.addListener(reciever);

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM loaded successfully");
    init();
});
function init(){
    document.addEventListener("mousedown", (event) => {
        console.log(event.target);
    }, false);
}