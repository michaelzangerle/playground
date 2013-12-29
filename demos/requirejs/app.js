requirejs.config({
    shim: {
        'purchase': ["credits","product"],
        'app': ['purchase']
    }
});

require(['purchase'], function(purchase){

    'use strict';

    var result = purchase.purchaseProduct();
    console.log("Result of purchase: "+result);
});

