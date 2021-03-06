

var link = document.getElementById("socialLinkContent");
var linkRequest = new XMLHttpRequest();
linkRequest.open("GET", "json/links.json", true);
linkRequest.onreadystatechange = function () {
    if (linkRequest.readyState === 4) {
        if (linkRequest.status === 200 || linkRequest.status == 0) {
            var html = "";
            JSON.parse(linkRequest.responseText).forEach(function (link) {
                console.log(link.name);
                html += "<div class=\"links waves-effect\"><a href=" + link.url + " class=\"black-text valign-wrapper\" target=\"_self\"><i class=\"link_icon mdi mdi-" + link.icon + "\" style=\"color: " + link.color + "\"></i>&nbsp; " + link.name + "</a></div>";
            });
            link.innerHTML = html;
        }
    }
};
linkRequest.send(null);

var workC = document.getElementById("portfolioCurrent");
var workCRequest = new XMLHttpRequest();
workCRequest.open("GET", "json/current.json", true);
workCRequest.onreadystatechange = function () {
    if (workCRequest.readyState === 4) {
        if (workCRequest.status === 200 || workCRequest.status == 0) {
            var html = "";
            JSON.parse(workCRequest.responseText).forEach(function (workC) {
                console.log(workC.name);
                html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + workC.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + workC.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + workC.name + "<i class=\"material-icons right\">close</i></span><p>" + workC.description + "</p></div></div></div>";
            });
            workC.innerHTML = html;
        }
    }
};
workCRequest.send(null);

var workp = document.getElementById("portfolioPreprint");
var workpRequest = new XMLHttpRequest();
workpRequest.open("GET", "json/preprint.json", true);
workpRequest.onreadystatechange = function () {
    if (workpRequest.readyState === 4) {
        if (workpRequest.status === 200 || workpRequest.status == 0) {
            var html = "";
            JSON.parse(workpRequest.responseText).forEach(function (workp) {
                console.log(workp.name);
                html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + workp.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + workp.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span><p><a href=" + workp.link + " target=\"_blank\">" + workp.linkname + "</a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + workp.name + "<i class=\"material-icons right\">close</i></span><p>" + workp.description + "</p>" + "<p><a href=" + workp.link + " target=\"_blank\">" + workp.linkname + "</a>" + "</p></div></div></div>";
            });
            workp.innerHTML = html;
        }
    }
};
workpRequest.send(null);


var work = document.getElementById("portfolioPublished");
var workRequest = new XMLHttpRequest();
workRequest.open("GET", "json/published.json", true);
workRequest.onreadystatechange = function () {
    if (workRequest.readyState === 4) {
        if (workRequest.status === 200 || workRequest.status == 0) {
            var html = "";
            JSON.parse(workRequest.responseText).forEach(function (work) {
                console.log(work.name);
                html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + work.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span><p><a href=" + work.link + " target=\"_blank\">" + work.linkname + "</a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">close</i></span><p>" + work.description + "</p>" + "<p><a href=" + work.link + " target=\"_blank\">" + work.linkname + "</a>" + "</p></div></div></div>";
            });
            work.innerHTML = html;
        }
    }
};
workRequest.send(null);
