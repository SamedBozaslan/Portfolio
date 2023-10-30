// If page is loaded remove the language

    document.getElementById('language').hidden = true;

// If button is clicked show language
document.getElementById('btn').onclick = function () {
    document.getElementById('language').hidden = false;
    document.getElementById('txt').hidden = true;
    document.getElementById('btn').hidden = true;

};

document.getElementById('rtrn').onclick = function () {
    document.getElementById('language').hidden = true;
    document.getElementById('txt').hidden = false;
    document.getElementById('btn').hidden = false;
}

