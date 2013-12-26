(function() {

    // https://developers.google.com/chrome-developer-tools/docs/console-api

    'use strict';

    var obj, i, array;

    console.log("dfasdf");

    // clear console
    console.clear();

    // assert with console.assert()
    console.assert(1 === '1', "1 is not the same as \'1\'");


    function foo() {

        // count with console.count()
        console.count("function foo invoked!");
    }

    // group console messages
    //console.group("counting results");
    console.groupCollapsed("counting results");
    for (i = 0; i < 10; i++) {
        foo();
    }
    console.groupEnd();


    obj = $("#content");

    // console log vs dir
    console.dir(obj);
    console.log(obj);


    console.error("an error occured!");

    console.warn("waring!");

    console.time("Array initialize");
    array= new Array(1000000);
    for (i = array.length - 1; i >= 0; i--) {
        array[i] = {};
    }
    console.timeEnd("Array initialize");

}());
