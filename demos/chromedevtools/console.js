(function() {
    'use strict';

    var obj,
        i;

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
    console.group("counting results");
    for (i = 0; i < 10; i++) {
        foo();
    }
    console.groupEnd();


    obj = $("body");

}());
