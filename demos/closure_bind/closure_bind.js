(function () {

    'use strict';

    var el, el2, button, assert, bind;

    assert = function assert(value, description) {
        var li = document.createElement('li');
        li.className = value ? 'pass' : 'fail';
        li.appendChild(document.createTextNode(description));
        document.getElementById("results").appendChild(li);
    },

    bind = function bind(context, name) {
        return function() {
           return context[name].apply(context,arguments);
        };
    },

    button = {
        clicked: false,
        click: function () {
            this.clicked = true;
            assert(button.clicked, "The button has been clicked!");
        }
    },

    el = document.getElementById("test");
    el.addEventListener("click", button.click, false);

    el2 = document.getElementById("test2");
    el2.addEventListener("click", bind(button, "click"), false);


})();


