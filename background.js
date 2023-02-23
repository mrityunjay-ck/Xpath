chrome.contextMenus.create({
    "id": "XPath",
    "title": "Select Element",
    "contexts": ["all"]
})
chrome.contextMenus.onClicked.addListener((info, tab) => {
   alert(Object.keys(info))
})