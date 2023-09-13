// detect when a tab is updated

function init() {
    chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
            if (!tab.url) return;
             if (tab.url.includes('betclic.fr/football')) {
                console.log('Starting injection for url: ' + tab.url);
                chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        files: ['runner.js']
                    }
                );
            }
        });
    });
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === "complete") {
        if (!tab.url) return;
        if (tab.url.includes('betclic.fr/football')) {
            console.log('Starting injection for url: ' + tab.url);
            chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ['runner.js']
                }
            );
        }
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "onEnabledChange") {
        callInjections(request.enabled);
    }
    return true;
});

function callInjections(enabled) {
    chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
            if (!tab.url) return;
            if (tab.url.includes('betclic.fr/football')) {
                // inject script to call onEnabledChange message (not file)
                chrome.scripting.executeScript({
                    target: {tabId: tab.id},
                    function: function (enabled) {
                        onExtensionEnabledChange(enabled);
                    },
                    args: [ enabled ]
                });
            }
        });
    });
}


init();