// Array Reduce menthod in JS - VERY interesting concept for understanding
const num = [1,2,3,4,5,6]
const sum = num.reduce((p,c) => {
    console.log(p)
    console.log(c)
    return p+c
}, 0)
console.log(sum)
// p=0 and c=1
// p=1 and c=1+2
