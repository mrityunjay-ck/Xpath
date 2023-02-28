console.log("Sidebar pannel");

chrome.devtools.panels.elements.createSidebarPane("My Xpath",
    function(sidebar) {
        // sidebar initialization code here
        console.log("Hello Everyone");
        chrome.devtools.panels.elements.onSelectionChanged
        .addListener(() => {
                    panels.setExpression()
        })
});