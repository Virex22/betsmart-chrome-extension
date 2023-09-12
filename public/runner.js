
if (document.querySelector('#runner') === null) {
    console.log('Starting interval');
    setInterval(function () {

    }, 5000);

    //create hidden element to check if script is already injected
    el = document.createElement('div');
    el.id = 'runner';
    el.style.display = 'none';
    document.body.appendChild(el);
}