if (window.XMLHttpRequest) {
    // Mozilla, Safari, ...
    request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    // IE
    try {
        request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
}

request.addEventListener("load", function () {
    console.log(this.responseText);
});

request.open(
    "GET",
    "https://api.github.com/search/repositories?q=javascript",
    true
);

request.send(null);
