setInterval(function () {
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // check if contain id key
    if (!tabs[0] || !tabs[0].id || !tabs[0].url) {
        return;
    }
    chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['runner.js']
        }
    );
});
}, 5000);