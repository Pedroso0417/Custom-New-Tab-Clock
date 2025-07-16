chrome.runtime.onInstalled.addListener(() => {
  console.log('New Tab Clock extension installed.');

  // Example: You can set some initial state, like storing user preferences
  chrome.storage.local.set({ greeting: "Good Day Cris" }, () => {
    console.log('Initial greeting set in local storage.');
  });
});

// You can also listen for when the user opens a new tab and show a message
chrome.tabs.onCreated.addListener((tab) => {
  console.log('New tab created:', tab);
});

// Handle messages from other parts of the extension (optional)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getGreeting") {
    chrome.storage.local.get("greeting", (data) => {
      sendResponse({ greeting: data.greeting });
    });
    return true;  // Indicate that you are sending a response asynchronously
  }
});