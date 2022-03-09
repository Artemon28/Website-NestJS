function getNumber(string) {
    if (string[string.length - 1] === 'd')
        return string.slice(0, -1);
    else
        return string;
}

var count = 0;

function oldTasks() {
    let keys = Object.keys(localStorage);
    keys.sort(function(a, b) {
        return getNumber(a) - getNumber(b);
    });
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let lineValue = localStorage.getItem(key);
        newLine(lineValue, key);
        count = getNumber(key)
    }
}

document.addEventListener('DOMContentLoaded', oldTasks, false);
var close = document.getElementsByClassName("close");
var dels = document.getElementsByClassName("del");

function newElement() {
    var inputValue = document.getElementById("myInput").value;
    count++;
    localStorage.setItem(count, inputValue);
    newLine(inputValue, count);
}

function newLine(value, key) {

    document.getElementById('myInput').value='';
    var ul = document.getElementById("myUL");
    var templ = document.getElementById("line");
    var clone = templ.content.cloneNode(true);
    clone.childNodes[1].childNodes[0].data = value;
    if (key[key.length - 1] === 'd')
        clone.childNodes[1].classList.add("done");
    ul.appendChild(clone);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let line = this.parentElement;
            let keys = Object.keys(localStorage);
            keys.sort();
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                if (localStorage.getItem(key) === line.childNodes[0].data) {
                    if (key[key.length - 1] !== "d") {
                        line.classList.add("done");
                        localStorage.removeItem(key);
                        localStorage.setItem(key + "d", line.childNodes[0].data);
                    } else {
                        line.classList.remove("done");
                        localStorage.removeItem(key);
                        localStorage.setItem(getNumber(key), line.childNodes[0].data);
                    }
                }
            }
        }
    }

    for (i = 0; i < dels.length; i++) {
        dels[i].onclick = function() {
            let line = this.parentElement;
            let keys = Object.keys(localStorage);
            keys.sort();
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                if (localStorage.getItem(key) === line.childNodes[0].data) {
                    localStorage.removeItem(key);
                    line.remove();
                }
            }
        }
    }

}