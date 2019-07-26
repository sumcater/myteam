let arr = [1, 2, 3, 22, 233, 22, 2, 233, 'a', 3, 'b', 'a'];

Array.prototype.unique = function () {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        if (newArr.indexOf(this[i]) === -1) {
            newArr.push(this[i])
        }
    }
    return newArr
}
Array.prototype.unique = function () {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        if (!newArr.includes(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr
}

Array.prototype.unique = function () {
    const newArray = [];
    this.sort();
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== this[i + 1]) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}
Array.prototype.unique = function () {
    const set = new Set(this);
    return Array.from(set);
}
Array.prototype.unique = function () {
    return [...new Set(this)];
}



console.log(arr.unique());
