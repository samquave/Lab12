function attachTitle(value) {
    return 'DR. ' + value;
};

var p = Promise.resolve('MANHATTAN');

p.then(attachTitle).then(console.log);
