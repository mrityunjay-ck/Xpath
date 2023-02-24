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
//         console.log("Message Sent Successfully")
//     })
//     console.log(tab);
// }
// chrome.contextMenus.onClicked.addListener((info, tab) => {
//     getXPath(info, tab)
// })
