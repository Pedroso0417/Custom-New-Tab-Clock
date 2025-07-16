chrome.tabs.onCreated.addListener(function(tab) {
  if (tab.url === 'chrome://newtab/') {
    chrome.tabs.update(tab.id, { url: chrome.runtime.getURL('newtab.html') });
  }
});
