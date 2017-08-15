'use strict';

////= lory.min.js
/**
 * Created by User on 09.08.2017.
 */
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var slider = document.querySelector('.js_slider');
        lory(slider, {
            // options going here
            infinite: 1
        });
        var slider2 = document.querySelector('.js_slider-two');
        lory(slider2, {
            // options going here
            infinite: 1
        });
        var slider1 = document.querySelector('.js_slider-one');
        lory(slider1, {
            // options going here
            infinite: 1
        });
    });
})();
/**
 * Created by User on 14.08.2017.
 */
(function () {
    var randomSearch = ["glass", "animal", "green", "city", "yellow", "red", "flower", "sky", "summer"];
    var requestSend = 0;
    function pixaBayRequest() {
        var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "city";
        var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        var serchRes = {};
        var key = "5780982-5f1903b9b55e403f26dbb04a1";
        var pixaBayHTTP = new XMLHttpRequest();
        pixaBayHTTP.open("GET", "https://pixabay.com/api/?key=" + key + "&q=" + query + "&page=" + page + "&per_page=7&image_type=photo", true);
        pixaBayHTTP.onreadystatechange = function () {
            if (pixaBayHTTP.readyState == 4) {
                if (pixaBayHTTP.status == 200) {

                    renderIdeasTenplate(JSON.parse(pixaBayHTTP.responseText));
                    var grid = document.querySelector('.grid');
                    var msnry = new Masonry(grid, {
                        // options...
                        columnWidth: '.grid-sizer',
                        // do not use .grid-sizer in layout
                        itemSelector: '.grid-item',
                        percentPosition: true,
                        gutter: '.grid-gutter'
                    });
                }
            }
        };
        pixaBayHTTP.send("null");
        return serchRes;
    }
    function renderIdeasTenplate(data) {
        var reg = /^[\w \ ]+/g;
        var i = 0;
        _.forEach(data.hits, function (item) {
            data.hits[i].tags = item.tags.match(reg)[0];
            i++;
        });
        var partnersTmpl = _.template(document.querySelector("#IdeasTemplate").innerText);
        document.querySelector("#ideas__api-img").innerHTML = partnersTmpl(data);
    }
    pixaBayRequest(randomSearch[_.random(0, 8)]);
    var searchBtn = document.querySelector("#search__button");
    var searchText = document.querySelector('#search__input');

    searchBtn.addEventListener("click", function (event) {
        event.preventDefault();

        if (!requestSend) {
            setTimeout(function () {
                requestSend = 0;
            }, 2000);
            pixaBayRequest(searchText.value);
            requestSend = 1;
        }
    });
})();
'use strict';
(function (document) {
    function myJsonRequest() {
        var ID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1d1pv5';

        var serchRes = {};
        var myJsonHTTP = new XMLHttpRequest();
        myJsonHTTP.open("GET", 'https://api.myjson.com/bins/' + ID, true);
        myJsonHTTP.send();
        myJsonHTTP.onreadystatechange = function () {

            if (myJsonHTTP.readyState == 4) {
                if (myJsonHTTP.status == 200) {
                    renderTenplate(JSON.parse(myJsonHTTP.responseText));
                    return myJsonHTTP.responseText;
                }
            }
        };

        return serchRes;
    }
    function renderTenplate(data) {
        var partnersTmpl = _.template(document.querySelector("#PartnersTemplate").innerText);
        document.querySelector("#partners-cont").innerHTML = partnersTmpl(data);
    }
    myJsonRequest();
    // vanilla JS
    // init with element
})(document);