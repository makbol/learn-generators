// Task
//
// Add error handling to this boilerplate. Teach run to throw on exception and
// catch that in generator. firstFile should be null if it doesn't exist.

var fs = require('fs');

function run(generator) {
    var it = generator(go);
    function go(err, result) {
        if (err) return it.throw(err);
        it.next(result);
    }

    go();
}

run(function *(done) {

    var dirFiles, firstFile = null;

    try {
        dirFiles = yield fs.readdir('NoNoNo', done);
        firstFile = dirFiles[0];
    } catch (err) { }


    console.log(firstFile);

});