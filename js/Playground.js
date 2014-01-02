requirejs.config({
    paths: {
        jquery : '../../libs/jquery/jquery.min'
    },
    shim: {
        playground: ['jquery']
    }
});

define(['jquery'],function($) {

    'use strict';

    return {

        assert: function assert(value, description) {
            var li = document.createElement('li');
            li.className = value ? 'pass' : 'fail';
            li.appendChild(document.createTextNode(description));
            $("#results").append(li);
        },

        /**
         * Inheritance Example by Jon Bretman
         */
        extend: function(child, parent) {
            for(var key in parent) {
                if(parent.hasOwnProperty(key)) {
                    child[key] = parent[key];
                }
            }

            function Ctor() {
                this.constructor = child;
            }

            Ctor.prototype = parent.prototype;
            child.prototype = new Ctor();
            child._super = parent.prototype;
            return child;
        }
    };

});
