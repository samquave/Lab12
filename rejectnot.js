var p = new Promise(function(resolve, reject) {
    resolve('I FIRED');
    var e = new Error('I DID NOT FIRE');
    reject(e);
})

function onRejected(err) {
    console.log(err.message);
};

p.then(console.log, onRejected);

// p.then(console.log, function(err) {
    
//      console.log(err.message);
//     });