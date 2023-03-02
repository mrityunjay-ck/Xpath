// chrome.devtools.panels.elements.createSidebarPane("My Xpath", function(sidebar) {
//     // Code to execute when the panel is created
//     console.log(" side bar Panel created!");
  
//     // Code to execute when the panel is shown
//     sidebar.onShown.addListener(function() {
//       console.log("Panel shown!");
//     });
//   });
  
  chrome.devtools.panels.elements.createSidebarPane("My Panel", function(sidebar) {
    // Print a message to the panel
    sidebar.setExpression("console.log('Hello, World!')", "Hello, World!");
  
    // Code to execute when the panel is shown
    sidebar.onShown.addListener(function() {
      console.log("Panel shown!");
    });
  });
  
// chrome.devtools.panels.create("My Panel", null, "devtools.html", function(panel) {
//     // Code to execute when the panel is created
//     console.log("Panel created!");
  
//     // Code to execute when the panel is shown
//     panel.onShown.addListener(function(window) {
//       console.log("Panel shown!");
//     });
//   });
  