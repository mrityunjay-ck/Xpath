//console will print on service worker console

chrome.contextMenus.create({
    "id": "XPath",
    "title": "Select Element",
    "contexts": ["all"]
})
  
chrome.runtime.onInstalled.addListener(() => {
    console.log("hellobg")
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
// chrome.devtools.panels.create("My Panel", null, "panel.html");

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action === "printData") {
//       chrome.devtools.panels
//         .getPanel("My Panel")
//         .createSidebarPane("My Pane", function(sidebar) {
//           sidebar.setExpression(message.data);
//         });
//     }
//   });
  




