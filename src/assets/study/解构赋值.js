let data = {
    "total": 75,
    "list": {
        "id": 8,
        "theme": "5",
        "posterList": [{
            "posterId": 72,
            "staffId": 3,
            "name": "海报五",
            "zindex": 1
        }]
    },
    "pageNum": 1,
    "pageSize": 10,
};

let { total, list: { id, theme } } = data
console.log(total, id, theme); //75 8 "5"


let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
}
let { c, b, ...res } = obj
console.log(res); //{ a: 1, d: 4, e: 5 }



let arr = [1, 2, 3, 4, 5]
let [a, , c, ...res] = arr
console.log(a, c, res); //1 3 [ 4, 5 ]



