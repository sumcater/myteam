//log
let aa = 1;
let log = function () {
  return console.log(...arguments);
};
log(aa, "888");

let arr = ["aa", "ss", ''];
let arr2 = [{ label: "aa", value: 1 }, { label: "sss", value: 2 }, { label: "ss", value: 3 }, { label: "", value: 4 }];
// let ss=arr2.map(n => {
//   if (arr.includes(n.label)) return n.value
// }).filter(n => n!=undefined);
let ss = arr2.reduce((m, n) => {
  if (arr.includes(n.label)) {
    m.push(n.value)
  }
  return m
}, [])
console.log(ss);

let obj = {
  a: "",
  b: "",
  c: "",
}
// let z1 = []
console.log([obj]);

