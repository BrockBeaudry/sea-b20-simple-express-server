'use strict';

casper.test.begin('Testing home page status', 1, function suite(test) {

    casper.start('http://localhost:3000/', function() {
        test.assertHttpStatus(200, 'HTTP status OK');
    });

    casper.run(function(){
        test.done();
    });
});