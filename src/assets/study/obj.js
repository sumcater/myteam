let p = {
  name: "aaa",
  age: 16,
};
// for (let k in p) {
//   console.log(k, p[k]);
// }
for (let k of p) {
  console.log(k);
}

let a = ["a", "s", "d"];
for (let k of a) {
  console.log(k);
}
for (let k in a) {
  console.log(k);
}
