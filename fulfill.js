var promise = new Promise(function (fulfill, reject) {
        setTimeout(function() {
            fulfill('FULFILLED!');
        }, 300);
});

promise.then(function(success){
    console.log(success);
}, function(err) {
    console.log(err);
});

