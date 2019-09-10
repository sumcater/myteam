//log
let aa = 1;
let log = function() {
  return console.log(...arguments);
};
log(aa, "888");

let arr = ["aa", "ss",''];
let arr2 = [{ label: "aa", value: 1 }, { label: "", value: 2 }, { label: "ss", value: 3 }, { label: "dd", value: 4 }];
let ss=arr2.map(n => {
  if (arr.includes(n.label)) return n.value
}).filter(n => n!=undefined);
console.log(ss);

let obj = {
  a:"",
  b:"",
  c:"",
}
// let z1 = []
console.log([obj]);

