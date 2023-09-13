
if (document.querySelector('#runner') === null) {
    console.log('Starting interval');
    setInterval(function () {
        console.log('Sending message');
        chrome.runtime.sendMessage({ action: "getDataFromStorage" }, function(response) {
            console.log(response);
        });
    }, 1000);

    //create hidden element to check if script is already injected
    el = document.createElement('div');
    el.id = 'runner';
    el.style.display = 'none';
    document.body.appendChild(el);
}