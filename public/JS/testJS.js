var startTime = (function getSpeedInfo(){
    return Date.now();
})();

window.onload = function speedTimeandLocation(){
    //IIFE variant
    var speedInfo = document.getElementById("SpeedTest");
    var loadedTime = new Date().getTime();
    loadedTime -= startTime;
    speedInfo.innerHTML += loadedTime + ' milliseconds'

    //window.performance variant
    let time = window.performance
    let pageloadtime = time.timing.loadEventStart - time.timing.navigationStart;
    speedInfo.innerHTML += "    Другой метод говроит, что грузится за: " + pageloadtime + " милисекунд";

    locationObj = document.location;
    var elem = document.getElementsByClassName("nav-href");
    for (var i = 0; i< elem.length; i++) {
        var lookLink = elem.item(i)
        if (lookLink.href === locationObj.href) {
            lookLink.classList.add("activeLink")
        }
    }

}

