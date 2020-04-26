const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("fail22")), 3000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000);
});

p2.then(result => console.log(result)).catch(error => console.log(error));

let p = new Promise((m, n) => {
  setTimeout(() => {
    .2 > 0.5 ? m('success') : n('fail');
  }, 1000)
});
p.then((res) => {
  console.log(res);
}, (e) => {
  console.log(e);
});