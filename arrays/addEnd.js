// Create a function called addEnd that takes in an array and a number and
// positions the number at the end of the array. Return the new array.

// var arr=[1,71,2,96];
// var num;
function addEnd(arr,num){
    add = arr.push(num);
    return arr
}
console.log(addEnd([5,5,6],2));


// DO NOT DELETE
module.exports = addEnd;
