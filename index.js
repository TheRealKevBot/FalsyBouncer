// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean. 

function bouncer(arr) {
    let truthy = []
    let falsey = []
    arr.map(val => {
        let bool = Boolean(val)
        if (bool === true){
            truthy.push(val)
        } else {
            falsey.push(val)
        }
    })
    return truthy
}
  
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([0, 0, 0, 0, 0]));
console.log(bouncer([354, 'NaN', 1, null, undefined]));
console.log(bouncer(['null', 'NaN', 1, 2, 'undefined']));
console.log(bouncer([1, 2, 0, -2, -1]));