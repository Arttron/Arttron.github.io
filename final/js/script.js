'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
'use strict';
(function (document) {
    var Parent = function Parent() {
        _classCallCheck(this, Parent);

        console.log('create class');
    };

    var p = new Parent();
    var a = new Parent();
    var b = new Parent();
    function myJsonRequest() {
        var ID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1empk9';

        var serchRes = {};
        var key = "";
        var myJsonHTTP = new XMLHttpRequest();
        myJsonHTTP.open("GET", 'https://api.myjson.com/bins/' + ID, true);
        myJsonHTTP.send();
        setTimeout(function () {

            console.log(myJsonHTTP.statusText);
        }, 3000);
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
    var grid = document.querySelector('.grid');
    var msnry = new Masonry(grid, {
        // options...
        columnWidth: '.grid-sizer',
        // do not use .grid-sizer in layout
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: 10
    });
})(document);