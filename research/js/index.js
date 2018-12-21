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


var work = document.getElementById("portfolioItemContainer");
var workRequest = new XMLHttpRequest();

workRequest.open("GET", "json/items.json", true);
workRequest.onreadystatechange = function () {
    if (workRequest.readyState === 4) {
        if (workRequest.status === 200 || workRequest.status == 0) {
            var html = "";
            JSON.parse(workRequest.responseText).forEach(function (work) {
                console.log(work.name);
                html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + work.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">close</i></span><p>" + work.description + "</p></div></div></div>";
            });
            work.innerHTML = html;
        }
    }
};
workRequest.send(null);

var work2 = document.getElementById("portfolioItemContainer2");
var work2Request = new XMLHttpRequest();

work2Request.open("GET", "json/items2.json", true);
work2Request.onreadystatechange = function () {
    if (work2Request.readyState === 4) {
        if (work2Request.status === 200 || work2Request.status == 0) {
            var html = "";
            JSON.parse(work2Request.responseText).forEach(function (work2) {
                console.log(work2.name);
                html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + work2.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + work2.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + work2.name + "<i class=\"material-icons right\">close</i></span><p>" + work2.description + "</p></div></div></div>";
            });
            work2.innerHTML = html;
        }
    }
};
work2Request.send(null);
