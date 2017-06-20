/**
 * Created by User on 21.06.2017.
 */
"use strict";
var jsonV = new XMLHttpRequest();
jsonV.open('GET', './data/data.json');
jsonV.send();
jsonV.onloadend = function(){
    var names = JSON.parse(jsonV.responseText);
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = {title: "handelbars",
        body: "This Gallery generate"
    };
    context['users'] = names.users;
    var htmlCon    = template(context);
    document.querySelector('#hb').innerHTML = htmlCon;
};