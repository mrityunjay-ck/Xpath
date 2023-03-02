//console will print on page not on service worker.
chrome.runtime.sendMessage({greeting :"hello"},function(response){
    console.log(response.farewell);

});


document.addEventListener("click", (event) => {
    const element = event.target;
    console.log("Class: ", element.className);
  });

  
// chrome.runtime.sendMessage({ action: "printData", data: "Hello, world!" });

  




