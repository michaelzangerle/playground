requirejs.config({
    paths: {
        playground: '../../dist/Playground'
    }
});

require(['playground'], function(playground) {

    'use strict';

    var Person, Doctor, pers, doc,
        obj = {
            name: "Object"
        };

    /**
     * Context, arguments, call, apply etc
     */
    function foo(param) {
        console.log("param is", param);
        console.log("this is", this);
        console.log("arguments are", arguments);
    }

    console.group("Basics 1 - context, arguments, call, apply, bind");

    console.group("no context, no arguments");
    foo();
    console.groupEnd("no context, no arguments");

    console.group("no context but with argument");
    foo(1, 2, 3, 4);
    console.groupEnd("no context but with argument");

    console.group("call, global context, with argument");
    foo.call(window, 1, 2, 3, 4);
    console.groupEnd("call, global context, with argument");

    console.group("apply, global context, with argument");
    foo.apply(window, [1, 2, 3, 4]);
    console.groupEnd("apply, global context, with argument");

    console.group("apply, obj context, with argument");
    foo.apply(obj, [1, 2, 3, 4]);
    console.groupEnd("apply, obj context, with argument");

    Function.prototype.bind = function() {
        var fn = this,
            args = Array.prototype.slice.call(arguments),
            object = args.shift();

        return function() {
            return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)));
        };
    };

    console.group("bind, obj context, with argument");
    (foo.bind(obj, [123,1,2,3,4,5]))();
    (foo.bind(obj, 123,1,2,3,4,5))();
    console.groupEnd("bind, obj context, with argument");

    console.groupEnd("Basics 1 - context, arguments, call, apply, bind");

    /**
     * Inheritance Example
     */


        // classes
    Person = function(name) {
        this.name = name;
    };

    /**
     * Age of a person
     * @type {number}
     */
    Person.prototype.age = 12;
    Person.prototype.getAge = function() {
        return this.age;
    };

    /**
     * Name of a person
     * @type {string}
     */
    Person.prototype.name = "";
    Person.prototype.getName = function() {
        return this.name;
    };

    Doctor = function(name) {
        Person.call(this, 'Dr. ' + name);
    };

    playground.extend(Doctor, Person);

    // example
    pers = new Person("John");
    doc = new Doctor("Bill");

    playground.assert(pers instanceof Person, "john is an instance of an Person");
    playground.assert(doc instanceof Person, "doc is an instance of an Person");
    playground.assert(doc instanceof Doctor, "doc is an instance of a Doctor");
    playground.assert(doc.getAge, "doc is " + doc.getAge() + " years old");
    playground.assert(pers.getName, pers.getName() + " is the name of the Person");
    playground.assert(doc.getName, doc.getName() + " is the name of the Doctor");

});


