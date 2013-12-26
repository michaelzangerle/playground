(function() {

    'use strict';

    function memoizeSimplified(fn) {

        return function() {

            // convert arguments object into real array
            // value which are not in the function signature get grouped in the arguments object
            var args = Array.prototype.slice.call(arguments),
                hash = "",
                i = args.length,
                currentArg = null;
            while (i--) {
                currentArg = args[i];

                if (typeof currentArg === 'object') {
                    hash += JSON.stringify(currentArg);
                } else {
                    hash += currentArg;
                }

                // when not initialized then init with empty object
                fn.memoize || (fn.memoize = {});
            }

            if (hash in fn.memoize) {
                return  fn.memoize[hash];
            } else {
                return fn.memoize[hash] = fn.apply(this, args);
            }
        };
    }

    /*
     * memoize.js
     * by @philogb and @addyosmani
     * with further optimizations by @mathias
     * and @DmitryBaranovsk
     * perf tests: http://bit.ly/q3zpG3
     * Released under an MIT license.
     */
    function memoize(fn) {
        return function() {
            var args = Array.prototype.slice.call(arguments),
                hash = "",
                i = args.length,
                currentArg = null;
            while (i--) {
                currentArg = args[i];
                hash += (currentArg === Object(currentArg)) ?
                    JSON.stringify(currentArg) : currentArg;
                fn.memoize || (fn.memoize = {});
            }
            return (hash in fn.memoize) ? fn.memoize[hash] :
                fn.memoize[hash] = fn.apply(this, args);
        };
    }

    function fibSimplified(x) {
        if (x < 2) {
            return 1;
        } else {
            return fib(x - 1) + fib(x - 2);
        }
    }

    function fib(x) {
        if (x < 2) {
            return 1;
        } else {
            return fib(x - 1) + fib(x - 2);
        }
    }

    /*console profiling test*/
    var fibTest, fibTestSimplified = memoizeSimplified(fibSimplified);

    //first call
    console.time("Simplified non-memoized call");
    console.log(fibTestSimplified(20)); //varies (eg.10946)
    console.timeEnd("Simplified non-memoized call");

    //let's see how much better memoization fares..
    console.time("Simplified memoized call");
    console.log(fibTestSimplified(20));
    //0ms in most cases (if already cached)
    console.timeEnd("Simplified memoized call");

    /*console profiling test*/
    fibTest = memoize(fib);

    //first call
    console.time("non-memoized call");
    console.log(fibTest(20)); //varies (eg.10946)
    console.timeEnd("non-memoized call");

    //let's see how much better memoization fares..
    console.time("memoized call");
    console.log(fibTest(20));
    //0ms in most cases (if already cached)
    console.timeEnd("memoized call");


})();


