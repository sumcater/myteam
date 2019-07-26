let arr = [1, 2, 2, 3, 3, 4, 5]

//push
// console.log(arr.push(12,12)); //9 返回值 ：返回长度
// console.log(arr); // [ 1, 2, 2, 3, 3, 4, 5, 12 ,12] 修改原有的数组的值

Array.prototype.push1 = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
    }

    return this.length
}
console.log(arr.push1(12, 12)); //9 返回值 ：返回长度
console.log(arr); // [ 1, 2, 2, 3, 3, 4, 5, 12 ,12] 修改原有的数组的值
