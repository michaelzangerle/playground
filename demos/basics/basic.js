requirejs.config({
    paths: {
        playground: '../../dist/Playground'
    }
});

require(['playground'], function(playground) {

    'use strict';

    // user.foo() vs var test = user.foo() => test();
    // arguments in user.foo(1,2,3,4) vs in user.foo2(a, b, c){} and user.foo2(1,2,3,4,5,6);
    // this in user.foo() and test()
    // this in foo1() und foo1()-> foo2()
    // this in user.foo1() und user.foo1()-> user.foo2()
    // call vs apply
    // bind

    /**
     * Inheritance Example
     */
    var Person, Doctor, pers, doc;

    // classes
    Person = function(name) {
        this.name = name;
    };

    Person.prototype.name = null;
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
    playground.assert(pers.getName, pers.getName() + " is the name of the Person");
    playground.assert(doc.getName, doc.getName() + " is the name of the Doctor");

});


