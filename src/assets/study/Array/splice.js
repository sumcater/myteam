let arr = [1, 2, 2, 3, 3, 4, 5]

//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// console.log(arr.splice(1,2,1)); // 返回值 ：[ 2, 2 ] 返回删除的元素组成的数组
// console.log(arr); //[ 1, 1, 3, 3, 4, 5 ] 修改原有的数组的值

console.log(arr.splice(0)); //[ 1, 2, 2, 3, 3, 4, 5 ]
console.log(arr); //[]

console.log(arr.splice()); //[]
console.log(arr); //[ 1, 2, 2, 3, 3, 4, 5 ]
