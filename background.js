chrome.contextMenus.create({
    "id": "XPath",
    "title": "Select Element",
    "contexts": ["all"]
})

// let getXPath = (info, tab) => {
//     let msg ={
//         type : "getXpath"
//     }
//     chrome.tabs.sendMessage(tab.id , msg , ()=> {
//         console.log("Message Sent Successfully");
//     })
//     console.log(tab);
// }
// chrome.contextMenus.onClicked.addListener(function(info, tab){
//     console.log("hellobg")
//     chrome.runtime.onMessage.addListener(
//         function(request, sender, sendResponse) {
//         if (request.greeting === "hello")
//             sendResponse({farewell: "goodbye3333"});
//         }
//     );
// })


// background.js

//Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("Received message:", message);
    
    // Extract the id and class attributes from the message
    var id = message.id;
    var classes = message.classes;
    
    // Do something with the id and class attributes
    // For example, log them to the console
    console.log("Element id:", id);
    console.log("Element classes:", classes);
  });
  


chrome.runtime.onInstalled.addListener(() => {
    console.log("hellobg")

    //receiving a message
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
        if (request.greeting === "hello")
            sendResponse({farewell: "goodbye3333"});
        }
    );
});



//console will print on service worker console
