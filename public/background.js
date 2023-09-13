
let enabled = false;
let tab = null;


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // Vérifiez si la tab est en train d'être chargée (rafraîchie)
    if (changeInfo.status === "loading") {
        console.log("La tab a été rafraîchie !");
        // Vous pouvez ajouter votre logique ici pour réagir au rafraîchissement de la tab
    }
});
setInterval(function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // check if contain id key
        if (!tabs[0] || !tabs[0].id || !tabs[0].url) {
            return;
        }
        tab = tabs[0];
        if (tabs[0].url.includes('betclic.fr/football')) {
            console.log('Starting injection for url: ' + tabs[0].url);
            chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    files: ['runner.js']
                }
            );
        }
    });

    chrome.storage.sync.get(['enabled'], function (result) {
        if (result.enabled !== undefined) {
            enabled = result.enabled;
        }
    });

}, 1000);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getDataFromStorage") {
        sendResponse({ enabled: enabled , lastTab: tab});
    }
});