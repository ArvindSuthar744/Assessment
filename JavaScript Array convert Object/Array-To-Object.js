
// let arr = [1,2,2,3];
// let arr = [9,9,9,99];
// let arr = [4,3,2,1];

function count(arr) {
    let obj = {};

    arr.forEach((element) => {
        if (!obj[element]) {
        obj[element] = 1;
        } else {
        obj[element]++;
        }
    });
    // console.log(obj)
    return obj;
}

console.log(count([1, 2, 2, 3]));
console.log(count([9, 9, 9, 99]));
console.log(count([4, 3, 2, 1]));
