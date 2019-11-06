const formArr= [
  { label: "日期", value: "data" },
  { label: "姓名", value: "name" },
  { label: "地址", value: "address" }
]
let aa=formArr.reduce((m, n) => {
  // console.log(m, n, i);
  m[n.value]=""
  return m
}, {})
console.log(aa);

const form = { ipt1: "", ipt416: "",ipt2: "", ipt4: "", ipt56: "" }
// console.log(Object.keys(form));

let aaa=Object.keys(form).reduce((m, n) => {
  console.log(m, n, +n.slice(3));
  if (+m.slice(3) < +n.slice(3)) {
    m=n
  }
  return m
}, "")

console.log(aaa);

