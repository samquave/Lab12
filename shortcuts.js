var resolve = Promise.resolve('RESOLVED');
var reject = Promise.reject(new Error('REJECTED'));

resolve.then(console.log);

reject.catch(console.log);

