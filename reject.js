var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var rejected = new Error('REJECTED!');
        reject(rejected);
    }, 300);
})

p.then(null, onReject);
function onReject(rej) {
    console.log(rej.message);
}
