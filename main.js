if (!Cookies.get("fudge cookie")) {
    Cookies.set("fudge cookie", 0);
}

var addFudge = 0;

function addFudgeCookie() {
    addFudge = addFudge + 1;

    var fudgeNumber = addFudge;
    Cookies.set("fudge cookie", fudgeNumber) + addFudge;  
    var totalFudge = Cookies.get("fudge cookie");
    console.log(totalFudge + " fudge");
    document.querySelector("#fudge");
    document.querySelector("#fudgeCookie").innerHTML = "You have " + fudgeNumber + " fudge cookies";
}


if (!Cookies.get("smores cookie")) {
    Cookies.set("smores cookie", 0);
}

var addSmores = 0;

function addSmoresCookie() {
    addSmores = addSmores + 1;

    var smoresNumber = addSmores;
    Cookies.set("smores cookie", smoresNumber) + addSmores;  
    var totalSmores = Cookies.get("smores cookie");
    console.log(totalSmores + " smores ");
    document.querySelector("#smores");
    document.querySelector("#smoresCookie").innerHTML = "You have " + smoresNumber + " smores cookies";
}


if (!Cookies.get("lemon cookie")) {
    Cookies.set("lemon cookie", 0);
}

var addLemon = 0;

function addLemonCookie() {
    addLemon = addLemon + 1;

    var lemonNumber = addLemon;
    Cookies.set("lemon cookie", lemonNumber) + addLemon;  
    var totalLemon = Cookies.get("lemon cookie");
    console.log(totalLemon + " lemon");
    document.querySelector("#lemon");
    document.querySelector("#lemonCookie").innerHTML = "You have " + lemonNumber + " lemon cookies";
}

function onPageLoad() {
    document.querySelector("#fudgeCookie").innerHTML = "You have " + Cookies.get("fudge cookie") + " fudge cookies";
    document.querySelector("#smoresCookie").innerHTML = "You have " + Cookies.get("smores cookie") + " smores cookies";
    document.querySelector("#lemonCookie").innerHTML = "You have " + Cookies.get("lemon cookie") + " lemon cookies";
}

onPageLoad();

function zeroCookieCount() {
    Cookies.set("fudge cookie", 0);
    document.querySelector("#fudgeCookie").innerHTML = "You have " + 0 + " fudge cookies";
    Cookies.set("smores cookie", 0);
    document.querySelector("#smoresCookie").innerHTML = "You have " + 0 + " smores cookies";
    Cookies.set("lemon cookie", 0);
    document.querySelector("#lemonCookie").innerHTML = "You have " + 0 + " lemon cookies";
}